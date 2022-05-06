import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import App from "@/App";
import "./index.css";
import "./i18n";

import { fakeBackend } from "@/helpers/fakeBackend";
fakeBackend();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
