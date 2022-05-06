import Main from "./screens/Main";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { authAtom } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";
import { createBrowserHistory } from "history";

const App = () => {
  const auth = useRecoilValue(authAtom);
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/market" element={<Main />}></Route>
        <Route
          path="/signIn"
          element={!auth ? <SignIn /> : <Navigate to="/main" replace />}
        ></Route>
        <Route
          path="/signUp"
          element={!auth ? <SignUp /> : <Navigate to="/main" replace />}
        ></Route>
        <Route path="/" element={<Navigate to="/main" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
