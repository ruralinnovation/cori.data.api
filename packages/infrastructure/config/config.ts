import { ApiStackProps } from '../lib/ApiStack';

export interface IMixedConfig extends ApiStackProps {
  /** This is used by start-api only
   *  You can add this prop to your config after initial deploy
   */
  startApiUserPoolId?: string;
  dbpassword?: string;
}

/**
 * Provides strongly typed configs for deployment
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

export const Config: IConfigs = {
  'mf-dev': {
    client: 'cori',
    stage: 'dev',
    loggingLevel: 'info',
    retain: false,
    env: {
      account: '190686435752',
      region: 'us-east-1',
    },
    databaseConfig: {
      vpcId: 'vpc-0499b35a2f5231aae',
      databaseSecurityGroupId: 'sg-0cdb6d6c66b8e6a4a',
      host: 'cori-testing-db.c0no2rvbbm4n.us-east-1.rds.amazonaws.com',
      dbname: 'postgres',
      parameterName: 'cori-data-api-read_only_user_password',
      dbuser: 'read_only_user',
    },
  },
};