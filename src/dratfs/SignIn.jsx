import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSetRecoilState } from "recoil";
import { authAtom } from "@/recoil/atoms";
import { useNavigate } from "react-router-dom";
// import styles from "./authStyle";
import { useTranslation } from "react-i18next";

// const Copyright = (props) => {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="#">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// };

const theme = createTheme();

const SignInSide = () => {
  const setAuth = useSetRecoilState(authAtom);
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    setAuth(JSON.stringify(event));
    localStorage.setItem("user", JSON.stringify(event));
    navigate("/home");
  };
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
          <Box style={styles.inputSide}>
            <Typography style={styles.header}>{t("signIn")}</Typography>
            <Box
              component="form"
              noValidate
              onSubmit={() =>
                handleSubmit({
                  authdata: "dGVzdDp0ZXN0",
                  firstName: "Test",
                  id: 1,
                  lastName: "User",
                  username: "test",
                })
              }
            >
              <TextField
                required
                fullWidth
                style={styles.textField}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                required
                fullWidth
                style={styles.textField}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                style={styles.checkBox}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={styles.btnSubmit}
              >
                Sign In
              </Button>
              <Grid container style={styles.haveAccount}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {t("forgotPassword")}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {t("dontHaveAccount")}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default SignInSide;
