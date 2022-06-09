import { sizeRatio } from "@/theme";

import { Modal, Box, Button, Typography, Checkbox } from "@mui/material";
import CancelSubmitRow from "../SubComponents/CancelSubmitRow";

const AddAccount = ({ showFilterModal, setShowFilterModal }) => {
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
    <Modal open={showFilterModal} onClose={() => setShowFilterModal(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: sizeRatio(676),
          bgcolor: "#FFF",
          paddingBlock: sizeRatio(35),
          paddingInline: sizeRatio(70),
          borderRadius: "12px",
        }}
      >
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
          <CancelSubmitRow setModal={setShowFilterModal} />
        </Box>
      </Box>
    </Modal>
  );
};
export default AddAccount;
