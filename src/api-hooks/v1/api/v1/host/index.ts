/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  /** ホスト情報を取得する */
  get: {
    status: 200;

    /** ホストの情報 */
    resBody: {
      host: Types.Host;
      message?: string | undefined;
    };
  };
};
