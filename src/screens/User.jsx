// import React, { useState } from "react";

// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
// import { authState } from "@/recoil/authAtoms";
// import { useSetRecoilState } from "recoil";
// import { useTranslation } from "react-i18next";

// const theme = createTheme();

// const User = () => {
//   const { t } = useTranslation();
//   let navigate = useNavigate();
//   const setAuth = useSetRecoilState(authState);
//   const logout = () => {
//     setAuth(null);
//     localStorage.removeItem("user");
//     navigate("/home");
//   };
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <div>
//           <h2>{t("user")}</h2>
//         </div>
//       </Container>
//     </ThemeProvider>
//   );
// };
// export default User;
