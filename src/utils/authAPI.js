import axiosClient from "./axiosClient";

const authAPI = {
  register: ({ email, password }) => {
    const url = "/register";
    return axiosClient.get(url, email, password);
  },
};
export default authAPI;
