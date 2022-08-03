import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import logo from "/assets/icon/logo.png";
import {
  FiBell,
  FiEye,
  FiEyeOff,
  FiLogIn,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { usersAtom } from "@/recoil/atoms";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { colors, sizeRatio, space, styleModal676, text } from "@/theme";
import { styled, alpha } from "@mui/material/styles";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import { GoPrimitiveDot } from "react-icons/go";
import { FaUserEdit } from "react-icons/fa";
import { useUserActions } from "@/recoil/actions";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const PWD_REGEX = /^.{6,}$/;

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "4px 4px 12px 12px",
    marginTop: theme.spacing(1),
    minWidth: sizeRatio(230),
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {},
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const NavBar = () => {
  const { t } = useTranslation();
  const [users] = useRecoilState(usersAtom);
  let navigate = useNavigate();
  const [anchorNoti, setAnchorNoti] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showModal, setShowModal] = useState("");

  const [pwd, setPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [newPwdFocus, setNewPwdFocus] = useState(false);
  const [showErrNewPwd, setShowErrNewPwd] = useState(false);
  const [validNewPwd, setValidNewPwd] = useState(false);
  const [confirmNewPwd, setConfirmNewPwd] = useState("");
  const [confirmNewPwdFocus, setConfirmNewPwdFocus] = useState(false);
  const [showErrConfirmNewPwd, setShowErrConfirmNewPwd] = useState(false);
  const [pwdShown, setPwdShown] = useState(false);
  const [newPwdShown, setNewPwdShown] = useState(false);
  const [confirmNewPwdShown, setConfirmNewPwdShown] = useState(false);

  const open = Boolean(anchorEl);
  const openNoti = Boolean(anchorNoti);

  const { NeutralDay000, WarningOrange900, ErrorRed900, NeutralDay900 } =
    colors;
  const {
    S18W400,
    S14W400,
    S20W700,
    S12W400,
    S12W700,
    S10W300,
    S16W400,
    S16W700,
    S24W700,
  } = text;
  const { Row, RowSpaceBetween, RowCenter, RowFlexEnd } = space;

  const [typeSupport, setTypeSupport] = useState("Choose an area");
  const { logOut } = useUserActions();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotiClick = (event) => {
    setAnchorNoti(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNoti = () => {
    setAnchorNoti(null);
  };

  const handleMenuChosen = (chosenMenu) => {
    setAnchorEl(null);
    if (chosenMenu === "Profile") {
      navigate("/Profile");
    } else if (chosenMenu === "Support") {
      setShowModal("Support");
    } else if (chosenMenu === "Privacy") {
      // navigate("/Profile");
    } else if (chosenMenu === "ChangePassword") {
      setShowModal("ChangePassword");
      // navigate("/Profile");
    } else if (chosenMenu === "LogOut") {
      logOut();
    }
  };

  useEffect(() => {
    setPwdShown(false);
    setNewPwdShown(false);
    setConfirmNewPwdShown(false);
  }, [showModal]);

  useEffect(() => {
    const result = PWD_REGEX.test(newPwd);
    setValidNewPwd(result);
  }, [newPwd]);

  useEffect(() => {
    if (newPwdFocus || confirmNewPwdFocus) {
      setShowErrNewPwd(false);
      setShowErrConfirmNewPwd(false);
    }
  }, [newPwdFocus, confirmNewPwdFocus]);

  const lstSupportType = ["Choose an area", "Type 1", "Type 2"];

  const styles = {
    iconAuth: {
      width: sizeRatio(16),
      height: sizeRatio(16),
      color: NeutralDay000,
    },
    inputStyle: {
      paddingLeft: sizeRatio(18),
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: NeutralDay000,
    },
    wideStyle: {
      width: sizeRatio(530),
      height: sizeRatio(50),
      marginTop: sizeRatio(4),
      marginBottom: sizeRatio(6),
      borderRadius: "12px",
    },
    txtAuth: {
      ...S16W700,
      color: NeutralDay000,
      padding: "0px",
      marginLeft: sizeRatio(10),
    },
    txtMenu: {
      ...S14W400,
      color: NeutralDay000,
    },
    warningTxt: {
      ...S14W400,
      ...Row,
      color: WarningOrange900,
    },
    iconMenu: {
      borderWidth: sizeRatio(2),
      width: sizeRatio(22),
      height: sizeRatio(22),
      marginRight: sizeRatio(8),
      marginBlock: sizeRatio(8),
    },
  };

  const setSubmit = () => {
    setShowModal("");
  };

  const supportComponent = () => {
    return (
      <>
        <Typography style={{ ...S16W400, marginTop: sizeRatio(15) }}>
          How can we improve?
        </Typography>
        <FormControl
          style={{
            width: "100%",
            marginTop: sizeRatio(8),
          }}
        >
          <Select
            value={typeSupport}
            onChange={(e) => setTypeSupport(e.target.value)}
            style={{
              paddingLeft: sizeRatio(10),
              borderRadius: "8px",
              borderStyle: "solid",
              borderWidth: "1px",
              height: sizeRatio(32),
              borderColor: "#CBD5E1",
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
            {lstSupportType.map((t) => (
              <MenuItem key={t} value={t}>
                <Typography
                  style={{
                    ...S12W400,
                    ...Row,
                    height: sizeRatio(32),
                  }}
                >
                  {t}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography
          style={{
            ...S12W700,
            marginTop: sizeRatio(15),
            marginBottom: sizeRatio(4),
          }}
        >
          Details
        </Typography>
        <textarea
          type="textarea"
          style={{
            ...S10W300,
            width: "100%",
            height: sizeRatio(130),
            marginTop: sizeRatio(4),
            marginBottom: sizeRatio(6),
            padding: sizeRatio(18),
            borderRadius: "12px",
            borderColor: "#CBD5E1",
            borderWidth: "1px",
          }}
        />
        <Box style={{ ...RowFlexEnd, marginTop: sizeRatio(10) }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#E2E8F0",
              outline: "none",
              color: "#64748B",
              marginRight: sizeRatio(16),
              width: sizeRatio(101),
              borderRadius: "8px",
            }}
            onClick={() => setShowModal("")}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{
              outline: "none",
              backgroundColor: "#061123",
              color: "#F8FAFC",
              width: sizeRatio(101),
              borderRadius: "8px",
            }}
            onClick={() => setSubmit()}
          >
            Submit
          </Button>
        </Box>
      </>
    );
  };

  const changePasswordStep1 = () => {
    return (
      <>
        <Typography
          style={{
            ...S20W700,
            marginTop: sizeRatio(30),
            marginBottom: sizeRatio(15),
          }}
        >
          Enter your current password
        </Typography>
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
        <Box style={{ ...RowFlexEnd, marginTop: sizeRatio(10) }}>
          <Button
            variant="contained"
            style={{
              outline: "none",
              backgroundColor: "#061123",
              color: "#F8FAFC",
              width: sizeRatio(101),
              borderRadius: "8px",
            }}
            onClick={() => setShowModal("ChangePasswordStep2")}
          >
            Next
          </Button>
        </Box>
      </>
    );
  };

  const changePasswordStep2 = () => {
    return (
      <>
        <Typography
          style={{
            ...S24W700,
            marginTop: sizeRatio(15),
          }}
        >
          New password
        </Typography>
        <Box
          style={{
            position: "relative",
            marginTop: sizeRatio(10),
          }}
        >
          <input
            type={newPwdShown ? "text" : "password"}
            name="newPwd"
            autoComplete="off"
            required
            style={{ ...styles.inputStyle, ...styles.wideStyle }}
            onChange={(e) => setNewPwd(e.target.value)}
            onFocus={() => setNewPwdFocus(true)}
            onBlur={() => setNewPwdFocus(false)}
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
            onClick={() => setNewPwdShown(!newPwdShown)}
          >
            {newPwdShown ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Box>
        {showErrNewPwd && (
          <Typography style={styles.warningTxt}>
            Minimun length is 6 letters
          </Typography>
        )}
        <Typography
          style={{
            ...S24W700,
            marginTop: sizeRatio(15),
          }}
        >
          Confirm new password
        </Typography>
        <Box
          style={{
            position: "relative",
            marginTop: sizeRatio(10),
          }}
        >
          <input
            type={confirmNewPwdShown ? "text" : "password"}
            name="confirmNewPwd"
            autoComplete="off"
            required
            style={{ ...styles.inputStyle, ...styles.wideStyle }}
            onChange={(e) => setConfirmNewPwd(e.target.value)}
            onFocus={() => setConfirmNewPwdFocus(true)}
            onBlur={() => setConfirmNewPwdFocus(false)}
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
            onClick={() => setConfirmNewPwdShown(!confirmNewPwdShown)}
          >
            {confirmNewPwdShown ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Box>
        {showErrConfirmNewPwd && (
          <Typography style={styles.warningTxt}>
            Don't match password.
          </Typography>
        )}

        <Box
          style={{ ...Row, flex: 1, width: "100%", marginTop: sizeRatio(10) }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "#061123",
              outline: "none",
              color: "#F8FAFC",
              width: "100%",
              height: sizeRatio(50),
              borderRadius: "12px",
              marginTop: sizeRatio(10),
            }}
            onClick={() => confirmChangePassword()}
          >
            Confirm
          </Button>
        </Box>
      </>
    );
  };

  const confirmChangePassword = () => {
    let notError = true;

    if (!validNewPwd || newPwd === "") {
      setShowErrNewPwd(true);
      notError = false;
    } else {
      setShowErrNewPwd(false);
    }
    if (confirmNewPwd !== newPwd) {
      setShowErrConfirmNewPwd(true);
      notError = false;
    } else {
      setShowErrConfirmNewPwd(false);
    }
    if (notError) {
      setShowModal("");
    }
  };

  return (
    <Box
      activeKey="/"
      style={{
        ...Row,
        backgroundColor: "white",
        height: sizeRatio(80),
        flex: 1,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Modal open={showModal !== ""} onClose={() => setShowModal("")}>
        <Box sx={styleModal676}>
          <Box style={{ ...RowSpaceBetween, width: "100%" }}>
            {showModal === "ChangePasswordStep2" && (
              <Button style={{ color: NeutralDay000, outline: "none" }}>
                <IoArrowBackCircleOutline
                  style={{
                    fontSize: sizeRatio(30),
                    flex: 1,
                  }}
                  onClick={() => setShowModal("ChangePassword")}
                />
              </Button>
            )}
            <Typography
              style={{
                ...S20W700,
                textAlign: "center",
                flex: 8,
              }}
            >
              {showModal.includes("Support")
                ? "Something went wrong"
                : showModal.includes("ChangePassword") && "Change password"}
            </Typography>
            {showModal === "ChangePasswordStep2" && (
              <Box
                style={{
                  flex: 1,
                }}
              ></Box>
            )}
          </Box>
          {showModal === "Support" && supportComponent()}
          {showModal === "ChangePassword" && changePasswordStep1()}
          {showModal === "ChangePasswordStep2" && changePasswordStep2()}
        </Box>
      </Modal>
      <Box
        style={{
          ...Row,
          flex: 1,
          marginLeft: sizeRatio(32),
        }}
      >
        <Link href="/JobList">
          <img
            src={logo}
            width={sizeRatio(131)}
            height={sizeRatio(38)}
            alt="Logo"
          />
        </Link>
      </Box>
      <Box
        style={{
          // width: sizeRatio(750),
          ...RowFlexEnd,
          flex: 5,
          minWidth: sizeRatio(100),
        }}
      >
        <Typography style={S16W400}>
          {moment(new Date()).format("MMM DD, YYYY")}
        </Typography>
      </Box>
      <Box
        style={{
          ...RowFlexEnd,
          flex: 3,
          minWidth: sizeRatio(400),
        }}
      >
        {!users ? (
          <Box style={Row}>
            <Button
              href="/signUp"
              style={{
                outline: "none",
              }}
            >
              <FaUserEdit style={styles.iconAuth}></FaUserEdit>
              <Typography style={styles.txtAuth}>{t("signUp")}</Typography>
            </Button>
            <Button
              href="/signIn"
              style={{
                marginInline: sizeRatio(20),
                outline: "none",
              }}
            >
              <FiLogIn style={styles.iconAuth}></FiLogIn>
              <Typography style={styles.txtAuth}>{t("signIn")}</Typography>
            </Button>
          </Box>
        ) : (
          <Box>
            <Button
              style={{
                color: NeutralDay000,
                outline: "none",
              }}
              onClick={handleNotiClick}
            >
              <Badge color="secondary" variant="dot">
                <FiBell
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(18),
                    height: sizeRatio(18),
                  }}
                />
              </Badge>
            </Button>
            <StyledMenu
              id="noti-menu"
              anchorEl={anchorNoti}
              open={openNoti}
              onClose={handleCloseNoti}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: sizeRatio(350),
                  bgcolor: "background.paper",
                  borderRadius: "18px",
                }}
              >
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/assets/icon/HVR.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Fragment>
                        <Typography
                          component="span"
                          style={{
                            ...S16W700,
                            color: NeutralDay000,
                          }}
                        >
                          Hiveres #000123456
                        </Typography>
                        <Typography
                          component="span"
                          style={{ ...S16W400, color: NeutralDay000 }}
                        >
                          — have just been re-dealed
                        </Typography>
                      </Fragment>
                    }
                    secondary={
                      <Fragment>
                        <Typography
                          style={{ ...S16W400, color: WarningOrange900 }}
                        >
                          2 hours ago
                        </Typography>
                      </Fragment>
                    }
                  />
                  {true ? (
                    <GoPrimitiveDot
                      style={{
                        ...S16W400,
                        width: sizeRatio(20),
                        color: WarningOrange900,
                      }}
                    />
                  ) : (
                    <Box
                      style={{
                        width: sizeRatio(20),
                      }}
                    />
                  )}
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/assets/icon/ETH.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Fragment>
                        <Typography
                          component="span"
                          style={{
                            ...S16W700,
                            color: NeutralDay000,
                          }}
                        >
                          Hiveres #000123456
                        </Typography>
                        <Typography
                          component="span"
                          style={{
                            ...S16W400,
                            color: NeutralDay000,
                          }}
                        >
                          — have just sent you 0,314 ETH
                        </Typography>
                      </Fragment>
                    }
                    secondary={
                      <Fragment>
                        <Typography
                          style={{ ...S16W400, color: WarningOrange900 }}
                        >
                          2 hours ago
                        </Typography>
                      </Fragment>
                    }
                  />
                  {true ? (
                    <GoPrimitiveDot
                      style={{
                        ...S16W400,
                        width: sizeRatio(20),
                        color: WarningOrange900,
                      }}
                    />
                  ) : (
                    <Box style={{ ...S16W400, width: sizeRatio(20) }} />
                  )}
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/assets/icon/BTC.png" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Fragment>
                        <Typography
                          component="span"
                          style={{
                            ...S16W700,
                            color: NeutralDay000,
                          }}
                        >
                          Hiveres #000123456
                        </Typography>
                        <Typography
                          component="span"
                          style={{ ...S16W400, color: NeutralDay000 }}
                        >
                          — have just sent you 0,314 BTC
                        </Typography>
                      </Fragment>
                    }
                    secondary={
                      <Fragment>
                        <Typography
                          style={{ ...S16W400, color: WarningOrange900 }}
                        >
                          2 hours ago
                        </Typography>
                      </Fragment>
                    }
                  />
                  {true ? (
                    <GoPrimitiveDot
                      style={{
                        ...S16W400,
                        width: sizeRatio(20),
                        color: WarningOrange900,
                      }}
                    />
                  ) : (
                    <Box
                      style={{
                        width: sizeRatio(20),
                      }}
                    />
                  )}
                </ListItem>
              </List>
            </StyledMenu>
            <Button
              id="profile-button"
              aria-controls={open ? "profile-button" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableElevation
              onClick={handleClick}
              style={{
                outline: "none",
                marginRight: sizeRatio(20),
              }}
            >
              <img
                style={{
                  width: sizeRatio(32),
                  height: sizeRatio(32),
                }}
                src="/assets/icon/avatar.png"
                alt=""
              />
              <Box
                style={{
                  ...S18W400,
                  color: NeutralDay000,
                  maxWidth: sizeRatio(230),
                  marginLeft: sizeRatio(12),
                }}
              >
                {users.email}
              </Box>
              <RiArrowDownSLine
                style={{
                  borderWidth: sizeRatio(2),
                  width: sizeRatio(22),
                  height: sizeRatio(22),
                  color: NeutralDay000,
                }}
              />
            </Button>
            <StyledMenu
              id="profile-menu"
              MenuListProps={{
                "aria-labelledby": "profile-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => handleMenuChosen("Profile")}
                disableRipple
                style={{
                  marginBottom: sizeRatio(12),
                }}
              >
                <img
                  style={{
                    width: sizeRatio(32),
                    height: sizeRatio(32),
                  }}
                  src="/assets/icon/avatar.png"
                  alt=""
                />
                <Box
                  style={{
                    ...S18W400,
                    color: NeutralDay000,
                    marginLeft: sizeRatio(12),
                    marginBlock: sizeRatio(9),
                  }}
                >
                  {users.email}
                </Box>
              </MenuItem>
              <Divider
                sx={{
                  my: 0.5,
                }}
              />
              <MenuItem
                onClick={() => handleMenuChosen("Support")}
                disableRipple
                style={{
                  marginTop: sizeRatio(12),
                }}
              >
                <BsPencilSquare style={styles.iconMenu} />
                <Typography style={styles.txtMenu}>Support</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuChosen("Privacy")}
                disableRipple
              >
                <MdOutlinePrivacyTip style={styles.iconMenu} />
                <Typography style={styles.txtMenu}>Privacy</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuChosen("ChangePassword")}
                disableRipple
              >
                <FiSettings style={styles.iconMenu} />
                <Typography style={styles.txtMenu}>Change Password</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuChosen("LogOut")}
                disableRipple
              >
                <FiLogOut style={styles.iconMenu} />
                <Typography style={styles.txtMenu}>Log Out</Typography>
              </MenuItem>
            </StyledMenu>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default NavBar;
