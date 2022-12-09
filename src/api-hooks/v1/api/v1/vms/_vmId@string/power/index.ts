/* eslint-disable */
import type * as Types from '../../../../../@types';

export type Methods = {
  /** VMの電源状態を操作 */
  post: {
    status: 204;
    /** VMの電源状態を操作 */
    reqBody: Types.PostChangeVMsPowerStatusByVMIdRequest;
  };

  /** VMの電源状態を取得 */
  get: {
    status: 200;

    /** VMの電源情報 */
    resBody: {
      vm_power: Types.VmPowerInfo;
    };
  };
};
