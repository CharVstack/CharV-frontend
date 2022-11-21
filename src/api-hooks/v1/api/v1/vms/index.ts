/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  /** VMを作成する */
  post: {
    status: 200;

    /** 新規作成されたVM情報 */
    resBody: {
      vm: Types.Vm;
    };

    reqBody: {
      name: string;
      memory: number;
      cpu: number;
    };
  };

  /** 全てのVM一覧を取得する */
  get: {
    status: 200;

    /** 全てのVM一覧 */
    resBody: {
      vms: Types.Vm[];
    };
  };
};
