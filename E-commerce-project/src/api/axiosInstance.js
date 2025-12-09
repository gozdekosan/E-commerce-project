import axios from 'axios';
import store from '../redux/store'; 

const AxiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com', 
  timeout: 5000, 
});

AxiosInstance.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const token = state.client.token; 
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; 
        } else {
            delete config.headers.Authorization; 
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default AxiosInstance;