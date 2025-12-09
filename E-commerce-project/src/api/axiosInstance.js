import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

// Axios Request Interceptor: Her istekten önce çalışır
// localStorage'da token varsa Authorization başlığına ekler.
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            // NOT: Sunucu gereksinimine göre Bearer öneki EKLEMEDEN direkt token'ı koyuyoruz.
            config.headers.Authorization = token; 
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;