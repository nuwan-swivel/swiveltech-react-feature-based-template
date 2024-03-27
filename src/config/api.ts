import axios from 'axios';
import ENV from './env.ts';

const axiosInstance = axios({ baseURL: ENV.VITE_API_BASE_URL });

export default axiosInstance;
