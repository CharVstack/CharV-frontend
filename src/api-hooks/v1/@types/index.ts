/* eslint-disable */
/** 仮想マシンを表すモデル */
export type Vm = {
  name: string;
  metadata: Metadata;
  memory: number;
  vcpu: number;
  devices: Devices;
  status: 'error' | 'active' | 'pending' | 'unknown';
};

/** ホストのCPU情報 */
export type Cpu = {
  counts: number;
  percent: number;
};

/** ホストのメモリ情報 */
export type Memory = {
  total: number;
  used: number;
  free: number;
  used_percent: number;
};

/** ホストが持つストレージプールの情報 */
export type StoragePool = {
  name: string;
  total_size: number;
  used_size: number;
  path: string;
  status: 'Active' | 'Error';
};

export type Disk = {
  type: 'unknown' | 'qcow2';
  device: 'disk' | 'cdrom' | 'unknown';
  path: string;
};

export type Devices = {
  disk: Disk[];
};

export type Metadata = {
  id: string;
  api_version: string;
};

export type Host = {
  cpu: Cpu;
  mem: Memory;
  storage_pools: StoragePool[];
};
