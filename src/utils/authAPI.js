import axiosClient from "./axiosClient";

const authAPI = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
};
export default authAPI;
