/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  /** ホスト情報を取得する */
  get: {
    status: 200;

    /** OK */
    resBody: {
      cpu: Types.Cpu;
      mem: Types.Memory;
      storage_pools: Types.Storage_pool[];
    };
  };
};
