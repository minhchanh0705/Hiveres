import { sizeRatio } from "@/theme";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";

const NetworkSelect = () => {
  const [valueTokenNetwork, setValueNetwork] = useState("Ronin");
  const lstNetwork = ["Ronin", "Etherium"];
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
        {lstNetwork.map((network) => (
          <MenuItem key={network} value={network}>
            <Typography>{network}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default NetworkSelect;
