import React, { useEffect, useState } from "react";
import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
    concat,
    from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { connect } from "react-redux";
import { actions } from "../bcat/actions";
import { county_summary_query, county_summary_geojson_query } from "../bcat/queries";

export function ApolloGraphQLProvider (props) {
    const { children } = props;
    const [ client, setClient ] = useState(new ApolloClient(
        {
            uri: "http://localhost:4000",
            cache: new InMemoryCache({
                // typePolicies: { ... }
            }),
            link: // new HttpLink({ uri: `http://localhost:4000/`, fetch })
                from([
                    onError((gqlErrors, netError) => {
                        if (!!gqlErrors && gqlErrors.length > 0) {
                            gqlErrors.map((err /*: { message, location, path }*/) => {
                                // console.log"GraphQL Error: ", err);
                            })
                        }
                        if (!!netError){
                            // console.log"Network Error: ", netError)
                        }
                    }),
                    new HttpLink({ uri: `http://localhost:4000/`, fetch })
                ])
        })
    );

    useEffect(() => {
        console.log("aws_amplify_token: ", props.aws_amplify_token);

        const defaultOptions = {
            watchQuery: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'ignore',
            },
            query: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'all',
            },
        };

        if (!!props.aws_amplify_token) {
            const token = props.aws_amplify_token;

            const link =  // new HttpLink({ uri: `${config.apiUrl}/graphql` })
                from([
                    onError((gqlErrors, netError) => {
                        if (!!gqlErrors && gqlErrors.length > 0) {
                            gqlErrors.map((err /*: { message, location, path }*/) => {
                                // console.log"GraphQL Error: ", err);
                            })
                        }
                        if (!!netError){
                            // console.log"Network Error: ", netError)
                        }
                    }),
                    new HttpLink({ uri: `${import.meta.env.VITE_CORI_DATA_API}/graphql`, fetch })
                ]);

            const authMiddleware = new ApolloLink((operation, forward) => {
                operation.setContext({
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                return forward(operation);
            });

            const apolloClient = new ApolloClient({
                uri: `${import.meta.env.VITE_CORI_DATA_API}/graphql`,
                link: concat(authMiddleware, link),
                cache: new InMemoryCache({
                    // typePolicies: { ... }
                    // dataIdFromObject: o => (o.id ? `${o.__typename}-${o.id}` : `${o.__typename}-${o.cursor}`),
                }),
                credentials: 'include',
                defaultOptions
            });

            setClient(apolloClient);

            props.setCountySummaryQuery(county_summary_query);

            props.setCountyGeoJSONQuery(county_summary_geojson_query);

            if (typeof props.setReady === 'function') {
                props.setReady(true);
            }
        }
    }, [ props.aws_amplify_token ]);

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}

const ApolloGraphQLProviderRedux = connect(
    function mapStateToProps(state) {
        return {
            // ...state
            "county_summary_query": state.county_summary_query,
            "county_summary_geojson_query": state.county_summary_geojson_query,
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            // "actions": bindActionCreators(selectCounties, dispatch)
            // "actions": {
                "setCountySummaryQuery": (gql_query) => dispatch(actions.setCountySummaryQuery(gql_query)),
                "setCountyGeoJSONQuery": (gql_query) => dispatch(actions.setCountyGeoJSONQuery(gql_query)),
            // }
        };
    }
    // // Alternative shortcut to pass dispatch action to props...
    // {
    //     setAvailableCounties,
    //     selectCounties
    // }
)(ApolloGraphQLProvider);

export default ApolloGraphQLProviderRedux;

