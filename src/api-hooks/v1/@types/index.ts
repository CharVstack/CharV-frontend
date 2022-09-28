/* eslint-disable */
/** 仮想マシンを表すモデル */
export type Vm = {
  name: string;

  metadata: {
    id: string;
    api_version: string;
  };

  memory: number;
  vcpu: number;

  devices: {
    disk: {
      type: string;
      path: string;
    }[];
  };
};

/** ホストのCPU情報 */
export type Cpu = {
  counts: number;
  percent: number;
};

/** ホストのメモリ情報 */
export type Memory = {
  total: Type_uint64;
  used: Type_uint64;
  free: Type_uint64;
  used_percent: number;
};

/** ホストが持つストレージプールの情報 */
export type Storage_pool = {
  name: string;
  total_size: Type_uint64;
  used_size: Type_uint64;
  path: string;
  status: string;
};

export type Type_uint64 = number;
