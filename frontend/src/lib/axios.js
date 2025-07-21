import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.mode === "development" ? "http://localhost:5000/api": "/api",
    withCredentials: true, //Envia os cookies para o servidor
})

export default axiosInstance;