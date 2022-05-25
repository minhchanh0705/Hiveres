import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import companyLogo from "../assets/icon/logo.png";
import { US, VN } from "country-flag-icons/react/3x2";
import Modal from "react-modal";
import styles from "./modalStyle";
import "./Header.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Link,
  Button,
  FormControlLabel,
  TextField,
  Typography,
  Grid,
  Checkbox,
} from "@mui/material";
import { authAtom } from "@/recoil/atoms";
import { useUserActions } from "@/recoil/actions";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { sizeRatio } from "@/theme";

const Header = () => {
  const { t, i18n } = useTranslation();
  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required(t("emailRequired")),
    password: Yup.string().required(t("passwordRequired")),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm(formOptions);
  const lstLang = ["en", "vi"];
  let navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authAtom);
  const userActions = useUserActions();
  const signOut = () => {
    localStorage.removeItem("user");
    setAuth(null);
    navigate("/home");
  };
  const changeLanguage = (lang) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  };

  const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);
  const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false);
  const [isModalForgotOpen, setIsModalForgotOpen] = useState(false);
  function openSignInModal() {
    setIsModalSignUpOpen(false);
    setIsModalForgotOpen(false);
    setIsModalSignInOpen(true);
  }
  function openSignUpModal() {
    setIsModalSignInOpen(false);
    setIsModalForgotOpen(false);
    setIsModalSignUpOpen(true);
  }
  function openForgotModal() {
    setIsModalSignInOpen(false);
    setIsModalSignUpOpen(false);
    setIsModalForgotOpen(true);
  }
  function closeModal() {
    setIsModalSignInOpen(false);
    setIsModalSignUpOpen(false);
    setIsModalForgotOpen(false);
  }
  // const handleSignIn = async ({ email, password }) => {
  //   try {
  //     return await userActions.login(email, password);
  //   } catch (error) {
  //     setError("apiError", { message: error });
  //   }
  // };
  const handleSignIn = async ({ email, password }) => {
    // setAuth(JSON.stringify(event));
    // localStorage.setItem("user", JSON.stringify(event));
    // navigate("/home");
    console.log({ email, password });
    try {
      return await userActions.login(email, password);
    } catch (error) {
      setError("apiError", { message: error });
    }
  };
  const handleSignUp = (event) => {
    setAuth(JSON.stringify(event));
    localStorage.setItem("user", JSON.stringify(event));
    navigate("/home");
  };

  const handleForgotPassword = (event) => {
    // setAuth(JSON.stringify(event));
    // localStorage.setItem("user", JSON.stringify(event));
    navigate("/home");
  };
  return (
    <Navbar>
      <Navbar.Brand href="/home">
        <img
          src={companyLogo}
          width="290"
          height="90"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{
          justifyContent: "flex-end",
        }}
      >
        <Nav className="me-auto">
          <NavDropdown
            title={
              i18n.language === "en" ? (
                <>
                  <US
                    style={{
                      borderRadius: 4,
                      width: sizeRatio ( 35,
                      height: sizeRatio ( 22,
                      marginRight: sizeRatio ( 5,
                    }}
                  ></US>
                  {t(i18n.language)}
                </>
              ) : (
                <>
                  <VN
                    style={{
                      borderRadius: 4,
                      width: sizeRatio ( 35,
                      height: sizeRatio ( 22,
                      marginRight: sizeRatio ( 5,
                    }}
                  ></VN>
                  {t(i18n.language)}
                </>
              )
            }
            id="basic-nav-dropdown"
          >
            {lstLang.map((lang) => (
              <NavDropdown.Item onClick={() => changeLanguage(lang)}>
                {t(lang)}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link href="/home">{t("home")}</Nav.Link>

          {auth ? (
            <>
              <Nav.Link href="/dashboard">{t("dashboard")}</Nav.Link>
              <Nav.Link onClick={() => signOut()}>{t("logOut")}</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={openSignInModal}>{t("signIn")}</Nav.Link>
              <Nav.Link onClick={openSignUpModal}>{t("signUp")}</Nav.Link>
              <Modal
                isOpen={isModalSignInOpen}
                onRequestClose={closeModal}
                style={styles.contentModal}
                contentLabel="Sign In"
              >
                <div className="card">
                  <h4 className="card-header">{t("signIn")}</h4>
                  <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <section>
                        <div className="form-group">
                          <label htmlFor="email">{t("email")}</label>
                          <input
                            placeholder={t("inputYourEmail")}
                            type="text"
                            id="email"
                            name="email"
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                            {...register("email")}
                          />
                          <div className="invalid-feedback">
                            {errors.email?.message}
                          </div>
                        </div>
                        <div className="form-group">
                          <label>{t("password")}</label>
                          <input
                            name="password"
                            placeholder={t("inputYourPassword")}
                            type="password"
                            {...register("password")}
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.password?.message}
                          </div>
                        </div>
                      </section>

                      <button className="btn btn-primary">
                        {isSubmitting && (
                          <span className="spinner-border spinner-border-sm mr-1"></span>
                        )}
                        {t("signIn")}
                      </button>
                      {errors.apiError && (
                        <div className="alert alert-danger mt-3 mb-0">
                          {t(errors.apiError?.message)}
                        </div>
                      )}
                    </form>
                  </div>
                </div>

                <Typography style={styles.header}>{t("signIn")}</Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={() =>
                    handleSignIn({
                      email: "test",
                      password: "test",
                    })
                  }
                >
                  <div style={{ marginTop: sizeRatio ( 30 }}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label={t("emailOrPhone")}
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                  </div>
                  <div style={{ marginTop: sizeRatio ( 30 }}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label={t("password")}
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </div>
                  <div style={{ marginTop: sizeRatio ( 15 }}>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label={t("rememberMe")}
                    />
                  </div>
                  <div style={{ marginTop: sizeRatio ( 10 }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      style={styles.btnSubmit}
                    >
                      {t("signIn")}
                    </Button>
                  </div>
                  <div style={{ marginTop: sizeRatio ( 25 }}>
                    <Grid container>
                      <Grid item xs>
                        <Link
                          href="#"
                          onClick={openForgotModal}
                          variant="body2"
                        >
                          {t("forgotPassword")}?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          href="#"
                          onClick={openSignUpModal}
                          variant="body2"
                        >
                          {t("dontHaveAccount")}
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                </Box>
              </Modal>
              <Modal
                isOpen={isModalSignUpOpen}
                onRequestClose={closeModal}
                style={styles.contentModal}
                contentLabel="Sign Up"
              >
                <Typography style={styles.header}>{t("signUp")}</Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={() =>
                    handleSignUp({
                      authdata: "dGVzdDp0ZXN0",
                      firstName: "Test",
                      id: 1,
                      lastName: "User",
                      username: "test",
                    })
                  }
                >
                  <div style={{ marginTop: sizeRatio ( 30 }}>
                    <TextField
                      required
                      fullWidth
                      style={styles.textField}
                      id="email"
                      label={t("emailOrPhone")}
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                  </div>
                  <div style={{ marginTop: sizeRatio ( 30 }}>
                    <TextField
                      required
                      fullWidth
                      style={styles.textField}
                      name="password"
                      label={t("password")}
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </div>
                  <div style={{ marginTop: sizeRatio ( 30 }}>
                    <TextField
                      required
                      fullWidth
                      style={styles.textField}
                      name="confirmPassword"
                      label={t("confirmPassword")}
                      type="password"
                      id="confirmPassword"
                      autoComplete="current-password"
                    />
                  </div>

                  <div style={{ marginTop: sizeRatio ( 240 }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      style={styles.btnSubmit}
                    >
                      {t("signUp")}
                    </Button>
                  </div>
                  <div style={{ marginTop: sizeRatio ( 25 }}>
                    <Grid container style={styles.haveAccount}>
                      <Grid item>
                        <Link
                          href="#"
                          onClick={openSignInModal}
                          variant="body2"
                        >
                          {t("alreadyHaveAccount")}
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                </Box>
              </Modal>
              <Modal
                isOpen={isModalForgotOpen}
                onRequestClose={closeModal}
                style={styles.contentModal}
                contentLabel="Sign Up"
              >
                <div className="headerModal">
                  <Typography style={styles.header}>
                    {t("forgotPassword")}
                  </Typography>
                </div>
                <Box
                  component="form"
                  noValidate
                  onSubmit={() =>
                    handleForgotPassword({
                      authdata: "dGVzdDp0ZXN0",
                      firstName: "Test",
                      id: 1,
                      lastName: "User",
                      username: "test",
                    })
                  }
                >
                  <div style={{ marginTop: sizeRatio ( 30 }}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label={t("email")}
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                  </div>
                  <div style={{ marginTop: sizeRatio ( 15 }}>
                    Send us your email address
                  </div>
                  <div style={{ marginTop: sizeRatio ( 25 }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      style={styles.btnSubmit}
                    >
                      {t("send")}
                    </Button>
                  </div>
                  <div style={{ marginTop: sizeRatio ( 25 }}>
                    <Grid container style={styles.haveAccount}>
                      <Grid item xs>
                        <Link
                          href="#"
                          onClick={openSignInModal}
                          variant="body2"
                        >
                          {t("signIn")}
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          href="#"
                          onClick={openSignUpModal}
                          variant="body2"
                        >
                          {t("signUp")}
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                </Box>
              </Modal>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand page-scroll" href="#page-top">
    //     <img src={companyLogo} alt={"logo"} />
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavDropdown"
    //     aria-controls="navbarNavDropdown"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    // </nav>
    // <div className="headerContainer ">
    //   <Link to="/">Home</Link>
    //   {auth ? (
    //     //Not signed in
    //     <Link to="/users">User</Link>
    //   ) : (
    //     <></>
    //   )}
    //   {!auth ? (
    //     <>
    //       <Link to="/signIn">Sign In</Link>
    //       <Link to="/signUp">Sign Up</Link>
    //     </>
    //   ) : (
    //     <>
    //       <button onClick={() => signOut()}>Sign Out</button>
    //     </>
    //   )}
    //   <hr />
    // </div>

    // <nav id="menu" className="navbar navbar-default navbar-fixed-top">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <a className="navbar-brand page-scroll" href="#page-top">
    //         <img src={companyLogo} alt={"logo"} />
    //       </a>
    //     </div>

    //     <div className=" navbar-collapse" id="bs-example-navbar-collapse-1">
    //       <ul className="nav navbar-nav navbar-right">
    //         <li>
    //           <a href="#features" className="page-scroll">
    //             Features
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#about" className="page-scroll">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#contact" className="page-scroll">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
export default Header;
