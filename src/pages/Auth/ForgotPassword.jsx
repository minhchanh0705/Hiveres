import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authAtom } from "@/recoil/atoms";
import { useRecoilState } from "recoil";
import companyLogo from "@/assets/icon/logo.png";
import { FiLock, FiMail } from "react-icons/fi";
import "./styles.css";
import { t } from "i18next";
import { sizeRatio } from "@/theme";

function ForgotPassword() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  let navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authAtom);

  // User Login info
  const database = [
    {
      email: "user1",
      password: "pass1",
    },
    {
      email: "user2",
      password: "pass2",
    },
    {
      email: "test",
      password: "test",
    },
  ];

  const errors = {
    email: "invalid email",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { email, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setAuth(JSON.stringify({ email: email.value, pass: pass.value }));
        navigate("/");
      }
    } else {
      // email not found
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  const chooseOptionRecover = (option) => {
    console.log(option);
    document.getElementById("verifyContainer").classList.add("slideAnim");

    // document.getElementById("loginForm").style.animationName = "slide";
  };
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>{t("chooseHowYouWantToSignIn")}</div>
        <nav
          style={{
            display: "flex",
            width: sizeRatio(528),
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: sizeRatio(16),
          }}
        >
          <a
            onClick={() => chooseOptionRecover("email")}
            className="recovery-email"
            // href="/signIn"
            style={{
              color: "#0F172A",
              paddingTop: sizeRatio(25),
              paddingBottom: sizeRatio(17),
              borderBottom: "1px solid #0F172A",
            }}
          >
            <FiLock style={{ marginRight: sizeRatio(27) }} />
            {t("enterYourPassword")}
          </a>
          <a
            href="/signIn"
            style={{
              color: "#0F172A",
              paddingTop: sizeRatio(25),
              paddingBottom: sizeRatio(17),
              borderBottom: "1px solid #0F172A",
            }}
          >
            <FiMail style={{ marginRight: sizeRatio(27) }} />
            {t("getVerificationAtYourEmail")}
          </a>
        </nav>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="container">
        <div className="login-left">
          <input
            type="image"
            src={companyLogo}
            width={sizeRatio(290)}
            height={sizeRatio(90)}
            className="d-inline-block align-top"
            onClick={() => navigate("/")}
            alt=""
          />

          <img
            src="https://source.unsplash.com/random"
            className="imgBanner"
            alt=""
          ></img>
        </div>
        <div className="login-right">
          <div className="login-form" id="loginForm">
            <div
              className="title"
              style={{
                fontFamily: "Archivo",
                fontWeight: 600,
                fontSize: sizeRatio(36),
                color: "#0F172A",
              }}
            >
              {t("accountRecovery").toUpperCase()}
            </div>
            {renderForm}
            <nav
              style={{
                display: "flex",
                flexDirection: "row",
                width: sizeRatio(528),
                justifyContent: "space-between",
                marginTop: sizeRatio(32),
              }}
            >
              <a href="/signUp">{t("signUp")}</a>
              <a href="/signIn">{t("signIn")}</a>
            </nav>
          </div>
          <div id="verifyContainer" class="verify">
            I slid!
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
