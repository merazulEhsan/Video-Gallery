import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://video-api-qxbf.onrender.com",
});

export default axiosInstance;
