import { useSetRecoilState } from "recoil";

import { history } from "@/helpers/history";
import { useFetchWrapper } from "@/helpers/useFetchWrapper";
import { authAtom, usersAtom } from "@/recoil/atoms";

export { useUserActions };

function useUserActions() {
  const baseUrl = `${import.meta.env.REACT_APP_API_URL}/users`;
  const fetchWrapper = useFetchWrapper();
  const setAuth = useSetRecoilState(authAtom);
  const setUsers = useSetRecoilState(usersAtom);

  return {
    login,
    logout,
    getAll,
  };

  async function login(email, password) {
    const user = await fetchWrapper.post(`${baseUrl}/authenticate`, {
      email,
      password,
    });
    // update recoil state with user object + basic auth data and
    // store in local storage to stay logged in between page refreshes
    user.authdata = window.btoa(email + ":" + password);
    setAuth(user);
    localStorage.setItem("user", JSON.stringify(user));
    // get return url from location state or default to home page
    const { from } = history.location.state || { from: { pathname: "/" } };
    history.push(from);
  }

  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem("user");
    setAuth(null);
    history.push("/login");
  }

  function getAll() {
    return fetchWrapper.get(baseUrl).then(setUsers);
  }
}
