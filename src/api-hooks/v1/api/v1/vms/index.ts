/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  /** VMを作成する */
  post: {
    status: 200;

    reqBody: {
      name: string;
      memory: number;
      vcpu: number;
    };
  };

  /** 全てのVM一覧を取得する */
  get: {
    status: 200;

    /** OK */
    resBody: {
      vms: Types.Vm[];
    };
  };
};