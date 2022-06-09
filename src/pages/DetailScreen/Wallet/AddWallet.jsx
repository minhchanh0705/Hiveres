import { sizeRatio } from "@/theme";

import { Modal, Box, Button, Typography, Checkbox } from "@mui/material";
import CancelSubmitRow from "../SubComponents/CancelSubmitRow";
import NetworkSelect from "./NetworkSelect";

const AddWallet = ({ showModalAddNetwork, setShowModalAddNetwork }) => {
  return (
    <Modal
      open={showModalAddNetwork}
      onClose={() => setShowModalAddNetwork(false)}
    >
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
          Add Network
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: sizeRatio(15),
          }}
        >
          <Box>
            <Typography
              style={{
                marginTop: sizeRatio(15),
                fontWeight: 700,
                fontSize: sizeRatio(16),
              }}
            >
              Network
            </Typography>
            <NetworkSelect />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                style={{
                  marginTop: sizeRatio(15),
                  fontWeight: 700,
                  fontSize: sizeRatio(16),
                }}
              >
                Address
              </Typography>
              <input
                type="text"
                name="recipientEmail"
                style={{
                  height: sizeRatio(48),
                  marginTop: sizeRatio(10),
                  borderRadius: "8px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#64748B",
                }}
              />
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: sizeRatio(15),
              }}
            >
              <Typography
                style={{
                  fontSize: sizeRatio(16),
                  marginRight: sizeRatio(5),
                }}
              >
                Transaction fee:
              </Typography>
              <Typography
                style={{
                  fontSize: sizeRatio(16),
                  fontWeight: 700,
                }}
              >
                0.000 BTC
              </Typography>
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: sizeRatio(10),
              }}
            >
              <Checkbox
                sx={{
                  padding: 0,
                }}
              />

              <Typography
                style={{
                  fontSize: sizeRatio(16),
                  fontWeight: 700,
                  marginLeft: sizeRatio(8),
                  marginRight: sizeRatio(5),
                  color: "#0F172A",
                }}
              >
                I agree with
              </Typography>
              <Button
                variant="text"
                style={{
                  padding: 0,
                  fontSize: sizeRatio(16),
                  fontWeight: 700,
                  textDecoration: "underline",
                  color: "#0F172A",
                }}
                onClick={() => {}}
              >
                Terms of Use
              </Button>
            </Box>
            <Typography
              style={{
                fontSize: sizeRatio(12),
                fontWeight: 700,
                marginRight: sizeRatio(5),
                marginTop: sizeRatio(5),
              }}
            >
              Make sure that the information is correct
            </Typography>
          </Box>
          <CancelSubmitRow setModal={setShowModalAddNetwork} />
        </Box>
      </Box>
    </Modal>
  );
};
export default AddWallet;
