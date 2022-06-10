import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import companyLogo from "/assets/icon/logo.png";
import { useTranslation } from "react-i18next";
import { sizeRatio } from "@/theme";
import { Box, Button, Link, Typography } from "@mui/material";
import VerifyCode from "./VerifyCode";
import ConfirmNewPassword from "./ConfirmNewPassword";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const SignUp = () => {
  // React States
  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [showErrEmail, setShowErrEmail] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [step, setStep] = useState(1);
  const [timer, setTimer] = useState(false);
  step === 2 &&
    setTimeout(() => {
      setTimer(true);
    }, 60000);

  useEffect(() => {
    step === 2 && timer && setStep(1);
  }, [timer]);

  useEffect(() => {
    step === 1 && emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    if (email && !validEmail) {
      setShowErrEmail(true);
    }
    if (emailFocus) {
      setShowErrEmail(false);
    }
  }, [emailFocus]);

  let navigate = useNavigate();
  const { t, i18n } = useTranslation();

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

    try {
      if (email === "") {
        setShowErrEmail(true);
      }
      if (database.map((e) => e.email).includes(email)) {
        setErrMsg("Email is exist");
      } else if (validEmail && email !== "") {
        setStep(2);
      }
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
              borderColor: "#0F172A",
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
        <Button
          style={{
            display: "flex",
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
          Sign Up
        </Button>
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
              <Typography
                style={{
                  fontSize: sizeRatio(36),
                  marginBottom: sizeRatio(30),
                  color: "#0F172A",
                }}
              >
                {t("signUp").toUpperCase()}
              </Typography>
              <Typography
                ref={errorRef}
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  color: "#B91C1C",
                  fontSize: sizeRatio(18),
                }}
              >
                {errMsg}
              </Typography>
              {step === 1 ? (
                renderForm
              ) : step === 2 ? (
                <VerifyCode setStep={setStep} />
              ) : step === 3 ? (
                <ConfirmNewPassword email={email} />
              ) : (
                renderForm
              )}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: sizeRatio(530),
                  justifyContent: "flex-end",
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
                  href="/signIn"
                >
                  {t("signIn")}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
