import { sizeRatio } from "@/theme";

import { Box, Typography, Button } from "@mui/material";

const AddAccountStep1EnterInfo = ({ setShowAddAccountModal, setStep }) => {
  const labelStyle = {
    marginTop: sizeRatio(15),
    fontWeight: 700,
    fontSize: sizeRatio(16),
  };
  const inputStyle = {
    height: sizeRatio(48),
    marginTop: sizeRatio(10),
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#64748B",
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
          <input type="text" name="password" style={inputStyle} />
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
            sx={{
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
            sx={{
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
