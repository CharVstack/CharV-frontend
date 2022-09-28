/* eslint-disable */
import type * as Types from '../../../../@types';

export type Methods = {
  /** 個々のVM情報を取得する */
  get: {
    status: 200;
    /** OK */
    resBody: Types.Vm;
  };

  /** VM情報を更新する */
  patch: {
    status: 200;

    reqBody: {
      name: string;
      memory: number;
      vcpu: number;
    };
  };
};
