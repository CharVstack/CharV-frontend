import aspida from '@aspida/axios';
import axios from 'axios';

import api from '@api-hooks/v1/$api';

export const apiClient = api(aspida(axios, { baseURL: import.meta.env.VITE_BACKEND_BASE_URL }));
