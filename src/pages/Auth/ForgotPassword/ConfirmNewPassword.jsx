import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { usersAtom } from "@/recoil/atoms";
import { useTranslation } from "react-i18next";
import { colors, sizeRatio } from "@/theme";

import { Box, Button, Typography } from "@mui/material";
import { FiEye, FiEyeOff } from "react-icons/fi";
const PWD_REGEX = /^.{6,}$/;

const ConfirmNewPassword = ({ email }) => {
  // React States
  const pwdRef = useRef();

  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [confirmPwdFocus, setConfirmPwdFocus] = useState(false);
  const [showErrPwd, setShowErrPwd] = useState(false);
  const [showErrConfirmPwd, setShowErrConfirmPwd] = useState(false);
  const [pwdShown, setPwdShown] = useState(false);
  const [confirmPwdShown, setConfirmPwdShown] = useState(false);

  const { NeutralDay000 } = colors;

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
    if (confirmPwdFocus) {
      setShowErrConfirmPwd(false);
    }
  }, [confirmPwdFocus]);

  const { t, i18n } = useTranslation();

  const [users, setUsers] = useRecoilState(usersAtom);

  const handleSubmit = async (event) => {
    let isOk = false;
    //Prevent page reload
    event.preventDefault();
    try {
      if (!validPwd || pwd === "") {
        setShowErrPwd(true);
      }
      if (confirmPwd !== pwd) {
        setShowErrConfirmPwd(true);
      }

      if (validPwd && pwd !== "" && confirmPwd === pwd) {
        localStorage.setItem("user", { email: email, pass: pwd });
        setUsers({ email: email, pass: pwd });
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
        <Box
          style={{
            position: "relative",
            marginTop: sizeRatio(10),
          }}
        >
          <input
            ref={pwdRef}
            type={pwdShown ? "text" : "password"}
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
        {showErrPwd && (
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              color: "#C25A0A",
              fontSize: sizeRatio(14),
            }}
          >
            Minimun length is 6 letters
          </Typography>
        )}
        <Typography
          style={{
            fontSize: sizeRatio(18),
          }}
        >
          Confirm password <span style={{ color: "#AA2E26" }}>*</span>
        </Typography>
        <Box
          style={{
            position: "relative",
            marginTop: sizeRatio(10),
          }}
        >
          <input
            type={confirmPwdShown ? "text" : "password"}
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
              borderColor: NeutralDay000,
              borderWidth: "1px",
            }}
            onChange={(e) => setConfirmPwd(e.target.value)}
            onFocus={() => setConfirmPwdFocus(true)}
            onBlur={() => setConfirmPwdFocus(false)}
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
            onClick={() => setConfirmPwdShown(!confirmPwdShown)}
          >
            {confirmPwdShown ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Box>
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
            outline: "none",
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
