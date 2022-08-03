import baseApi from "./baseApi";

const signUp = () => {};

const signIn = (params) => {
  return baseApi.post(`api/Account/SignIn?api-version=1.0`, params);
};

const sentCodeForgotPassword = () => {};

const getInfomation = () => {};

const logOut = (params) => {
  return baseApi.post(`api/Account/SignIn?api-version=1.0`, params);
};

export default { signIn, signUp };
