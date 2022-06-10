import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import logo from "/assets/icon/logo.png";
import { FiBell, FiLogIn, FiLogOut, FiSettings } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { authAtom, currentTabAtom } from "@/recoil/atoms";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { sizeRatio } from "@/theme";
import { styled, alpha } from "@mui/material/styles";
import {
  Avatar,
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
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { GoPrimitiveDot } from "react-icons/go";
import { FaUserEdit } from "react-icons/fa";
import { fontSize } from "@mui/system";

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
  const [auth, setAuth] = useRecoilState(authAtom);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const setCurrentTab = useSetRecoilState(currentTabAtom);
  const currTab = useRecoilValue(currentTabAtom);
  const handleCurrentTab = (tab) => {
    typeof tab == "string" && !tab.includes("/") && setCurrentTab(tab);
  };
  let navigate = useNavigate();
  const [value, setValue] = useState([20, 37]);
  function valuetext(value) {
    return `${value}%`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorNoti, setAnchorNoti] = useState(null);
  const open = Boolean(anchorEl);
  const openNoti = Boolean(anchorNoti);
  const [typeSupport, setTypeSupport] = useState("Choose an area");

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
      setShowSupportModal(true);
    } else if (chosenMenu === "Privacy") {
      // navigate("/Profile");
    } else if (chosenMenu === "ChangePassword") {
      // navigate("/Profile");
    } else if (chosenMenu === "LogOut") {
      localStorage.removeItem("user");
      setAuth(null);
      navigate("/");
    }
  };

  const setSubmit = () => {
    setShowSupportModal(false);
  };

  const lstSupportType = ["Choose an area", "Type 1", "Type 2"];

  return (
    <Box
      activeKey="/"
      onSelect={handleCurrentTab}
      style={{
        height: sizeRatio(80),
        display: "flex",
        flex: 1,

        alignItems: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Modal open={showSupportModal} onClose={() => setShowSupportModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: sizeRatio(676),
            bgcolor: "#FFF",
            paddingBlock: sizeRatio(35),
            paddingInline: sizeRatio(70),
            borderRadius: "12px",
          }}
        >
          <Typography
            style={{
              fontWeight: 700,
              fontSize: sizeRatio(24),
              textAlign: "center",
            }}
          >
            Something went wrong
          </Typography>
          <Typography
            style={{
              marginTop: sizeRatio(15),
              fontSize: sizeRatio(16),
            }}
          >
            How can we improve?
          </Typography>
          <FormControl
            fullWidth
            style={{
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
                      fontSize: sizeRatio(12),
                      height: sizeRatio(32),
                      display: "flex",
                      alignItems: "center",
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
              marginTop: sizeRatio(15),
              marginBottom: sizeRatio(4),
              fontWeight: 700,
              fontSize: sizeRatio(12),
            }}
          >
            Details
          </Typography>
          <textarea
            type="textarea"
            style={{
              fontSize: sizeRatio(10),
              fontWeight: 300,
              width: sizeRatio(530),
              height: sizeRatio(130),
              marginTop: sizeRatio(4),
              marginBottom: sizeRatio(6),
              padding: sizeRatio(18),
              borderRadius: "12px",
              borderColor: "#CBD5E1",
              borderWidth: "1px",
            }}
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: sizeRatio(10),
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E2E8F0",
                color: "#64748B",
                marginRight: sizeRatio(16),
                width: sizeRatio(101),
                borderRadius: "8px",
              }}
              onClick={() => setShowSupportModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#061123",
                color: "#F8FAFC",
                width: sizeRatio(101),
                borderRadius: "8px",
              }}
              onClick={setSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box
        style={{
          display: "flex",
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
          display: "flex",
          flex: 5,
          minWidth: sizeRatio(100),
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          style={{
            fontSize: sizeRatio(16),
          }}
        >
          {moment(new Date()).format("MMM DD, YYYY")}
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          flex: 3,
          minWidth: sizeRatio(400),
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {!auth ? (
          <Box
            style={{
              display: "flex",
            }}
          >
            <Button href="/signUp">
              <FaUserEdit
                style={{
                  width: sizeRatio(16),
                  height: sizeRatio(16),
                  color: "#0F172A",
                }}
              ></FaUserEdit>
              <Typography
                style={{
                  color: "#0F172A",
                  padding: "0px",
                  fontWeight: 700,
                  fontSize: sizeRatio(16),
                  marginLeft: sizeRatio(10),
                }}
              >
                {t("signUp")}
              </Typography>
            </Button>
            <Button
              href="/signIn"
              style={{
                marginInline: sizeRatio(20),
              }}
            >
              <FiLogIn
                style={{
                  width: sizeRatio(16),
                  height: sizeRatio(16),
                  color: "#0F172A",
                }}
              ></FiLogIn>
              <Typography
                style={{
                  color: "#0F172A",
                  padding: "0px",
                  fontWeight: 700,
                  fontSize: sizeRatio(16),
                  marginLeft: sizeRatio(10),
                }}
              >
                {t("signIn")}
              </Typography>
            </Button>
          </Box>
        ) : (
          <Box>
            <Button
              style={{
                color: "#0F172A",
              }}
              onClick={handleNotiClick}
            >
              <FiBell
                style={{
                  borderWidth: sizeRatio(2),
                  width: sizeRatio(18),
                  height: sizeRatio(18),
                }}
              />
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
                    <Avatar
                      alt="Remy Sharp"
                      src="../../src/assets/icon/HVR.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Fragment>
                        <Typography
                          component="span"
                          style={{
                            color: "#0F172A",
                            fontSize: sizeRatio(16),
                            fontWeight: 700,
                          }}
                        >
                          Hiveres #000123456
                        </Typography>
                        <Typography
                          component="span"
                          style={{
                            color: "#0F172A",
                            fontSize: sizeRatio(16),
                          }}
                        >
                          — have just been re-dealed
                        </Typography>
                      </Fragment>
                    }
                    secondary={
                      <Fragment>
                        <Typography
                          style={{
                            color: "#C25A0A",
                            fontSize: sizeRatio(16),
                          }}
                        >
                          2 hours ago
                        </Typography>
                      </Fragment>
                    }
                  />
                  {true ? (
                    <GoPrimitiveDot
                      style={{
                        width: sizeRatio(20),
                        color: "#C25A0A",
                        fontSize: sizeRatio(16),
                      }}
                    />
                  ) : (
                    <Box
                      style={{
                        width: sizeRatio(20),
                        backgroundColor: "blue",
                        fontSize: sizeRatio(16),
                      }}
                    />
                  )}
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="../../src/assets/icon/ETH.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Fragment>
                        <Typography
                          component="span"
                          style={{
                            color: "#0F172A",
                            fontSize: sizeRatio(16),
                            fontWeight: 700,
                          }}
                        >
                          Hiveres #000123456
                        </Typography>
                        <Typography
                          component="span"
                          style={{
                            color: "#0F172A",
                            fontSize: sizeRatio(16),
                          }}
                        >
                          — have just sent you 0,314 ETH
                        </Typography>
                      </Fragment>
                    }
                    secondary={
                      <Fragment>
                        <Typography
                          style={{
                            color: "#C25A0A",
                            fontSize: sizeRatio(16),
                          }}
                        >
                          2 hours ago
                        </Typography>
                      </Fragment>
                    }
                  />
                  {true ? (
                    <GoPrimitiveDot
                      style={{
                        width: sizeRatio(20),
                        color: "#C25A0A",
                        fontSize: sizeRatio(16),
                      }}
                    />
                  ) : (
                    <Box
                      style={{
                        width: sizeRatio(20),
                        fontSize: sizeRatio(16),
                      }}
                    />
                  )}
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar
                      alt="Cindy Baker"
                      src="../../src/assets/icon/BTC.png"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Fragment>
                        <Typography
                          component="span"
                          style={{
                            color: "#0F172A",
                            fontSize: sizeRatio(16),
                            fontWeight: 700,
                          }}
                        >
                          Hiveres #000123456
                        </Typography>
                        <Typography
                          component="span"
                          style={{
                            color: "#0F172A",
                            fontSize: sizeRatio(16),
                          }}
                        >
                          — have just sent you 0,314 BTC
                        </Typography>
                      </Fragment>
                    }
                    secondary={
                      <Fragment>
                        <Typography
                          style={{
                            color: "#C25A0A",
                            fontSize: sizeRatio(16),
                          }}
                        >
                          2 hours ago
                        </Typography>
                      </Fragment>
                    }
                  />
                  {true ? (
                    <GoPrimitiveDot
                      style={{
                        width: sizeRatio(20),
                        color: "#C25A0A",
                        fontSize: sizeRatio(16),
                      }}
                    />
                  ) : (
                    <Box
                      style={{
                        width: sizeRatio(20),
                        backgroundColor: "blue",
                        fontSize: sizeRatio(16),
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
                  fontSize: sizeRatio(18),
                  fontWeight: 400,
                  color: "#0F172A",
                  maxWidth: sizeRatio(230),
                  marginLeft: sizeRatio(12),
                }}
              >
                {JSON.parse(auth).email}
              </Box>
              <RiArrowDownSLine
                style={{
                  borderWidth: sizeRatio(2),
                  width: sizeRatio(22),
                  height: sizeRatio(22),
                  color: "#0F172A",
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
                    fontSize: sizeRatio(18),
                    color: "#0F172A",
                    marginLeft: sizeRatio(12),
                    marginBlock: sizeRatio(9),
                  }}
                >
                  {JSON.parse(auth).email}
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
                <BsPencilSquare
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(22),
                    height: sizeRatio(22),
                    marginRight: sizeRatio(8),
                    marginBlock: sizeRatio(8),
                  }}
                />
                Support
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuChosen("Privacy")}
                disableRipple
              >
                <MdOutlinePrivacyTip
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(22),
                    height: sizeRatio(22),
                    marginRight: sizeRatio(8),
                    marginBlock: sizeRatio(8),
                  }}
                />
                Privacy
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuChosen("ChangePassword")}
                disableRipple
              >
                <FiSettings
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(22),
                    height: sizeRatio(22),
                    marginRight: sizeRatio(8),
                    marginBlock: sizeRatio(8),
                  }}
                />
                Change Password
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuChosen("LogOut")}
                disableRipple
              >
                <FiLogOut
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(22),
                    height: sizeRatio(22),
                    marginRight: sizeRatio(8),
                    marginBlock: sizeRatio(8),
                  }}
                />
                Log Out
              </MenuItem>
            </StyledMenu>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default NavBar;
