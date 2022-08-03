import axios from "axios";
import appConfigs from "@/configs/appConfigs";
/** ================================ */

const api = axios.create({
  baseURL: appConfigs.END_POINT,
  timeout: 30000,
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      return Promise.reject({
        message: error.response.data.message,
        code: error.response.status,
      });
    }
    if (error.request) {
      return Promise.reject({ message: "No response was received" });
    }
    return Promise.reject({ message: error.message });
  }
);

export function setAuthorizationToken(token) {
  delete api.defaults.headers.common.Authorization;
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export default api;
