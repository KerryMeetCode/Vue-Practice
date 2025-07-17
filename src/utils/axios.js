import axios from "axios";

// 目標網址
const BASE_URL = "http://localhost:8000"; // 請改為你的 API URL
// 固定 API 端點
const API_BASE_URL = BASE_URL + "/api";
// 身分驗證 API 端點
const SANCTUM_BASE_URL = BASE_URL + "/sanctum/csrf-cookie";

//一般請求
const api = axios.create({
  baseURL: API_BASE_URL, // Laravel API 位置
  withCredentials: true, // 讓 cookie 帶入
  withXSRFToken: true,
  timeout: 5000, // 設定請求超時時間
  headers: {
    Accept: "application/json",
  },
});

//身分驗證
const apiSanctum = axios.create({
  baseURL: SANCTUM_BASE_URL, // Laravel API 位置
  withCredentials: true, // 讓 cookie 帶入
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },
});

// 取得資料
export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data; // 回傳 JSON 解析後的資料
  } catch (error) {
    console.error("API 請求錯誤:", error);
    throw error;
  }
};

// 發送 POST 請求
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("API 請求錯誤:", error);
    throw error;
  }
};

// 其他請求類型（PUT, DELETE）
export const putData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("API 請求錯誤:", error);
    throw error;
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("API 請求錯誤:", error);
    throw error;
  }
};

// 身分驗證
export const getToken = async () => {
  try {
    const response = await apiSanctum.get();
    return response.data; // 回傳 JSON 解析後的資料
  } catch (error) {
    console.error("API 請求錯誤:", error);
    throw error;
  }
};
