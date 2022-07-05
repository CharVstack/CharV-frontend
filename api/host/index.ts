/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  get: {
    status: 200;

    /** OK */
    resBody: {
      cpu: number;
      memory: number;
      storage_pools: Types.Storage_pool[];
    };
  };
};
