import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { colors, space, text, sizeRatio } from "@/theme";

import MuiDrawer from "@mui/material/Drawer";
import { Button } from "react-bootstrap";
import { FiCreditCard, FiCommand } from "react-icons/fi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoList } from "react-icons/io5";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentSectionAtom, isExpandAtom, usersAtom } from "@/recoil/atoms";
import { useNavigate } from "react-router-dom";
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
  const { Row } = space;
  const { NeutralDay100, NeutralDay600, NeutralDay800 } = colors;
  const { S20W400 } = text;
  let navigate = useNavigate();
  const users = useRecoilValue(usersAtom);
  const currSection = useRecoilValue(currentSectionAtom);
  const [lstDrawer, setLstDrawer] = useState([]);

  useEffect(() => {
    users
      ? setLstDrawer(["Wallet", "Earning", "Job List"])
      : setLstDrawer(["Job List"]);
  }, [users]);

  const handleDrawerOpen = () => {
    setIsExpand(true);
  };

  const handleDrawerClose = () => {
    setIsExpand(false);
  };

  const handleChooseSection = (section) => {
    navigate(`/${section}`);
  };

  const btnSection = (sectionName) => {
    const styleViewIcon = {
      display: "flex",
      alignItems: "center",
      marginRight: sizeRatio(12),
    };
    const styleIcon = { fontSize: sizeRatio(26) };
    return (
      <Button
        style={{
          ...Row,
          color:
            currSection === sectionName.replace(" ", "")
              ? NeutralDay100
              : NeutralDay600,
          backgroundColor:
            currSection === sectionName.replace(" ", "")
              ? NeutralDay800
              : NeutralDay100,
          height: sizeRatio(50),
          borderRadius: 0,
          borderWidth: "0px",
          boxShadow: "none",
          textAlign: "left",
          paddingLeft: sizeRatio(32),
          marginTop: sizeRatio(15),
        }}
        onClick={() => handleChooseSection(sectionName.replace(" ", ""))}
      >
        {sectionName === "Wallet" && (
          <Box style={styleViewIcon}>
            <FiCreditCard style={styleIcon} />
          </Box>
        )}
        {sectionName === "Earning" && (
          <Box style={styleViewIcon}>
            <FiCommand style={styleIcon} />
          </Box>
        )}
        {sectionName === "Job List" && (
          <Box style={styleViewIcon}>
            <IoList style={styleIcon} />
          </Box>
        )}
        {isExpand && (
          <Box style={styleViewIcon}>
            <Typography style={S20W400}>{sectionName}</Typography>
          </Box>
        )}
      </Button>
    );
  };

  return (
    <Drawer
      variant="permanent"
      open={isExpand}
      sx={{
        "& .MuiDrawer-paper": {
          position: "relative",
          marginTop: sizeRatio(1),
          minHeight: "100vh",
          height: "99.8%",
          borderWidth: "0px",
          backgroundColor: "#1E293B",
        },
      }}
    >
      <Button
        style={{
          outline: "none",
          boxShadow: "none",
          backgroundColor: "#1E293B",
          borderWidth: "0px",
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
      {lstDrawer.map((e) => btnSection(e))}
    </Drawer>
  );
};
export default DrawerComponent;
