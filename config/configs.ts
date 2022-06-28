import { ApiStackProps } from '../packages/infrastructure/lib/ApiStack';

/**
 * Extends stack props with deploy/start configuration
 */
export interface IMixedConfig extends ApiStackProps {
  dbpassword?: string;

  /**
   * Each pipeline creates a new bucket, which can push us past the bucket quota.
   * This allows us to re-use an existing one.
   */
  artifactBucketName?: string;

  /**
   * This is used by start-api and integration testing
   * You can add this prop to your config after initial deploy
   * @todo: Look this up via stack outputs?
   */
  userPoolId?: string;

  /**
   * Used for integration testing
   */
  testing?: {
    apiEndpoint: string;
    cognitoClientId: string;
    username: string;
    password: string;
  };
}

/**
 * Provides strongly typed configs for deployment
 * Configs should be matched to a branch. Use the GIT_BRANCH environment variable to override.
 */
interface IConfigs {
  [name: string]: IMixedConfig;
}

export const getConfig = (name: string): IMixedConfig => {
  const config = Config[name];

  if (!config) {
    throw new Error(`Unknown config: ${name}`);
  }
  return config;
};

const mfDefaults: Omit<IMixedConfig, 'client' | 'stage'> = {
  project: 'data-api',
  loggingLevel: 'info',
  retain: false,
  microservicesDirectory: 'python-microservices',
  env: {
    account: '190686435752',
    region: 'us-east-1'
  },
  databaseConfig: {
    vpcId: 'vpc-0499b35a2f5231aae',
    databaseSecurityGroupId: 'sg-0be66ca1818bcc0e0',
    host: 'cori-database-small-dev.c0no2rvbbm4n.us-east-1.rds.amazonaws.com',
    dbname: 'data',
    parameterName: '/cori/read_only_user_credentials',
    dbuser: 'read_only_user'
  },
  cacheEnabled: true,
  cacheConfig: {
    host: 'redis-17358.c273.us-east-1-2.ec2.cloud.redislabs.com',
    port: 17358,
    username: 'default',
    parameterName: '/cori/redis-cluster-credentials'
  },
  /**
   * @todo: create a bucket with a prettier name
   */
  artifactBucketName: 'coridataapicicdstack-devpipelineartifactsbucketfd-1smu59goaufdm'
};

const coriDefaults: Omit<IMixedConfig, 'client' | 'stage'> = {
  project: 'data-api',
  loggingLevel: 'info',
  retain: true,
  microservicesDirectory: 'python-microservices',
  env: {
    account: '190686435752',
    region: 'us-east-1'
  },
  databaseConfig: {
    vpcId: 'vpc-0499b35a2f5231aae',
    databaseSecurityGroupId: 'sg-0cdb6d6c66b8e6a4a',
    host: 'cori-testing-db.c0no2rvbbm4n.us-east-1.rds.amazonaws.com',
    dbname: 'postgres',
    parameterName: 'cori-data-api-read_only_user_password',
    dbuser: 'read_only_user'
  },
  cacheEnabled: true,
  //@todo: this is pointing at the MF environment
  cacheConfig: {
    host: 'redis-17358.c273.us-east-1-2.ec2.cloud.redislabs.com',
    port: 17358,
    username: 'default',
    parameterName: '/cori/redis-cluster-credentials'
  }
};

export const Config: IConfigs = {
  'refactor/ibliskavka-pipelines': {
    ...mfDefaults,
    client: 'ib',
    stage: 'dev'
  },
  'refactor/ibliskavka-simplify': {
    ...mfDefaults,
    client: 'ib',
    stage: 'simplify',
    userPoolId: 'us-east-1_mihHAkM5I',
    testing: {
      apiEndpoint: 'https://yw3sv9swbi.execute-api.us-east-1.amazonaws.com/dev',
      cognitoClientId: '6bteqt467q53q4f998ctumuav5',
      username: 'ib-dev@yopmail.com',
      password: 'P@ssw0rd1'
    }
  },
  'mf-dev': {
    ...mfDefaults,
    client: 'mf',
    stage: 'dev'
  },
  'local': {
    ...mfDefaults,
    client: 'mf',
    stage: 'local'
  },
  'dev1': {
    ...coriDefaults,
    client: 'cori',
    stage: 'dev',
    retain: false
  },
  'dev': {
    ...mfDefaults,
    client: 'cori',
    stage: 'dev'
  },
  'prod': {
    ...coriDefaults,
    client: 'cori',
    stage: 'prod'
  }
};
