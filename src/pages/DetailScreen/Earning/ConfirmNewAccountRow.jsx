import { sizeRatio } from "@/theme";
import { Box, Typography } from "@mui/material";

const ConfirmNewAccountRow = ({ keys, value, value2 }) => {
  const lstToken = {
    BTC: "Bitcoin",
    ETH: "Entherium",
    SLP: "Smooth Love Potion",
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: sizeRatio(30),
      }}
    >
      <Typography
        style={{
          fontWeight: 700,
          fontSize: sizeRatio(20),
        }}
      >
        {keys}
      </Typography>
      <Box
        style={{
          textAlign: "end",
          display: "flex",
        }}
      >
        <Box>
          <Typography
            style={{
              fontWeight: 700,
              width: sizeRatio(110),
              fontSize: sizeRatio(16),
            }}
          >
            {Object.keys(lstToken).includes(value)
              ? `${value} - ${lstToken[value]}`
              : value}
          </Typography>
          {value2 && (
            <Typography
              style={{
                fontWeight: 700,
                width: sizeRatio(110),
                fontSize: sizeRatio(16),
              }}
            >
              {value2}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default ConfirmNewAccountRow;
