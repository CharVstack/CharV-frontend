/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  get: {
    status: 200;
    /** OK */
    resBody: Types.Vm;
  };

  patch: {
    status: 200;

    reqBody: {
      name: string;
      memory: number;
      vcpu: number;
    };
  };
};
