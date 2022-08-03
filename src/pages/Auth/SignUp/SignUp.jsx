import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import companyLogo from "/assets/icon/logo.png";
import { useTranslation } from "react-i18next";
import { colors, sizeRatio, space, text } from "@/theme";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import countryList from "react-select-country-list";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useRecoilState } from "recoil";
import { usersAtom } from "@/recoil/atoms";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { FiEye, FiEyeOff } from "react-icons/fi";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^.{6,}$/;

const SignUp = () => {
  // React States
  const emailRef = useRef();
  const errorRef = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("valueNull");
  const [gender, setGender] = useState("male");
  const [dob, setDob] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdShown, setPwdShown] = useState(false);
  const [confirmPwdShown, setConfirmPwdShown] = useState(false);
  const [confirmPwd, setConfirmPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [confirmPwdFocus, setConfirmPwdFocus] = useState(false);
  const [showErrName, setShowErrName] = useState(false);
  const [showErrNationality, setShowErrNationality] = useState(false);
  const [showErrPwd, setShowErrPwd] = useState(false);
  const [showErrConfirmPwd, setShowErrConfirmPwd] = useState(false);
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));
  const options = useMemo(() => countryList().getData(), []);
  const [showErrEmail, setShowErrEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [timer, setTimer] = useState(false);
  const [signUpOk, setSignUpOk] = useState(false);
  const { NeutralDay000, WarningOrange900, ErrorRed900, NeutralDay900 } =
    colors;
  const { S18W400, S14W400, SecondaryHeading5, S16W700 } = text;
  const { Row, RowSpaceBetween, RowCenter, RowFlexEnd } = space;

  useEffect(() => {
    setLoading(false);
    setTimer(false);
    if (signUpOk) {
      localStorage.setItem("user", { email: email, pass: pwd });
      setUsers({ email: email, pass: pwd });
    }
  }, [timer]);

  useEffect(() => {
    emailRef.current.focus();
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

  useEffect(() => {
    if (nameFocus) {
      setShowErrName(false);
    }
  }, [nameFocus]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    if (pwdFocus || confirmPwdFocus) {
      setShowErrPwd(false);
      setShowErrConfirmPwd(false);
    }
  }, [pwdFocus, confirmPwdFocus]);

  const [users, setUsers] = useRecoilState(usersAtom);

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
      if (name === "") {
        setShowErrName(true);
      }
      if (nationality === "valueNull") {
        setShowErrNationality(true);
      }
      if (!validPwd || pwd === "") {
        setShowErrPwd(true);
      }
      if (confirmPwd !== pwd) {
        setShowErrConfirmPwd(true);
      }

      if (database.map((e) => e.email).includes(email)) {
        setErrMsg("Email is exist");
      } else if (
        validEmail &&
        email !== "" &&
        name !== "" &&
        nationality !== "valueNull" &&
        validPwd &&
        pwd !== "" &&
        confirmPwd === pwd
      ) {
        setLoading(true);
        setSignUpOk(true);
        setTimeout(() => {
          setTimer(true);
        }, 1000);
      }
    } catch (error) {}
  };

  const changeHandler = (v) => {
    setShowErrNationality(false);
    setNationality(v.value);
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const styles = {
    wideStyle: {
      width: sizeRatio(530),
      height: sizeRatio(50),
      marginTop: sizeRatio(4),
      marginBottom: sizeRatio(6),
      borderRadius: "12px",
    },
    inputStyle: {
      paddingLeft: sizeRatio(18),
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: NeutralDay000,
    },
    btnStyle: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#061123",
      borderRadius: "12px",
      color: NeutralDay900,
      marginBlock: sizeRatio(22),
    },
    warningTxt: {
      ...S14W400,
      ...Row,
      color: WarningOrange900,
    },
  };

  // JSX code for login form
  const renderForm = (
    <Box
      style={{
        marginInline: sizeRatio(15),
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box>
          <Typography style={S18W400}>
            Email <span style={{ color: "#AA2E26" }}>*</span>
          </Typography>
          <input
            ref={emailRef}
            type="text"
            name="email"
            autoComplete="off"
            required
            style={{ ...styles.inputStyle, ...styles.wideStyle }}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
        </Box>
        {showErrEmail && (
          <Typography
            style={{
              ...SecondaryHeading5,
              color: WarningOrange900,
              maxWidth: sizeRatio(530),
            }}
          >
            Please enter email format.
          </Typography>
        )}
        <Typography style={S18W400}>
          Name <span style={{ color: "#AA2E26" }}>*</span>
        </Typography>
        <input
          type="text"
          name="name"
          autoComplete="off"
          required
          style={{ ...styles.inputStyle, ...styles.wideStyle }}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
        />
        {showErrName && (
          <Typography style={styles.warningTxt}>
            Please enter your name
          </Typography>
        )}
        <Box style={RowSpaceBetween}>
          <Box>
            <Typography style={S18W400}>Gender</Typography>
            <FormControl
              style={{
                marginTop: sizeRatio(4),
                marginBottom: sizeRatio(6),
              }}
            >
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                style={{
                  width: sizeRatio(200),
                  height: sizeRatio(50),
                  paddingLeft: sizeRatio(10),
                  borderRadius: "12px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                }}
                sx={{
                  "& legend": {
                    display: "none",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                <MenuItem key="m" value="male">
                  <Typography style={S18W400}>Male</Typography>
                </MenuItem>
                <MenuItem key="f" value="female">
                  <Typography style={S18W400}>Female</Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography style={S18W400}>Date of birth</Typography>
            <Box
              style={{
                ...RowSpaceBetween,
                width: sizeRatio(318),
                height: sizeRatio(50),
                paddingLeft: sizeRatio(10),
                borderRadius: "12px",
                borderStyle: "solid",
                borderWidth: "1px",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                  inputFormat="MM/DD/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        width: sizeRatio(318),
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Box>
        <Typography style={S18W400}>
          Nationality <span style={{ color: "#AA2E26" }}>*</span>
        </Typography>
        <FormControl
          style={{
            marginTop: sizeRatio(4),
            marginBottom: sizeRatio(6),
          }}
        >
          <Select
            value={nationality}
            onChange={(e) => changeHandler(e.target)}
            style={{ ...styles.inputStyle, ...styles.wideStyle }}
            sx={{
              "& legend": {
                display: "none",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem key="valueNull" value="valueNull" disabled>
              <Typography style={S18W400}>Choose Nationality</Typography>
            </MenuItem>
            {options.map((nationality) => (
              <MenuItem key={nationality.value} value={nationality.value}>
                <Typography style={S18W400}>{nationality.label}</Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {showErrNationality && (
          <Typography style={styles.warningTxt}>
            Please enter your nationality
          </Typography>
        )}
        <Typography style={S18W400}>
          Password <span style={{ color: "#AA2E26" }}>*</span>
        </Typography>{" "}
        <Box
          style={{
            position: "relative",
            marginTop: sizeRatio(10),
          }}
        >
          <input
            type={pwdShown ? "text" : "password"}
            name="pwd"
            autoComplete="off"
            required
            style={{ ...styles.inputStyle, ...styles.wideStyle }}
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
          <Typography style={styles.warningTxt}>
            Minimun length is 6 letters
          </Typography>
        )}
        <Typography style={S18W400}>
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
            style={{ ...styles.inputStyle, ...styles.wideStyle }}
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
          <Typography style={styles.warningTxt}>
            Don't match password.
          </Typography>
        )}
        <Button
          style={{ ...styles.wideStyle, ...styles.btnStyle, outline: "none" }}
          onClick={handleSubmit}
        >
          Sign Up
          {loading && (
            <CircularProgress
              style={{
                color: NeutralDay900,
                width: sizeRatio(30),
                height: sizeRatio(30),
                marginLeft: sizeRatio(10),
              }}
            />
          )}
        </Button>
      </form>
    </Box>
  );
  return (
    <Box style={RowCenter}>
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
            outline: "none",
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

          <Box style={{ ...RowCenter, flex: 1 }}>
            <Box>
              <Typography
                style={{
                  fontSize: sizeRatio(36),
                  marginBottom: sizeRatio(30),
                  color: NeutralDay000,
                }}
              >
                {t("signUp").toUpperCase()}
              </Typography>
              <Typography
                ref={errorRef}
                style={{
                  ...RowCenter,
                  ...S18W400,
                  color: ErrorRed900,
                  flex: 1,
                }}
              >
                {errMsg}
              </Typography>
              {renderForm}
              <Box
                style={{
                  ...RowFlexEnd,
                  width: sizeRatio(530),
                  marginBlock: sizeRatio(22),
                }}
              >
                <Link
                  style={{
                    ...S16W700,
                    textDecoration: "none",
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
