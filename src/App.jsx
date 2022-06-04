import SignIn from "@/pages/Auth/SignIn/SignIn";
import SignUp from "@/pages/Auth/SignUp/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  authAtom,
  sentEmailSignUpAtom,
  verifiedCodeSignUpAtom,
} from "@/recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { createBrowserHistory } from "history";
import Wallet from "./pages/DetailScreen/Wallet/Wallet";
import Earning from "./pages/DetailScreen/Earning/Earning";
import JobList from "./pages/DetailScreen/JobList/JobList";
import Profile from "./pages/DetailScreen/Profile/Profile";

import AccountDetail from "./pages/DetailScreen/JobList/AccountDetail/AccountDetail";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";

const App = () => {
  const auth = useRecoilValue(authAtom);
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<JobList />}></Route>
        <Route path="/JobList" element={<JobList />}></Route>
        <Route path="/AccountDetail" element={<AccountDetail />}></Route>
        <Route path="/Earning" element={<Earning />}></Route>
        <Route path="/Wallet" element={<Wallet />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route
          path="/signIn"
          element={!auth ? <SignIn /> : <Navigate to="/" replace />}
        ></Route>
        <Route
          path="/signUp"
          element={!auth ? <SignUp /> : <Navigate to="/" replace />}
        ></Route>
        <Route
          path="/forgotPassword"
          element={auth ? <Navigate to="/" replace /> : <ForgotPassword />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
