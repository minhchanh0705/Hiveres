import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { Button } from "react-bootstrap";
import { FiEye, FiCreditCard, FiCommand } from "react-icons/fi";
import { IoList } from "react-icons/io5";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentSectionAtom, currentTabAtom } from "@/recoil/atoms";
import { MdAccountCircle } from "react-icons/md";

const drawerWidth = 240;

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
  width: `calc(${theme.spacing(7)} + 33px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 33px)`,
  },
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
  const [open, setOpen] = useState(false);
  const setCurrentSectionAtom = useSetRecoilState(currentSectionAtom);
  const currTab = useRecoilValue(currentTabAtom);
  const currSection = useRecoilValue(currentSectionAtom);

  useEffect(() => {
    setCurrentSectionAtom(currTab === "Dashboard" ? "Overview" : "Account");
  }, [currTab]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleChooseSection = (section) => {
    setCurrentSectionAtom(section);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          position: "relative",
          marginTop: "3px",
          height: "100vh",
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
          paddingLeft: "33px",
          width: 240,
          marginTop: "15px",
        }}
        onClick={open ? handleDrawerClose : handleDrawerOpen}
      >
        <IoList
          style={{
            borderWidth: "2px",
            width: "22px",
            height: "22px",
            color: "#F8FAFC",
          }}
        />
      </Button>
      <List>
        {currTab === "Dashboard"
          ? ["Overview", "Wallet", "Business"].map((text, index) => (
              <ListItemButton
                key={text}
                sx={{
                  paddingLeft: "33px",
                  minHeight: 48,
                  "&.Mui-selected": {
                    backgroundColor: "#FFFFFF",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "#FFFFFF",
                  },
                }}
                onClick={() => handleChooseSection(text)}
                selected={text === currSection}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    color: "white",
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 ? (
                    <FiEye
                      style={{
                        borderWidth: "2px",
                        width: "22px",
                        height: "22px",
                        color: currSection === text ? "#33414D" : "#94A3BB",
                      }}
                    />
                  ) : index === 1 ? (
                    <FiCreditCard
                      style={{
                        borderWidth: "2px",
                        width: "22px",
                        height: "22px",
                        color: currSection === text ? "#33414D" : "#94A3BB",
                      }}
                    />
                  ) : (
                    <FiCommand
                      style={{
                        borderWidth: "2px",
                        width: "22px",
                        height: "22px",
                        color: currSection === text ? "#33414D" : "#94A3BB",
                      }}
                    />
                  )}
                </ListItemIcon>

                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: currSection === text ? "#33414D" : "#94A3BB",
                  }}
                />
              </ListItemButton>
            ))
          : ["Account"].map((text, index) => (
              <ListItemButton
                key={text}
                sx={{
                  paddingLeft: "33px",
                  minHeight: 48,
                  "&.Mui-selected": {
                    backgroundColor: "#FFFFFF",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "#FFFFFF",
                  },
                }}
                onClick={() => handleChooseSection(text)}
                selected={text === currSection}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    color: "white",
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 && (
                    <MdAccountCircle
                      style={{
                        borderWidth: "2px",
                        width: "22px",
                        height: "22px",
                        color: currSection === text ? "#33414D" : "#94A3BB",
                      }}
                    />
                  )}
                </ListItemIcon>

                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: currSection === text ? "#33414D" : "#94A3BB",
                  }}
                />
              </ListItemButton>
            ))}
      </List>
    </Drawer>
  );
};
export default DrawerComponent;
