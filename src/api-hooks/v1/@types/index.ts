/* eslint-disable */
/** 仮想マシンを表すモデル */
export type Vm = {
  name: string;
  metadata: Metadata;
  memory: number;
  cpu: number;
  devices: Devices;
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
  percent: number;
};

/** ホストが持つストレージプールの情報 */
export type StoragePool = {
  name: string;
  total_size: number;
  used_size: number;
  path: string;
  status: 'ACTIVE' | 'ERROR';
};

export type Disk = {
  name: string;
  pool: string;
  type: 'unknown' | 'qcow2';
  device: 'disk' | 'cdrom' | 'unknown';
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
  memory: Memory;
  storage_pools: StoragePool[];
};

export type VmPowerInfo = {
  clean_power_off: boolean;
  state: 'RUNNING' | 'UNKNOWN' | 'SHUTDOWN';
};

export type VmPowerActions = 'start' | 'shutdown' | 'reboot' | 'reset';

export type PostCreateNewVMRequest = {
  name: string;
  memory: number;
  cpu: number;
};

export type PatchUpdateVMRequest = {
  name: string;
  memory: number;
  cpu: number;
};

export type PostChangeVMsPowerStatusByVMIdRequest = {
  action: VmPowerActions;
};

export type GetAllVMsList200Response = {
  vms: Vm[];
};

export type PostCreateNewVM200Response = {
  vm: Vm;
};

export type GetVMByVMId200Response = {
  vm: Vm;
};

export type PatchUpdateVMByVMId200Response = {
  vm: Vm;
};

export type GetHost200Response = {
  host: Host;
};

export type GetVMPowerByVMId200Response = {
  vm_power: VmPowerInfo;
};
