import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { sizeRatio } from "@/theme";
import { Box, Button, Typography } from "@mui/material";

const VerifyCode = ({ setStep }) => {
  // React States
  const verifyCodeRef = useRef();

  const [verifyCode, setVerifyCode] = useState("");

  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    verifyCodeRef.current.focus();
  }, []);

  const { t, i18n } = useTranslation();

  // Email Login info
  const database = ["123", "321"];

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    try {
      if (database.map((e) => e).includes(verifyCode)) {
        setStep(3);
      } else {
        setErrMsg("Wrong verification code, please try again");
      }
    } catch (error) {}
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box>
          <Typography
            style={{
              color: "#C25A0A",
              maxWidth: sizeRatio(530),
              fontSize: sizeRatio(14),
            }}
          >
            {errMsg}
          </Typography>
          <Typography
            style={{
              fontSize: sizeRatio(18),
            }}
          >
            Enter code
          </Typography>
          <input
            ref={verifyCodeRef}
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
            onChange={(e) => setVerifyCode(e.target.value)}
          />
        </Box>
        <Typography
          style={{
            color: "#C25A0A",
            maxWidth: sizeRatio(530),
            fontSize: sizeRatio(14),
          }}
        >
          An email with a verification code was just sent to hive***@gmail.com
        </Typography>

        <Box>
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
            Verify
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default VerifyCode;
