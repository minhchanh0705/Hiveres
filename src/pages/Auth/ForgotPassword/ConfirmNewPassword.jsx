import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { authAtom } from "@/recoil/atoms";
import { useTranslation } from "react-i18next";
import { sizeRatio } from "@/theme";

import { Box, Button, Typography } from "@mui/material";
const PWD_REGEX = /^.{6,}$/;

const ConfirmNewPassword = ({ email }) => {
  // React States
  const pwdRef = useRef();

  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [matchConfirmPwd, setMatchConfirmPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [confirmPwdFocus, setConfirmPwdFocus] = useState(false);
  const [showErrPwd, setShowErrPwd] = useState(false);
  const [showErrConfirmPwd, setShowErrConfirmPwd] = useState(false);

  useEffect(() => {
    pwdRef.current.focus();
  }, []);

  useEffect(() => {
    if (pwdFocus) {
      setShowErrPwd(false);
    }
  }, [pwdFocus]);
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);
  useEffect(() => {
    if (confirmPwd === pwd) {
      setMatchConfirmPwd(true);
    } else {
      setMatchConfirmPwd(false);
    }
  }, [confirmPwd]);

  useEffect(() => {
    if (!confirmPwdFocus && !matchConfirmPwd && confirmPwd !== "") {
      setShowErrConfirmPwd(true);
    } else {
      setShowErrConfirmPwd(false);
    }
  }, [confirmPwdFocus]);

  const { t, i18n } = useTranslation();

  const [auth, setAuth] = useRecoilState(authAtom);

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();
    try {
      // Find user signup info
      if (!validPwd || pwd === "") {
        setShowErrPwd(true);
      }
      if (confirmPwd !== pwd) {
        setShowErrConfirmPwd(true);
      }

      if (validPwd && pwd !== "" && matchConfirmPwd) {
        localStorage.setItem(
          "user",
          JSON.stringify({ email: email, pass: pwd })
        );
        setAuth(JSON.stringify({ email: email, pass: pwd }));
      }
    } catch (error) {}
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography
          style={{
            fontSize: sizeRatio(18),
          }}
        >
          Password <span style={{ color: "#AA2E26" }}>*</span>
        </Typography>
        <input
          ref={pwdRef}
          type="password"
          name="pwd"
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
          onChange={(e) => setPwd(e.target.value)}
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        {showErrPwd && (
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              color: "#C25A0A",
              fontSize: sizeRatio(14),
            }}
          >
            Minimun length is 6 letters{" "}
          </Typography>
        )}
        <Typography
          style={{
            fontSize: sizeRatio(18),
          }}
        >
          Confirm password <span style={{ color: "#AA2E26" }}>*</span>
        </Typography>
        <input
          type="password"
          name="confirmPwd"
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
          onChange={(e) => setConfirmPwd(e.target.value)}
          onFocus={() => setConfirmPwdFocus(true)}
          onBlur={() => setConfirmPwdFocus(false)}
        />
        {showErrConfirmPwd && (
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              color: "#C25A0A",
              fontSize: sizeRatio(14),
            }}
          >
            Don't match password.
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
            marginBottom: sizeRatio(6),
            justifyContent: "center",
            backgroundColor: "#061123",
            borderRadius: "12px",
            color: "#F8FAFC",
          }}
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </form>
    </Box>
  );
};

export default ConfirmNewPassword;
