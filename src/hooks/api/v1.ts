import useAspidaSWR from '@aspida/swr';

import { apiClient } from '@lib/apiClient';

export const useAllVms = () => useAspidaSWR(apiClient.api.v1.vms);
export const useVmByVmId = (vmId: string) => useAspidaSWR(apiClient.api.v1.vms._vmId(vmId));
export const useVmPowerByVmId = (vmId: string) => useAspidaSWR(apiClient.api.v1.vms._vmId(vmId).power);
export const useHost = () => useAspidaSWR(apiClient.api.v1.host);
