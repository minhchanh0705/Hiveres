import { sizeRatio, text, colors } from "@/theme";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";

const NetworkSelect = () => {
  const [valueTokenNetwork, setValueNetwork] = useState("chooseNetwork");
  const lstNetwork = ["Ronin", "Etherium"];
  const { NeutralDay000, NeutralDay500 } = colors;
  const { SecondaryHeading5 } = text;
  return (
    <FormControl fullWidth style={{ marginTop: sizeRatio(10) }}>
      <Select
        value={valueTokenNetwork}
        onChange={(e) => setValueNetwork(e.target.value)}
        style={{
          height: sizeRatio(48),
          borderRadius: "8px",
        }}
        sx={{
          "& legend": {
            display: "none",
          },
        }}
      >
        <MenuItem key={"chooseNetwork"} value={"chooseNetwork"} disabled>
          <Typography
            style={{
              ...SecondaryHeading5,
              color: NeutralDay500,
            }}
          >
            Choose Network
          </Typography>
        </MenuItem>
        {lstNetwork.map((network) => (
          <MenuItem key={network} value={network}>
            <Typography
              style={{
                ...SecondaryHeading5,
                color: NeutralDay000,
              }}
            >
              {network}
            </Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default NetworkSelect;
