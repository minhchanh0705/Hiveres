import { Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { sizeRatio } from "@/theme";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import NavBar from "@/components/NavBar";
import DrawerComponent from "@/components/DrawerComponent";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentSectionAtom, isExpandAtom } from "@/recoil/atoms";
import SummaryEarning from "./SummaryEarning";
import ChartEarning from "./ChartEarning";
import AccountListEarning from "./AccountListEarning";
const Earning = () => {
  Chart.register(...registerables);
  const isExpand = useRecoilValue(isExpandAtom);
  const [tabEarning, setTabEarning] = useState("invest");
  const setCurrentSectionAtom = useSetRecoilState(currentSectionAtom);
  useEffect(() => {
    setCurrentSectionAtom("Earning");
  });

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
              fontWeight: 700,
              fontSize: sizeRatio(20),
            }}
          >
            Earning
          </Box>
          <ButtonGroup variant="light">
            <Button
              style={{
                width: sizeRatio(198),
                height: sizeRatio(34),
                marginInline: sizeRatio(12),
                borderRadius: "8px",
                backgroundColor:
                  tabEarning === "invest" ? "#061123" : "#E2E8F0",
                color: tabEarning === "invest" ? "#F8FAFC" : "#94A3BB",
              }}
              onClick={() => setTabEarning("invest")}
            >
              <Typography
                style={{
                  fontSize: sizeRatio(16),
                  fontWeight: 700,
                }}
              >
                Invest
              </Typography>
            </Button>
            <Button
              style={{
                width: sizeRatio(198),
                height: sizeRatio(34),
                marginInline: sizeRatio(12),
                borderRadius: "8px",
                backgroundColor: tabEarning === "jobs" ? "#061123" : "#E2E8F0",
                color: tabEarning === "jobs" ? "#F8FAFC" : "#94A3BB",
              }}
              onClick={() => setTabEarning("jobs")}
            >
              <Typography
                style={{
                  fontSize: sizeRatio(16),
                  fontWeight: 700,
                }}
              >
                Jobs
              </Typography>
            </Button>
          </ButtonGroup>
          <SummaryEarning tabEarning={tabEarning} />
          <ChartEarning tabEarning={tabEarning} />
          <AccountListEarning tabEarning={tabEarning} />
        </Box>
      </Box>
    </Box>
  );
};
export default Earning;
