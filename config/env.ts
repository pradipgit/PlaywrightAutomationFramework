// config/env.ts

export type EnvType = 'qa' | 'staging' | 'prod';

export const environments = {
  qa: {
    baseURL: 'https://www.google.com',
    username: 'qa_user',
    password: 'qa_pass'
  },
  staging: {
    baseURL: 'https://naveenautomationlabs.com/',
    username: 'stg_user',
    password: 'stg_pass'
  },
  prod: {
    baseURL: 'https://www.google.com',
    username: 'prod_user',
    password: 'prod_pass'
  }
};

export const getEnv = () => {
  const envName = (process.env.TEST_ENV || 'qa') as EnvType;
  return environments[envName];
};