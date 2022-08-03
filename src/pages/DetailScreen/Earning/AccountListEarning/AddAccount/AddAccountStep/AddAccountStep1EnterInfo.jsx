import { colors, sizeRatio } from "@/theme";

import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AddAccountStep1EnterInfo = ({ setShowAddAccountModal, setStep }) => {
  const { NeutralDay000, NeutralDay400, NeutralDay900 } = colors;
  const [pwdShown, setPwdShown] = useState(false);

  const labelStyle = {
    marginTop: sizeRatio(15),
    fontWeight: 700,
    fontSize: sizeRatio(16),
  };
  const inputStyle = {
    height: sizeRatio(48),
    marginTop: sizeRatio(4),
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    paddingLeft: sizeRatio(18),
    borderColor: NeutralDay400,
  };

  return (
    <Box>
      <Typography
        style={{
          fontWeight: 700,
          fontSize: sizeRatio(24),
          textAlign: "center",
        }}
      >
        Add New Account
      </Typography>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: sizeRatio(15),
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography style={labelStyle}>Name</Typography>
          <input type="text" name=" name" style={inputStyle} />
          <Typography style={labelStyle}>Ronin Address</Typography>
          <input type="text" name="roninAddress" style={inputStyle} />
          <Typography style={labelStyle}>Email</Typography>
          <input type="text" name="email" style={inputStyle} />
          <Typography style={labelStyle}>Password</Typography>
          <Box
            style={{
              position: "relative",
            }}
          >
            <input
              type={pwdShown ? "text" : "password"}
              name="password"
              style={{ ...inputStyle, width: "100%" }}
            />
            <Button
              style={{
                position: "absolute",
                outline: "none",
                right: sizeRatio(18),
                height: sizeRatio(24),
                top: sizeRatio(16),
                minWidth: 0,
                padding: sizeRatio(8),
                margin: 0,
                color: NeutralDay000,
              }}
              onClick={() => setPwdShown(!pwdShown)}
            >
              {pwdShown ? <FiEyeOff /> : <FiEye />}
            </Button>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: sizeRatio(10),
          }}
        >
          <Button
            variant="contained"
            style={{
              outline: "none",
              backgroundColor: "#E2E8F0",
              color: "#64748B",
              marginRight: sizeRatio(16),
              width: sizeRatio(101),
              borderRadius: "8px",
            }}
            onClick={() => setShowAddAccountModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{
              outline: "none",
              backgroundColor: "#061123",
              color: "#F8FAFC",
              width: sizeRatio(101),
              borderRadius: "8px",
            }}
            onClick={() => setStep(2)}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default AddAccountStep1EnterInfo;
