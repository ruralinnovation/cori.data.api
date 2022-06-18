const { ApolloServer, gql, cac } = require('apollo-server-lambda');
const { GraphQLObjectType, GraphQLSchema } = require('graphql');
import { PythonRestApi } from './datasources';
import { mergeSchemas } from '@graphql-tools/schema';
import GeoJSON from './schema/geojson';
import { Cache, checkCache } from './cache';
import { GraphQLBoolean, GraphQLList, GraphQLString } from 'graphql';
const compression = require('compression');
const express = require('express');
import { bcatQueries } from './schema/bcatQueries';

const cache = new Cache();

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    setup: {
      type: GeoJSON.GeometryTypeUnion,
      args: null,
      resolve: async (_: any, __: any, { dataSources }: any) => {
        return true;
      },
    },
    feature_collection: {
      type: GeoJSON.FeatureCollectionObject,
      args: {
        table: {
          type: GraphQLString!,
        },
        counties: {
          type: new GraphQLList(GraphQLString),
        },
        state_abbr: {
          type: GraphQLString,
        },
        skipCache: {
          type: GraphQLBoolean,
        },
      },
      resolve: async (
        _: any,
        { table, state_abbr, counties, skipCache }: any,
        { dataSources, redisClient }: any,
        info: any
      ) => {
        if (state_abbr) {
          return skipCache
            ? await dataSources.pythonApi.getItem(`bcat/${table}/geojson?state_abbr=${state_abbr}`)
            : await redisClient.checkCache(`${table}-${state_abbr}`, async () => {
                return await dataSources.pythonApi.getItem(`bcat/${table}/geojson?state_abbr=${state_abbr}`);
              });
        } else {
          if (!counties) {
            throw new Error('When no state abbr is specified you MUSt filter by state_abbr');
          }
          return await counties.reduce(
            async (fc, county) => {
              const featureCollection = await fc;
              const res: any = skipCache
                ? await redisClient.checkCache(`${table}-${county}`, async () => {
                    return await dataSources.pythonApi.getItem(`bcat/${table}/geojson?geoid_co=${county}`);
                  })
                : await dataSources.pythonApi.getItem(`bcat/${table}/geojson?geoid_co=${county}`);
              if (res) {
                return {
                  ...featureCollection,
                  features: featureCollection.features.concat(res.features),
                };
              } else {
                return featureCollection;
              }
            },
            Promise.resolve({
              type: 'FeatureCollection',
              features: [],
            })
          );
        }
      },
    },
    county_feature: {
      type: GeoJSON.FeatureCollectionObject,
      args: {
        table: {
          type: GraphQLString!,
        },
        county: {
          type: GraphQLString!,
        },
      },
      resolve: async (_: any, { table, county }: any, { dataSources, redisClient }: any, info: any) => {
        return await dataSources.pythonApi.getItem(`bcat/${table}/geojson?geoid_co=${county}`);
        return await redisClient.checkCache(`${table}-${county}`, async () => {
          return await dataSources.pythonApi.getItem(`bcat/${table}/geojson?geoid_co=${county}`);
        });
      },
    },
    ...bcatQueries,
  },
});
const schema = mergeSchemas({
  schemas: [
    new GraphQLSchema({
      query: RootQuery,
    }),
  ],
});

/**
 * Custom Plugin Development
 */

const customPlugin = {
  // Fires whenever a GraphQL request is received from a client.
  async requestDidStart(requestContext: any) {
    console.log('Request started! Query:\n' + requestContext.request.query);
    console.log('Request :\n' + JSON.stringify(requestContext.request));

    return {
      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      async parsingDidStart(requestContext: any) {
        console.log('Parsing started!');
      },

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.
      async validationDidStart(requestContext: any) {
        console.log('Validation started!');
      },
    };
  },
};

export const apolloConfig = {
  schema,
  csrfPrevention: false,
  playground: {
    endpoint: '/playground',
  },
  dataSources: () => ({
    pythonApi: new PythonRestApi(),
  }),
  plugins: [customPlugin],
  context: ({ event, context, express, req }: any) => {
    return {
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
      customHeaders: {
        headers: {
          'Authorization': event.headers ? event.headers.Authorization : '',
          'credentials': 'same-origin',
          'Content-Type': 'application/json',
        },
      },
      expressRequest: express.req,
      redisClient: cache,
    };
  },
  cors: {
    origin: ['*'],
    credentials: true,
  },
};

export const server = new ApolloServer(apolloConfig);

export const handler = server.createHandler({
  expressAppFromMiddleware(middleware) {
    console.log('Setting up express middleware');
    const app = express();
    app.use(compression());
    app.use(middleware);
    return app;
  },
});
