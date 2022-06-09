import { isExpandAtom } from "@/recoil/atoms";
import { sizeRatio } from "@/theme";
import { Box, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useRecoilValue } from "recoil";

const ChartEarning = ({ tabEarning }) => {
  const isExpand = useRecoilValue(isExpandAtom);
  const [period, setPeriod] = useState("monthly");
  const profitBarChart = (period) =>
    Array.from(
      {
        length:
          period === "monthly"
            ? 31
            : period === "7days"
            ? 7
            : period === "yearly" && 12,
      },
      (_, i) => {
        const randomNumber = Math.floor(Math.random() * 100);
        // total[i] = randomNumber;
        return randomNumber;
      }
    );
  const payoutBarChart = (period) =>
    Array.from(
      {
        length:
          period === "monthly"
            ? 31
            : period === "7days"
            ? 7
            : period === "yearly" && 12,
      },
      (_, i) => {
        const randomNumber = Math.floor(Math.random() * 100);
        // total[i] += randomNumber;
        return randomNumber;
      }
    );
  return (
    <Box
      style={{
        width: sizeRatio(isExpand ? 1080 : 1212),
        height: sizeRatio(510),
        display: "flex",
        backgroundColor: "#FFFFFF",
        borderRadius: sizeRatio(12),
        paddingBlock: sizeRatio(15),
        paddingInline: sizeRatio(25),
        marginTop: sizeRatio(24),
      }}
    >
      <Bar
        options={{
          indexAxis: "x",
          elements: {
            bar: {
              borderWidth: 0.1,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text:
                tabEarning === "invest"
                  ? "Monthly Revenue"
                  : "Revenue overview",

              align: "start",
              color: "#0F172A",
              font: {
                family: "Helvetica",
                weight: 700,
                size: sizeRatio(20),
              },
            },
          },
        }}
        data={{
          labels: [
            ...Array(
              period === "monthly"
                ? 31
                : period === "7days"
                ? 7
                : period === "yearly" && 12
            ).keys(),
          ].map((e) => e + 1),
          datasets: [
            {
              label: "Profit",
              data: profitBarChart(period),
              backgroundColor: "#475569",
            },
            {
              label: "Payout",
              data: payoutBarChart(period),
              backgroundColor: "#94A3BB",
              borderRadius: 8,
            },
          ],
        }}
      />
      <ButtonGroup
        variant="light"
        style={{
          height: sizeRatio(22),
          position: "relative",
          top: "40px",
          right: sizeRatio(340),
        }}
      >
        <Button
          style={{
            width: sizeRatio(105),
            borderRadius: "8px",
            backgroundColor: period === "7days" ? "#061123" : "#E2E8F0",
            color: "#94A3BB",
            fontWeight: 400,
            fontSize: sizeRatio(12),
          }}
          onClick={() => setPeriod("7days")}
        >
          Last 7 days
        </Button>
        <Button
          style={{
            width: sizeRatio(105),
            marginInline: sizeRatio(12),
            borderRadius: "8px",
            backgroundColor: period === "monthly" ? "#061123" : "#E2E8F0",
            color: "#94A3BB",
            fontWeight: 400,
            fontSize: sizeRatio(12),
          }}
          onClick={() => setPeriod("monthly")}
        >
          Monthly
        </Button>
        <Button
          style={{
            width: sizeRatio(105),
            borderRadius: "8px",
            backgroundColor: period === "yearly" ? "#061123" : "#E2E8F0",
            color: "#94A3BB",
            fontWeight: 400,
            fontSize: sizeRatio(12),
          }}
          onClick={() => setPeriod("yearly")}
        >
          Yearly
        </Button>
      </ButtonGroup>
    </Box>
  );
};
export default ChartEarning;
