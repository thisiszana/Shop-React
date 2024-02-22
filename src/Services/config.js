import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com/products" });

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;