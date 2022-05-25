import SignIn from "@/pages/Auth/SignIn";
import SignUp from "@/pages/Auth/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authAtom } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";
import { createBrowserHistory } from "history";
import Wallet from "./pages/DetailScreen/Wallet/Wallet";
import Earning from "./pages/DetailScreen/Earning/Earning";
import JobList from "./pages/DetailScreen/JobList/JobList";
import Profile from "./pages/DetailScreen/Profile/Profile";

import AccountDetail from "./pages/DetailScreen/JobList/AccountDetail/AccountDetail";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import DrawerComponent from "./components/DrawerComponent";
import { sizeRatio } from "./theme";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
