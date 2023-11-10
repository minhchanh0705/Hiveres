import DrawerComponent from "@/components/DrawerComponent";
import NavBar from "@/components/NavBar";
import { useUserActions } from "@/recoil/actions";
import { isExpandAtom } from "@/recoil/atoms";
import { colors, sizeRatio, styleModal676, text } from "@/theme";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useMemo, useState } from "react";
import { FiLogOut, FiSave } from "react-icons/fi";
import countryList from "react-select-country-list";
import { useRecoilValue } from "recoil";

const Profile = () => {
  const isExpand = useRecoilValue(isExpandAtom);
  const [gender, setGender] = useState("male");
  const [nationality, setNationality] = useState("valueNull");
  const [showModalCofirm, setShowModalCofirm] = useState(false);
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));
  const options = useMemo(() => countryList().getData(), []);
  const { logOut } = useUserActions();
  const {
    NeutralDay000,
    NeutralDay900,
    NeutralDay500,
    NeutralDay700,
    PrimaryBlue900,
  } = colors;
  const { S20W700, S16W700, S32W500 } = text;

  const signOut = () => {
    setShowModalCofirm(true);
  };
  
  const changeHandler = (v) => {
    setNationality(v.value);
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const styles = {
    inputDropdown: {
      backgroundColor: "#FFF",
      borderRadius: sizeRatio(8),
      borderWidth: "0px",
      fontSize: sizeRatio(20),
      flex: 1,
    },
    field: {
      height: sizeRatio(60),
      display: "flex",
      width: "100%",
      alignItems: "center",
      marginTop: sizeRatio(48),
      paddingInline: sizeRatio(70),
    },
    title: {
      fontSize: sizeRatio(20),
      color: NeutralDay000,
      width: sizeRatio(150),
    },
    inputWide: {
      height: sizeRatio(60),
      borderRadius: sizeRatio(8),
      borderWidth: "0px",
      color: NeutralDay000,
      fontSize: sizeRatio(18),
      paddingLeft: sizeRatio(12),
      flex: 1,
    },
  };
  return (
    <Box style={{ backgroundColor: "#F1F5F9" }}>
      <NavBar />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          overflow: "scroll",
        }}
      >
        <DrawerComponent />
        <Box
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            marginBottom: sizeRatio(42),
            marginInline: sizeRatio(30),
          }}
        >
          <Box
            style={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              marginTop: sizeRatio(32),
              marginBottom: sizeRatio(42),
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingInline: sizeRatio(70),
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <img
                style={{
                  width: sizeRatio(150),
                  height: sizeRatio(150),
                }}
                src="/assets/icon/avatar.png"
                alt=""
              />
              <Typography
                style={{
                  marginLeft: sizeRatio(40),
                  fontSize: sizeRatio(48),
                }}
              >
                Hiveres
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                height: "100%",
                alignItems: "flex-end",
              }}
            >
              <Button
                style={{
                  outline: "none",
                  border: "1px solid #061123",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  paddingInline: sizeRatio(20),
                  paddingBlock: sizeRatio(6),
                  color: "#061123",
                }}
                onClick={() => {
                  signOut();
                }}
              >
                <Typography
                  style={{
                    fontSize: sizeRatio(12),
                    fontWeight: 700,
                  }}
                >
                  Sign out
                </Typography>
                <FiLogOut
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(20),
                    height: sizeRatio(20),
                    marginLeft: sizeRatio(15),
                  }}
                />
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              border: "1px solid #CBD5E1",
              borderRadius: "12px",
              paddingBlock: sizeRatio(30),
            }}
          >
            <Typography
              style={{
                fontSize: sizeRatio(36),
                marginLeft: sizeRatio(70),
                color: NeutralDay000,
              }}
            >
              Account's Info
            </Typography>
            <Typography
              style={{
                fontWeight: 300,
                fontSize: sizeRatio(20),
                marginLeft: sizeRatio(70),
                color: "#000",
                display: "flex",
              }}
            >
              Info about your account across Hiveres services
            </Typography>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: sizeRatio(48),
                paddingInline: sizeRatio(70),
              }}
            >
              <Typography style={styles.title}>Email</Typography>
              <input
                defaultValue="Hiveres@gmail.com"
                style={styles.inputWide}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              border: "1px solid #CBD5E1",
              borderRadius: "12px",
              marginTop: sizeRatio(48),
              paddingBlock: sizeRatio(30),
            }}
          >
            <Typography
              style={{
                fontSize: sizeRatio(36),
                marginLeft: sizeRatio(70),
                color: NeutralDay000,
              }}
            >
              Personal Info
            </Typography>
            <Typography
              style={{
                fontWeight: 300,
                fontSize: sizeRatio(20),
                marginLeft: sizeRatio(70),
                color: "#000",
              }}
            >
              Manage your personal info and control what can be seen when you
              use Hiveres Account profile.
            </Typography>
            <Box style={styles.field}>
              <Typography style={styles.title}>Name</Typography>
              <input defaultValue="Hiveres" style={styles.inputWide} />
            </Box>
            <Box style={{ display: "flex" }}>
              <Box style={styles.field}>
                <Typography style={styles.title}>Gender</Typography>
                <FormControl style={styles.inputDropdown}>
                  <Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
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
                          fontSize: sizeRatio(20),
                        }}
                      >
                        Male
                      </Typography>
                    </MenuItem>
                    <MenuItem key="f" value="female">
                      <Typography
                        style={{
                          fontSize: sizeRatio(20),
                        }}
                      >
                        Female
                      </Typography>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box style={styles.field}>
                <Typography style={styles.title}>Date of birth</Typography>
                <Box style={styles.inputDropdown}>
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
            <Box style={styles.field}>
              <Typography style={styles.title}>Nation</Typography>
              <FormControl
                style={{
                  backgroundColor: "#FFF",
                  borderRadius: sizeRatio(8),
                  borderWidth: "0px",
                  fontSize: sizeRatio(20),
                  flex: 1,
                }}
              >
                <Select
                  value={nationality}
                  onChange={(e) => changeHandler(e.target)}
                  style={styles.inputDropdown}
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
            </Box>
          </Box>

          <Box
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              paddingBlock: sizeRatio(30),
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: sizeRatio(70),
            }}
          >
            <Button
              style={{
                outline: "none",
                width: sizeRatio(210),
                height: sizeRatio(48),
                backgroundColor: "#061123",
                borderRadius: "8px",
                alignItems: "center",
              }}
            >
              <FiSave
                style={{
                  color: "#FFFFFF",
                  fontSize: sizeRatio(20),
                  marginInline: sizeRatio(3),
                }}
              />
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: sizeRatio(16),
                  marginInline: sizeRatio(3),
                }}
              >
                Save Changes
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal open={showModalCofirm} onClose={() => setShowModalCofirm(false)}>
        <Box sx={{ ...styleModal676, backgroundColor: "white" }}>
          <Typography style={{ ...S20W700, textAlign: "center" }}>
            Sign out
          </Typography>
          <Typography style={{ ...S32W500, textAlign: "center" }}>
            Are you sure?
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{
                ...S16W700,
                width: sizeRatio(92),
                height: sizeRatio(32),
                backgroundColor: NeutralDay700,
                marginTop: sizeRatio(30),
                marginInline: sizeRatio(10),
                color: NeutralDay500,
              }}
              onClick={() => {
                setShowModalCofirm(false);
              }}
            >
              Cancel
            </Button>
            <Button
              style={{
                ...S16W700,
                width: sizeRatio(92),
                height: sizeRatio(32),
                backgroundColor: PrimaryBlue900,
                marginTop: sizeRatio(30),
                marginInline: sizeRatio(10),
                color: NeutralDay900,
              }}
              onClick={logOut}
            >
              Sure
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
export default Profile;
