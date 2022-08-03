import SignIn from "@/pages/Auth/SignIn/SignIn";
import SignUp from "@/pages/Auth/SignUp/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { usersAtom } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";
import { createBrowserHistory } from "history";
import Wallet from "./pages/DetailScreen/Wallet/Wallet";
import Earning from "./pages/DetailScreen/Earning/Earning";
import JobList from "./pages/DetailScreen/JobList/JobList";
import Profile from "./pages/DetailScreen/Profile/Profile";

import EarningAccountDetail from "./pages/DetailScreen/Earning/EarningAccountDetail/EarningAccountDetail";
import JobsAccountDetail from "./pages/DetailScreen/JobList/JobsAccountDetail";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
const Auth = () => {
  const users = useRecoilValue(usersAtom);
  return (
    <>
      <Route
        path="/signIn"
        element={!users ? <SignIn /> : <Navigate to="/JobList" replace />}
      />
      <Route
        path="/signUp"
        element={!users ? <SignUp /> : <Navigate to="/JobList" replace />}
      />
      <Route
        path="/forgotPassword"
        element={
          !users ? <ForgotPassword /> : <Navigate to="/JobList" replace />
        }
      />
      <Route
        path="/Earning"
        element={users ? <Earning /> : <Navigate to="/SignIn" replace />}
      />
      <Route
        path="/Wallet"
        element={users ? <Wallet /> : <Navigate to="/SignIn" replace />}
      />
      <Route
        path="/Profile"
        element={users ? <Profile /> : <Navigate to="/SignIn" replace />}
      />
      <Route
        path="/EarningAccountDetail"
        element={
          users ? <EarningAccountDetail /> : <Navigate to="/SignIn`" replace />
        }
      />
    </>
  );
};
const App = () => {
  // const users = useRecoilValue(usersAtom);
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/JobList" element={<JobList />} />
        <Route path="/JobsAccountDetail" element={<JobsAccountDetail />} />
        {Auth()}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
