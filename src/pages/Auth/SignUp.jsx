import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { authAtom } from "@/recoil/atoms";
import companyLogo from "@/assets/icon/logo.png";
import { useTranslation } from "react-i18next";
import { FaInfoCircle } from "react-icons/fa";
import "./styles.css";
import { sizeRatio } from "@/theme";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^.{6,}$/;

const SignUp = () => {
  // React States
  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const isMatch = pwd === matchPwd;
    setValidMatchPwd(isMatch);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

  let navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [auth, setAuth] = useRecoilState(authAtom);

  // Email Login info
  const database = [
    {
      email: "email1@gmail.com",
      password: "111111",
    },
    {
      email: "email2@gmail.com",
      password: "222222",
    },
    {
      email: "test@gmail.com",
      password: "tttttt",
    },
  ];

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      // Find user login info
      // Compare user info
      if (database.map((e) => e.email).includes(email)) {
        // Invalid password
        console.log({ database, email });
        setErrMsg("Email is exist");
      } else {
        setSuccess(true);
        database.push({ email: email, pass: pwd });
        setAuth(JSON.stringify({ email: email, pass: pwd }));
        navigate("/");
      }
    } catch (error) {}
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input
            ref={emailRef}
            type="text"
            name="email"
            autoComplete="off"
            required
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            className="mb-3"
          />
        </div>
        <div
          className={
            !emailFocus && !pwdFocus && !matchPwdFocus && email && !validEmail
              ? "d-block mb-3"
              : "d-none mb-3"
          }
          style={{
            display: "flex",
            flex: 1,
            color: "red",
          }}
        >
          <FaInfoCircle
            style={{ fontSize: sizeRatio(17), marginRight: sizeRatio(6) }}
          />
          Please enter email format.
        </div>

        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            required
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            className="mb-3"
          />
        </div>
        <div
          className={
            !emailFocus && !pwdFocus && !matchPwdFocus && pwd && !validPwd
              ? "d-block mb-3"
              : "d-none mb-3"
          }
          style={{
            display: "flex",
            flex: 1,
            color: "red",
          }}
        >
          <FaInfoCircle
            style={{ fontSize: sizeRatio(17), marginRight: sizeRatio(6) }}
          />
          Please enter password format.
        </div>
        <div className="input-container">
          <label>Confirm Password </label>
          <input
            type="password"
            name="match"
            required
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchPwdFocus(true)}
            onBlur={() => setMatchPwdFocus(false)}
          />
          <div
            style={{
              display: "flex",
              height: sizeRatio(45),
              alignItems: "center",
            }}
            className={
              !emailFocus &&
              !pwdFocus &&
              !matchPwdFocus &&
              matchPwd &&
              !validMatchPwd
                ? "d-block"
                : "d-none"
            }
          >
            <FaInfoCircle /> Please enter check again.
          </div>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="container">
        <div
          style={{
            display: "flex",
            flex: "1",
            height: sizeRatio(90),
          }}
        >
          <input
            type="image"
            alt=""
            src={companyLogo}
            width={sizeRatio(290)}
            height={sizeRatio(90)}
            onClick={() => navigate("/")}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="login-left">
            <img
              alt=""
              src="https://source.unsplash.com/random"
              className="imgBanner"
            ></img>
          </div>
          <div className="login-right">
            <div className="login-form">
              <div
                className="title"
                style={{
                  fontFamily: "Archivo",
                  fontWeight: 600,
                  fontSize: sizeRatio(36),
                  color: "#0F172A",
                }}
              >
                {t("signUp").toUpperCase()}
              </div>
              <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"}>
                {errMsg}
              </p>
              {renderForm}
              <nav
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: sizeRatio(530),
                  justifyContent: "flex-end",
                  marginTop: sizeRatio(32),
                }}
              >
                <a href="/signIn">{t("alreadyHaveAccount")}</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
