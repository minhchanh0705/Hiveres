import { sizeRatio } from "@/theme";
import { Box, Button } from "@mui/material";

const CancelSubmitRow = ({ setModal, condition }) => {
  return (
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
          backgroundColor: "#E2E8F0",
          outline: "none",
          color: "#64748B",
          marginRight: sizeRatio(16),
          width: sizeRatio(101),
          borderRadius: "8px",
        }}
        onClick={() => setModal(false)}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#061123",
          outline: "none",
          color: "#F8FAFC",
          width: sizeRatio(101),
          borderRadius: "8px",
        }}
        onClick={() => setModal(condition)}
      >
        Submit
      </Button>
    </Box>
  );
};
export default CancelSubmitRow;
