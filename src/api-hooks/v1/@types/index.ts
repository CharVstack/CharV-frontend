/* eslint-disable */
export type Vm = {
  name?: string | undefined;

  metadata?:
    | {
        id?: string | undefined;
        api_version?: string | undefined;
      }
    | undefined;

  memory?: number | undefined;
  vcpu?: number | undefined;

  devices?:
    | {
        disk?:
          | {
              type?: string | undefined;
              path?: string | undefined;
            }[]
          | undefined;
      }
    | undefined;
};

export type Cpu = {
  cpu?: number | undefined;
  cpu_mhz?: number | undefined;
};

export type Memory = {
  total?: number | undefined;
  used?: number | undefined;
  free?: number | undefined;
  used_percent?: number | undefined;
};

export type Storage_pool = {
  name?: string | undefined;
  total_size?: number | undefined;
  used_size?: number | undefined;
  path?: string | undefined;
  status?: string | undefined;
};
