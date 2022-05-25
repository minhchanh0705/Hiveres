import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MuiDrawer from "@mui/material/Drawer";
import { Button } from "react-bootstrap";
import { FiEye, FiCreditCard, FiCommand } from "react-icons/fi";
import { AiOutlineMenuFold } from "react-icons/ai";

import { IoList } from "react-icons/io5";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentSectionAtom,
  currentTabAtom,
  isExpandAtom,
} from "@/recoil/atoms";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { sizeRatio } from "@/theme";
const drawerWidth = sizeRatio(220);

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: sizeRatio(88),
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerComponent = () => {
  const setIsExpand = useSetRecoilState(isExpandAtom);
  const isExpand = useRecoilValue(isExpandAtom);

  let navigate = useNavigate();

  const setCurrentSectionAtom = useSetRecoilState(currentSectionAtom);
  // const currTab = useRecoilValue(currentTabAtom);
  const currSection = useRecoilValue(currentSectionAtom);

  // useEffect(() => {
  //   setCurrentSectionAtom(currTab === "Dashboard" ? "JobList" : "Account");
  // }, [currTab]);

  const handleDrawerOpen = () => {
    setIsExpand(true);
  };

  const handleDrawerClose = () => {
    setIsExpand(false);
  };
  const handleChooseSection = (section) => {
    navigate(`/${section}`);
    setCurrentSectionAtom(section);
  };

  return (
    <Drawer
      variant="permanent"
      open={isExpand}
      sx={{
        "& .MuiDrawer-paper": {
          position: "relative",
          marginTop: sizeRatio,
          minHeight: "100vh",
          height: "99.8%",
          borderWidth: "0px",
          backgroundColor: "#1E293B",
        },
      }}
    >
      <Button
        style={{
          backgroundColor: "#1E293B",
          borderWidth: "0px",
          boxShadow: "none",
          textAlign: "left",
          paddingLeft: sizeRatio(32),
          marginTop: sizeRatio(15),
        }}
        onClick={isExpand ? handleDrawerClose : handleDrawerOpen}
      >
        <AiOutlineMenuFold
          style={{
            borderWidth: sizeRatio(2),
            width: sizeRatio(22),
            height: sizeRatio(22),
            color: "#F8FAFC",
          }}
        />
      </Button>
      <List>
        {/* {currTab === "Dashboard"?  */}
        {["Wallet", "Earning", "Job List"].map((text, index) => (
          <ListItem
            key={text.replace(" ", "")}
            disablePadding
            sx={{
              paddingLeft: sizeRatio(32),
              minHeight: sizeRatio(48),
              "&.Mui-selected": {
                backgroundColor: "#e2e8f0",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#e2e8f0",
              },
            }}
            onClick={() => handleChooseSection(text.replace(" ", ""))}
            selected={text.replace(" ", "") === currSection}
          >
            {/* <ListItemButton> */}
            <ListItemIcon
              sx={{
                minWidth: 0,
                color: "white",
                mr: isExpand ? sizeRatio(12) : "auto",
              }}
            >
              {index === 0 ? (
                <FiCreditCard
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(22),
                    height: sizeRatio(22),
                    color:
                      currSection === text.replace(" ", "")
                        ? "#33414D"
                        : "#94A3BB",
                  }}
                />
              ) : index === 1 ? (
                <FiCommand
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(22),
                    height: sizeRatio(22),
                    color:
                      currSection === text.replace(" ", "")
                        ? "#33414D"
                        : "#94A3BB",
                  }}
                />
              ) : index === 2 ? (
                <IoList
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(22),
                    height: sizeRatio(22),
                    color:
                      currSection === text.replace(" ", "")
                        ? "#33414D"
                        : "#94A3BB",
                  }}
                />
              ) : (
                <MdAccountCircle
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(22),
                    height: sizeRatio(22),
                    color:
                      currSection === text.replace(" ", "")
                        ? "#33414D"
                        : "#94A3BB",
                  }}
                />
              )}
            </ListItemIcon>

            <ListItemText
              primary={
                <div
                  style={{
                    fontSize: sizeRatio(20),
                    fontFamily: "Helvetica",
                    fontWeight: sizeRatio(400),
                  }}
                >
                  {text}
                </div>
              }
              sx={{
                opacity: isExpand ? 1 : 0,
                color:
                  currSection === text.replace(" ", "") ? "#33414D" : "#94A3BB",
              }}
            />
            {/* </ListItemButton> */}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default DrawerComponent;
