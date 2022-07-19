/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  post: {
    status: 200;

    reqBody: {
      name: string;
      memory: number;
      vcpu: number;
    };
  };

  get: {
    status: 200;

    /** OK */
    resBody: {
      vms: Types.Vm[];
    };
  };
};
