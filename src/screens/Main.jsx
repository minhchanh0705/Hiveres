import * as React from "react";
import NavBar from "@/components/NavBar";
import DetailScreen from "./DetailScreen";
import Drawer from "@/components/Drawer";
import { Box } from "@mui/material";
const Main = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Drawer />
        <DetailScreen />
      </Box>
    </>
  );
};
export default Main;
