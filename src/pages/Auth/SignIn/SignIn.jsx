import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import companyLogo from "/assets/icon/logo.png";
import { useTranslation } from "react-i18next";
import { colors, sizeRatio } from "@/theme";
import { Box, Button, Link, Typography } from "@mui/material";
import { useUserActions } from "@/recoil/actions";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^.{6,}$/;

const SignIn = () => {
  // React States
  const emailRef = useRef();
  const { NeutralDay000 } = colors;

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [showErrEmail, setShowErrEmail] = useState(false);
  const [showErrPass, setShowErrPass] = useState(false);
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [pwdShown, setPwdShown] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { signIn } = useUserActions();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    setErrMsg("");
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    if (email && !validEmail) {
      setShowErrEmail(true);
    }
    if (pwd && !validPwd) {
      setShowErrPass(true);
    }
    if (emailFocus) {
      setShowErrEmail(false);
    }
    if (pwdFocus) {
      setShowErrPass(false);
    }
  }, [emailFocus, pwdFocus]);

  let navigate = useNavigate();
  const { t } = useTranslation();

  // User Login info
  const database = [
    {
      email: "minhchanh@gmail.com",
      password: "chichichi",
    },
    {
      email: "user2@gmail.com",
      password: "chichichi",
    },
    {
      email: "test@gmail.com",
      password: "chichichi",
    },
  ];

  const success = () => {};
  const fail = () => {
    setErrMsg("Email or password was wrong");
  };

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
      signIn(email, pwd, fail);
    } catch (error) {}
  };

  // JSX code for login form
  const renderForm = (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box>
          <Typography
            style={{
              fontSize: sizeRatio(18),
            }}
          >
            Email
          </Typography>
          <input
            ref={emailRef}
            type="text"
            name="email"
            autoComplete="off"
            required
            style={{
              width: sizeRatio(530),
              height: sizeRatio(50),
              marginTop: sizeRatio(4),
              marginBottom: sizeRatio(6),
              paddingLeft: sizeRatio(18),
              borderRadius: "12px",
              borderColor: NeutralDay000,
              borderWidth: "1px",
            }}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
        </Box>
        {showErrEmail && (
          <Typography
            style={{
              color: "#C25A0A",
              maxWidth: sizeRatio(530),
              fontSize: sizeRatio(14),
            }}
          >
            Please enter email format.
          </Typography>
        )}
        <Box>
          <Typography
            style={{
              fontSize: sizeRatio(20),
              marginTop: sizeRatio(18),
            }}
          >
            Password
          </Typography>
          <Box
            style={{
              position: "relative",
              marginTop: sizeRatio(10),
            }}
          >
            <input
              type={pwdShown ? "text" : "password"}
              name="password"
              required
              style={{
                width: sizeRatio(530),
                height: sizeRatio(50),
                marginTop: sizeRatio(4),
                marginBottom: sizeRatio(6),
                paddingLeft: sizeRatio(18),
                borderRadius: "12px",
                borderColor: NeutralDay000,
                borderWidth: "1px",
              }}
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <Button
              style={{
                position: "absolute",
                outline: "none",
                right: sizeRatio(18),
                height: sizeRatio(24),
                top: sizeRatio(16),
                minWidth: 0,
                padding: sizeRatio(8),
                margin: 0,
                color: NeutralDay000,
              }}
              onClick={() => setPwdShown(!pwdShown)}
            >
              {pwdShown ? <FiEyeOff /> : <FiEye />}
            </Button>
          </Box>
        </Box>
        {showErrPass && (
          <Box
            style={{
              color: "#C25A0A",
              maxWidth: sizeRatio(530),
              fontSize: sizeRatio(14),
            }}
          >
            <Typography>Please enter password format.</Typography>
          </Box>
        )}
        <Box>
          <Button
            style={{
              display: "flex",
              outline: "none",
              fontSize: sizeRatio(24),
              fontWeight: 700,
              height: sizeRatio(60),
              width: sizeRatio(530),
              marginTop: sizeRatio(12),
              justifyContent: "center",
              backgroundColor: "#061123",
              borderRadius: "12px",
              color: "#F8FAFC",
            }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
      </form>
    </Box>
  );

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          width: sizeRatio(1440),
        }}
      >
        <Button
          style={{
            display: "flex",
            outline: "none",
            height: sizeRatio(80),
            marginLeft: sizeRatio(70),
          }}
        >
          <img
            type="image"
            alt=""
            src={companyLogo}
            width={sizeRatio(200)}
            onClick={() => navigate("/")}
          />
        </Button>
        <Box style={{ display: "flex", flexDirection: "row" }}>
          <Box
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <img
              alt=""
              src="https://source.unsplash.com/random"
              className="imgBanner"
              style={{
                height: sizeRatio(600),
                width: sizeRatio(530),
              }}
            ></img>
          </Box>
          <Box
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Box>
              <Box
                style={{
                  fontSize: sizeRatio(36),
                  marginBottom: sizeRatio(30),
                  color: NeutralDay000,
                }}
              >
                {t("signIn").toUpperCase()}
              </Box>
              <Typography
                style={{
                  display: "flex",
                  flex: 1,
                  color: "#B91C1C",
                  fontSize: sizeRatio(18),
                }}
              >
                {errMsg}
              </Typography>
              {renderForm}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: sizeRatio(530),
                  justifyContent: "space-between",
                  marginTop: sizeRatio(22),
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: sizeRatio(16),
                    fontWeight: 700,
                    color: "#061123",
                  }}
                  href="/signUp"
                >
                  {t("signUp")}
                </Link>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: sizeRatio(16),
                    fontWeight: 700,
                    color: "#061123",
                  }}
                  href="/forgotPassword"
                >
                  {t("forgotPassword")}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
