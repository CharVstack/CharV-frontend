/* eslint-disable */
import type * as Types from '../../../../@types';

export type Methods = {
  /** 個々のVM情報を取得する */
  get: {
    status: 200;

    /** VMIdに合致するVM情報 */
    resBody: {
      vm: Types.Vm;
      message?: string | undefined;
    };
  };

  /** VM情報を更新する */
  patch: {
    status: 200;

    /** 更新されたVM情報 */
    resBody: {
      vm: Types.Vm;
      message?: string | undefined;
    };

    reqBody: {
      name: string;
      memory: number;
      vcpu: number;
    };
  };
};
