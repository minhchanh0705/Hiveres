import React from "react";
import "/assets/fonts/Helvetica/helveticaneue.ttf";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import App from "@/App";
import "./i18n";

import { fakeBackend } from "@/helpers/fakeBackend";
import { CssBaseline } from "@mui/material";
fakeBackend();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
