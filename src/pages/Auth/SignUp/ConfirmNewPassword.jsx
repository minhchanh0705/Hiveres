import { useEffect, useMemo, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { authAtom } from "@/recoil/atoms";
import { useTranslation } from "react-i18next";
import { sizeRatio } from "@/theme";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import countryList from "react-select-country-list";

import { DesktopDatePicker } from "@mui/x-date-pickers";
const PWD_REGEX = /^.{6,}$/;

const ConfirmNewPassword = ({ email }) => {
  // React States
  const nameRef = useRef();
  const location = useLocation();

  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("valueNull");
  const [gender, setGender] = useState("male");
  const [dob, setDob] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [nameFocus, setNameFocus] = useState(false);
  // const [nationalityFocus, setNationalityFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [confirmPwdFocus, setConfirmPwdFocus] = useState(false);
  const [showErrName, setShowErrName] = useState(false);
  const [showErrNationality, setShowErrNationality] = useState(false);
  const [showErrPwd, setShowErrPwd] = useState(false);
  const [showErrConfirmPwd, setShowErrConfirmPwd] = useState(false);
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (v) => {
    setShowErrNationality(false);
    setNationality(v.value);
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    if (nameFocus) {
      setShowErrName(false);
    }
  }, [nameFocus]);

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
    if (!confirmPwdFocus && confirmPwd !== pwd && confirmPwd !== "") {
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
      // Compare user info
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

      if (
        name !== "" &&
        nationality !== "valueNull" &&
        validPwd &&
        pwd !== "" &&
        confirmPwd === pwd
      ) {
        localStorage.setItem(
          "user",
          JSON.stringify({ email: email, pass: pwd })
        );
        setAuth(JSON.stringify({ email: email, pass: pwd }));
      }
    } catch (error) {}
  };

  const styles = {
    inputWide: {
      width: sizeRatio(530),
      height: sizeRatio(50),
      paddingLeft: sizeRatio(10),
      borderRadius: "12px",
      borderStyle: "solid",
      borderWidth: "1px",
      marginTop: sizeRatio(4),
      marginBottom: sizeRatio(6),
      borderColor: "#0F172A",
    },
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography
          style={{
            fontSize: sizeRatio(18),
          }}
        >
          Name <span style={{ color: "#AA2E26" }}>*</span>
        </Typography>
        <input
          ref={nameRef}
          type="text"
          name="name"
          autoComplete="off"
          required
          style={styles.inputWide}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
        />
        {showErrName && (
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              color: "#C25A0A",
              fontSize: sizeRatio(14),
            }}
          >
            Please enter your name
          </Typography>
        )}
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              style={{
                fontSize: sizeRatio(18),
              }}
            >
              Gender
            </Typography>
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
                  <Typography
                    style={{
                      fontSize: sizeRatio(18),
                    }}
                  >
                    Male
                  </Typography>
                </MenuItem>
                <MenuItem key="f" value="female">
                  <Typography
                    style={{
                      fontSize: sizeRatio(18),
                    }}
                  >
                    Female
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography
              style={{
                fontSize: sizeRatio(18),
              }}
            >
              Date of birth
            </Typography>
            <Box
              style={{
                width: sizeRatio(318),
                height: sizeRatio(50),
                paddingLeft: sizeRatio(10),
                borderRadius: "12px",
                borderStyle: "solid",
                borderWidth: "1px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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
        <Typography
          style={{
            fontSize: sizeRatio(18),
          }}
        >
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
            style={styles.inputWide}
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
              <Typography
                style={{
                  fontSize: sizeRatio(18),
                }}
              >
                Choose Nationality
              </Typography>
            </MenuItem>
            {options.map((nationality) => (
              <MenuItem key={nationality.value} value={nationality.value}>
                <Typography
                  style={{
                    fontSize: sizeRatio(18),
                  }}
                >
                  {nationality.label}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {showErrNationality && (
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              color: "#C25A0A",
              fontSize: sizeRatio(14),
            }}
          >
            Please enter your nationality
          </Typography>
        )}
        <Typography
          style={{
            fontSize: sizeRatio(18),
          }}
        >
          Password <span style={{ color: "#AA2E26" }}>*</span>
        </Typography>
        <input
          type="password"
          name="pwd"
          autoComplete="off"
          required
          style={styles.inputWide}
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
          style={styles.inputWide}
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
