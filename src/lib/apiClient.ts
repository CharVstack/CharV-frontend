import aspida from '@aspida/fetch';

import api from '@api-hooks/v1/$api';

export const apiClient = api(aspida(fetch, { baseURL: import.meta.env.VITE_BACKEND_BASE_URL }));
