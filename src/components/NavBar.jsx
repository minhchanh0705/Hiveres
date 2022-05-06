import * as React from "react";
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

const NavBar = () => {
  const { t } = useTranslation();
  const [auth, setAuth] = useRecoilState(authAtom);
  console.log(JSON.parse(auth)?.uname);
  const setCurrentTab = useSetRecoilState(currentTabAtom);
  const currTab = useRecoilValue(currentTabAtom);
  const handleCurrentTab = (tab) => {
    typeof tab == "string" && console.log(tab);
    typeof tab == "string" && !tab.includes("/") && setCurrentTab(tab);
  };
  let navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("user");
    setAuth(null);
    navigate("/main");
  };
  return (
    <div id="dashboardNav">
      <Nav
        className="justify-content-around py-2"
        activeKey="/home"
        style={{ alignItems: "center" }}
        onSelect={handleCurrentTab}
      >
        <div className="row col-6 col-sm-12 col-md-12 col-lg-2 col-xl-2 align-items-center justify-content-center">
          <Nav.Item>
            <Nav.Link href="/home">
              <img
                src={logo}
                width="200"
                height="58"
                className="d-inline-block align-top "
                alt="React Bootstrap logo"
              />
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="row col-6 col-sm-12 col-md-12 col-lg-3 col-xl-4 align-items-center justify-content-center">
          <Nav.Item>
            <Nav.Link
              eventKey="Dashboard"
              className={
                currTab === "Dashboard"
                  ? "text-white bg-dark rounded"
                  : "text-white bg-secondary rounded"
              }
              style={{
                width: "180px",
                textAlign: "center",
                margin: "8px",
              }}
              onClick={handleCurrentTab}
            >
              <MdOutlineDashboard
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "5px",
                }}
              />
              {t("dashboard")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="Market"
              className={
                currTab === "Market"
                  ? "text-white bg-dark rounded "
                  : "text-white bg-secondary rounded "
              }
              style={{
                width: "180px",
                textAlign: "center",
                margin: "8px",
              }}
              onClick={handleCurrentTab}
            >
              {t("market")}
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="row col-sm-12 col-md-12 col-lg-2 col-xl-2 align-items-center justify-content-center justify-content-lg-end ">
          <Nav.Item>{moment(new Date()).format("MMM DD, YYYY")}</Nav.Item>
        </div>
        {/* <div className="row col-3 col-sm-4 col-md-6 col-lg-2 col-xl-1  align-items-center justify-content-center justify-content-sm-start justify-content-lg-end mx-2">
        
        </div> */}
        <div className="row col-12 col-md-12 col-lg-5 col-xl-4  align-items-center justify-content-end  justify-content-lg-end">
          <Nav.Item>
            <FiMessageSquare
              style={{
                borderWidth: "2px",
                width: "18px",
                height: "18px",
              }}
            />
          </Nav.Item>
          <Nav.Item>
            <FiBell
              style={{
                borderWidth: "2px",
                width: "18px",
                height: "18px",
                marginInline: "15px",
              }}
            />
          </Nav.Item>
          {!auth ? (
            <>
              <Nav.Item>
                <Nav.Link href="/signIn" style={{ color: "#0F172A" }}>
                  {t("signIn")}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/signUp" style={{ color: "#0F172A" }}>
                  {t("signUp")}
                </Nav.Link>
              </Nav.Item>
            </>
          ) : (
            <NavDropdown
              // id="nav-dropdown-dark-example"
              title={
                <div className="row align-items-center px-4">
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor: "grey",
                      borderRadius: 16,
                    }}
                  ></div>
                  <div
                    className="ml-2 text-truncate"
                    style={{
                      fontFamily: "Archivo",
                      fontWeight: 600,
                      color: "#0F172A",
                      maxWidth: "230px",
                    }}
                  >
                    {JSON.parse(auth).uname}
                    Nguyen Minh Chanh
                  </div>
                  <div
                    className="text-truncate"
                    style={{
                      fontFamily: "Archivo",
                      fontWeight: 600,
                      color: "#0F172A",
                    }}
                  >
                    <RiArrowDownSLine
                      style={{
                        borderWidth: "2px",
                        width: "22px",
                        height: "22px",
                      }}
                    />
                  </div>
                </div>
              }
            >
              <NavDropdown.Item
                disabled
                style={{
                  paddingLeft: "31px",
                  paddingBlock: "10px",
                }}
              >
                <div className="row align-items-center ">
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor: "grey",
                      borderRadius: 16,
                    }}
                  ></div>
                  <div
                    className="mx-2"
                    style={{
                      fontFamily: "Archivo",
                      fontWeight: 600,
                      color: "#0F172A",
                    }}
                  >
                    {JSON.parse(auth).uname}
                    Nguyen Minh Chanh
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                href="#action/3.2"
                style={{
                  paddingLeft: "20px",
                  paddingBlock: "15px",
                }}
              >
                <BsPencilSquare
                  style={{
                    borderWidth: "2px",
                    width: "22px",
                    height: "22px",
                    marginRight: "10px",
                  }}
                />
                Write Feedback
              </NavDropdown.Item>
              <NavDropdown.Divider style={{ margin: 0 }} />
              <NavDropdown.Item
                href="#action/3.2"
                style={{ paddingLeft: "20px", paddingBlock: "15px" }}
              >
                <FiSettings
                  style={{
                    borderWidth: "2px",
                    width: "22px",
                    height: "22px",
                    marginRight: "10px",
                  }}
                />
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                style={{ paddingLeft: "20px", paddingBlock: "15px" }}
              >
                <MdOutlinePrivacyTip
                  style={{
                    borderWidth: "2px",
                    width: "22px",
                    height: "22px",
                    marginRight: "10px",
                  }}
                />
                Privacy
              </NavDropdown.Item>
              <NavDropdown.Item
                // href="#action/3.4"
                onClick={signOut}
                style={{
                  paddingLeft: "20px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  marginBottom: "-8px",
                }}
              >
                <FiLogOut
                  style={{
                    borderWidth: "2px",
                    width: "22px",
                    height: "22px",
                    marginRight: "10px",
                  }}
                />
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </div>
      </Nav>
    </div>
  );
};
export default NavBar;
