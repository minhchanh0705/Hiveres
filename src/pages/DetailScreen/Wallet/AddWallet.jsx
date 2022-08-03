import { colors, sizeRatio, space, styleModal676, text } from "@/theme";

import { Modal, Box, Button, Typography, Checkbox } from "@mui/material";
import CancelSubmitRow from "../SubComponents/CancelSubmitRow";
import NetworkSelect from "./NetworkSelect";

const AddWallet = ({ showModalAddNetwork, setShowModalAddNetwork }) => {
  const { NeutralDay000 } = colors;
  const { S20W400, S16W700, S24W700, S12W700 } = text;
  const { FlexCol, Row } = space;
  const styles = {
    inputStyle: {
      ...S20W400,
      borderRadius: sizeRatio(8),
      height: sizeRatio(48),
      borderWidth: "1px",
      fontSize: sizeRatio(20),
      marginTop: sizeRatio(16),
      paddingLeft: sizeRatio(12),
      color: NeutralDay000,
    },
  };
  return (
    <Modal
      open={showModalAddNetwork}
      onClose={() => setShowModalAddNetwork(false)}
    >
      <Box sx={styleModal676}>
        <Typography style={{ ...S24W700, textAlign: "center" }}>
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
                ...S16W700,
                marginTop: sizeRatio(15),
              }}
            >
              Network
            </Typography>
            <NetworkSelect />
            <Box style={FlexCol}>
              <Typography
                style={{
                  ...S16W700,
                  marginTop: sizeRatio(15),
                }}
              >
                Address
              </Typography>
              <input
                type="text"
                name="recipientEmail"
                style={styles.inputStyle}
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
              <Typography style={S16W700}>0.000 BTC</Typography>
            </Box>

            <Box
              style={{
                ...Row,
                justifyContent: "flex-start",
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
                  ...S16W700,
                  marginLeft: sizeRatio(8),
                  marginRight: sizeRatio(5),
                  color: NeutralDay000,
                }}
              >
                I agree with
              </Typography>
              <Button
                variant="text"
                style={{
                  ...S16W700,
                  padding: 0,
                  textDecoration: "underline",
                  color: NeutralDay000,
                }}
                onClick={() => {}}
              >
                Terms of Use
              </Button>
            </Box>
            <Typography
              style={{
                ...S12W700,
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
