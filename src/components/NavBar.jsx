import { useState } from "react";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import { Dropdown, Nav, NavDropdown } from "react-bootstrap";
import logo from "@/assets/icon/logo.png";
import moment from "moment";
import { FiMessageSquare, FiBell, FiLogOut, FiSettings } from "react-icons/fi";
import { MdOutlineDashboard, MdOutlinePrivacyTip } from "react-icons/md";
import "./NavBar.css";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { authAtom, currentTabAtom } from "@/recoil/atoms";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { sizeRatio } from "@/theme";
import { styled, alpha } from "@mui/material/styles";
import { Button, Divider, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: sizeRatio(430),
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      paddingTop: sizeRatio(24),
      paddingBottom: sizeRatio(24),
    },
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
  const setCurrentTab = useSetRecoilState(currentTabAtom);
  const currTab = useRecoilValue(currentTabAtom);
  const handleCurrentTab = (tab) => {
    typeof tab == "string" && !tab.includes("/") && setCurrentTab(tab);
  };
  let navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("user");
    setAuth(null);
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuChosen = (chosenMenu) => {
    setAnchorEl(null);
    if (chosenMenu === "Profile") {
      navigate("/Profile");
    } else if (chosenMenu === "Support") {
      navigate("/Profile");
    } else if (chosenMenu === "Privacy") {
      // navigate("/Profile");
    } else if (chosenMenu === "ChangePassword") {
      // navigate("/Profile");
    } else if (chosenMenu === "LogOut") {
      // navigate("/Profile");
    }
  };

  return (
    <Nav
      activeKey="/"
      onSelect={handleCurrentTab}
      style={{
        height: sizeRatio(80),
        paddingInline: sizeRatio(32),
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div>
        <a href="/">
          <img
            src={logo}
            width={sizeRatio(131)}
            height={sizeRatio(38)}
            alt="Logo"
          />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Archivo",
            fontWeight: 400,
            fontSize: sizeRatio(16),
          }}
        >
          {moment(new Date()).format("MMM DD, YYYY")}
        </div>
        <div>
          <FiMessageSquare
            style={{
              borderWidth: sizeRatio(2),
              width: sizeRatio(18),
              height: sizeRatio(18),
              marginLeft: sizeRatio(54),
            }}
          />
        </div>
        <div>
          <FiBell
            style={{
              borderWidth: sizeRatio(2),
              width: sizeRatio(18),
              height: sizeRatio(18),
              marginInline: sizeRatio(24),
            }}
          />
        </div>
        {!auth ? (
          <>
            <div>
              <Nav.Link
                href="/signIn"
                style={{
                  color: "#0F172A",
                  padding: "0px",
                }}
              >
                {t("signIn")}
              </Nav.Link>
            </div>
            <div>
              <Nav.Link
                href="/signUp"
                style={{
                  color: "#0F172A",
                  padding: "0px",
                  marginLeft: sizeRatio(24),
                }}
              >
                {t("signUp")}
              </Nav.Link>
            </div>
          </>
        ) : (
          <div>
            <Button
              id="profile-button"
              aria-controls={open ? "profile-button" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableElevation
              onClick={handleClick}
              endIcon={
                <RiArrowDownSLine
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(22),
                    height: sizeRatio(22),
                    color: "#0F172A",
                  }}
                />
              }
            >
              <div
                style={{
                  width: sizeRatio(32),
                  height: sizeRatio(32),
                  borderWidth: 2,
                  borderStyle: "solid",
                  borderColor: "grey",
                  borderRadius: 16,
                }}
              ></div>
              <div
                style={{
                  fontFamily: "Archivo",
                  fontWeight: 300,
                  fontSize: sizeRatio(24),
                  color: "#0F172A",
                  maxWidth: sizeRatio(230),
                  marginLeft: sizeRatio(12),
                }}
              >
                {JSON.parse(auth).email}
              </div>
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
                <div
                  style={{
                    width: sizeRatio(32),
                    height: sizeRatio(32),
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: "grey",
                    borderRadius: 20,
                  }}
                ></div>
                <div
                  style={{
                    fontFamily: "Archivo",
                    fontWeight: 400,
                    fontSize: sizeRatio(20),
                    color: "#0F172A",
                    marginLeft: sizeRatio(12),
                    marginBlock: sizeRatio(9),
                  }}
                >
                  {JSON.parse(auth).email}
                </div>
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
          </div>
          //   <NavDropdown
          //     title={

          //     }
          //   >
          //     <NavDropdown.Item href="/Profile">
          //       <div
          //         style={{
          //           width: sizeRatio(350),
          //           display: "flex",
          //           alignItems: "center",
          //           paddingBlock: sizeRatio(12),
          //         }}
          //       >
          //         <div
          //           style={{
          //             width: sizeRatio(32),
          //             height: sizeRatio(32),
          //             borderWidth: 2,
          //             borderStyle: "solid",
          //             borderRadius: 16,
          //             marginRight: sizeRatio(12),
          //           }}
          //         ></div>
          //         <div
          //           style={{
          //             fontFamily: "Archivo",
          //             fontWeight: 600,
          //           }}
          //         >
          //           {JSON.parse(auth).email}
          //         </div>
          //       </div>
          //     </NavDropdown.Item>
          //     <NavDropdown.Divider style={{ margin: 0 }} />
          //     <NavDropdown.Item
          //       href="#action/3.2"
          //       style={{
          //         paddingBlock: sizeRatio(15),
          //       }}
          //     >
          //       <BsPencilSquare
          //         style={{
          //           borderWidth: sizeRatio(2),
          //           width: sizeRatio(22),
          //           height: sizeRatio(22),
          //           marginRight: sizeRatio(10),
          //         }}
          //       />
          //       Support
          //     </NavDropdown.Item>

          //     <NavDropdown.Item
          //       href="#action/3.2"
          //       style={{
          //         paddingBlock: sizeRatio(15),
          //       }}
          //     >

          //     </NavDropdown.Item>
          //     <NavDropdown.Item
          //       href="#action/3.2"
          //       style={{
          //         paddingBlock: sizeRatio(15),
          //       }}
          //     >

          //     </NavDropdown.Item>
          //     <NavDropdown.Item
          //       // href="#action/3.4"
          //       onClick={signOut}
          //       style={{
          //         paddingTop: sizeRatio(15),
          //         paddingBottom: sizeRatio(15),
          //         marginBottom: -sizeRatio(8),
          //       }}
          //     >

          //     </NavDropdown.Item>
          //   </NavDropdown>
        )}
      </div>
    </Nav>
  );
};
export default NavBar;
