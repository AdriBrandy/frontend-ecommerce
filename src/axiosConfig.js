import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://skillboost-academy.onrender.com", // URL del backend
});

export default axiosInstance;
