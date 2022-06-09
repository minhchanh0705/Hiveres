import { isExpandAtom } from "@/recoil/atoms";
import { sizeRatio } from "@/theme";
import { Box, Typography } from "@mui/material";
import { BsCashCoin, BsPersonCheck } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";

const SummaryEarning = ({ tabEarning }) => {
  const isExpand = useRecoilValue(isExpandAtom);

  return (
    <Box
      style={{
        width: sizeRatio(isExpand ? 1080 : 1212),
        display: "flex",
        backgroundColor: "#FFFFFF",
        borderRadius: sizeRatio(12),
        justifyContent: "space-between",
        paddingBlock: sizeRatio(15),
        paddingInline: sizeRatio(24),
        marginBlock: sizeRatio(24),
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BsPersonCheck
          style={{
            color: "#0F172A",
            fontSize: sizeRatio(27),
            marginRight: sizeRatio(25),
          }}
        />
        <Box>
          <Typography
            style={{
              fontWeight: 700,
              fontSize: sizeRatio(20),
            }}
          >
            {tabEarning === "invest" ? "Active Accounts" : "Total Accounts"}
          </Typography>
          <Typography
            style={{
              fontSize: sizeRatio(16),
            }}
          >
            12/20
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IoSchoolOutline
          style={{
            color: "#0F172A",
            fontSize: sizeRatio(27),
            marginRight: sizeRatio(25),
          }}
        />
        <Box>
          <Typography
            style={{
              fontWeight: 700,
              fontSize: sizeRatio(20),
            }}
          >
            Yesterday Revenue
          </Typography>
          <Typography
            style={{
              fontSize: sizeRatio(16),
            }}
          >
            48
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: sizeRatio(27),
            marginRight: sizeRatio(25),
          }}
          src="../../../public/assets/icon/SLP.png"
          alt=""
        />

        <Box>
          <Typography
            style={{
              fontWeight: 700,
              fontSize: sizeRatio(20),
            }}
          >
            {tabEarning === "invest" ? "Total Payout" : "Total Profit"}
          </Typography>
          <Typography
            style={{
              fontSize: sizeRatio(16),
            }}
          >
            314
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BsCashCoin
          style={{
            color: "#0F172A",
            fontSize: sizeRatio(27),
            marginRight: sizeRatio(25),
          }}
        />
        <Box>
          <Typography
            style={{
              fontWeight: 700,
              fontSize: sizeRatio(20),
            }}
          >
            Total Revenue
          </Typography>
          <Typography
            style={{
              fontSize: sizeRatio(16),
            }}
          >
            314,567
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default SummaryEarning;
