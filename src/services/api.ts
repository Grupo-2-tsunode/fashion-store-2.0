import axios from "axios";

const api = axios.create({
    baseURL: "https://fashion-store-api.onrender.com",
    timeout: 9000,
  })
  
  export default api;
