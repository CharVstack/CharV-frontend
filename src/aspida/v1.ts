import useAspidaSWR from '@aspida/swr';
import { SWRConfiguration } from 'swr';

import { apiClient } from '@lib/apiClient';

export const useAllVms = (config?: SWRConfiguration) => useAspidaSWR(apiClient.api.v1.vms, config);
export const useVmByVmId = (vmId: string, config?: SWRConfiguration) =>
  useAspidaSWR(apiClient.api.v1.vms._vmId(vmId), config);
export const useVmPowerByVmId = (vmId: string, config?: SWRConfiguration) =>
  useAspidaSWR(apiClient.api.v1.vms._vmId(vmId).power, config);
export const useHost = (config?: SWRConfiguration) => useAspidaSWR(apiClient.api.v1.host, config);
