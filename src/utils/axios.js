import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // Laravel API 位置
  withCredentials: true, // ⭐ 必須，讓 cookie 帶入
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },
});

export default api;
