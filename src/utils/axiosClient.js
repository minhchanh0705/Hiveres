import { axios } from "axios";
import queryString from "query-string";
let baseUrl, username, password;
baseUrl = import.meta.env.VITE_BASE_URL;
username = import.meta.env.VITE_USERNAME;
password = import.meta.env.VITE_PASSWORD;

const axiosClient = axios.create({
  baseUrl,
  headers: { "Content-Type": "application/json" },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  return config;
});
axiosClient.interceptors.request.use(
  async (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;
// const pull = (endPoint) => {
//   return fetch(baseUrl + endPoint, {
//     headers: {
//       Authorization: !username ? "" : "Basic " + btoa(`${username}:${password}`)
//     }
//   })
//     .then((result) => result.json())
//     .then((json) => json);
// };

// const push = (endPoint, payload, method) => {
//   return fetch(baseUrl + endPoint, {
//     method: method ? method : "POST",
//     body: JSON.stringify(payload),
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: !username ? "" : "Basic " + btoa(`${username}:${password}`)
//     }
//   }).then((result) => {
//     return result.json();
//   });
// };

// export { pull, push };
