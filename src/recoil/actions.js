import { useRecoilState, useSetRecoilState } from "recoil";
import { usersAtom } from "@/recoil/atoms";
import userApi from "@/services/userApi";

export function useUserActions() {
  const [users, setUsers] = useRecoilState(usersAtom);

  return {
    signIn,
    logOut,
    users,
  };

  async function signIn(email, password, fail) {
    try {
      // const res = await userApi.signIn({
      //   email,
      //   password,
      //   rememberMe: true,
      //   IsUseReCaptcha: false,
      // });
      const res = { email: "minhchanh@gmail.com", password: "chichichi" };
      setUsers(res);
    } catch (error) {
      console.log({ error });
      fail();
    }
  }
  async function logOut(fail) {
    try {
      // const res = await userApi.signIn({
      //   email,
      //   password,
      //   rememberMe: true,
      //   IsUseReCaptcha: false,
      // });
      setUsers(null);
      console.log({ userApi });
    } catch (error) {
      console.log({ error });
      fail();
    }
  }
}
