import { Paper, Typography, Button, Checkbox, Modal } from "@mui/material";
import { colors, sizeRatio, space, styleModal700, text } from "@/theme";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { BiErrorAlt } from "react-icons/bi";
import { useState } from "react";
import { FiAward, FiCheckSquare, FiXCircle } from "react-icons/fi";

const RedealComponent = ({ setIsHaveRedealNoti }) => {
  const { state } = useLocation();
  const [percentage, setPercentage] = useState(0);
  const [dailyRequires, setDailyRequires] = useState(0);
  const [axsReward, setAxsReward] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const {
    ErrorRed900,
    ErrorRed600,
    PrimaryBlue900,
    NeutralDay000,
    NeutralDay400,
    NeutralDay900,
  } = colors;
  const { S16W700, S24W700, S18W400, S16W400 } = text;
  const { RowCenter, Row, FlexColCenter, FlexCol, RowSpaceBetween } = space;

  const styles = {
    inputStyle: {
      height: sizeRatio(32),
      width: sizeRatio(44),
      textAlign: "center",
      color: NeutralDay400,
      border: `1px solid ${NeutralDay400}`,
      borderRadius: "8px",
      fontSize: sizeRatio(16),
    },
    txtButton: {
      ...S18W400,
      color: NeutralDay900,
    },
    iconStyle: {
      marginLeft: sizeRatio(25),
      marginRight: sizeRatio(13),
      color: NeutralDay900,
      fontSize: sizeRatio(20),
    },
    btnView: {
      outline: "none",
      marginBottom: sizeRatio(24),
      width: sizeRatio(160),
      height: sizeRatio(40),
      borderRadius: "8px",
      justifyContent: "flex-start",
    },
    linkStyle: {
      ...S16W700,
      color: "#0B3E8E",
      outline: "none",
      textDecoration: "underline",
    },
  };
  return (
    <Paper
      style={{
        marginTop: sizeRatio(40),
        padding: sizeRatio(35),
        borderRadius: "24px",
      }}
    >
      <BiErrorAlt style={{ color: ErrorRed900, fontSize: sizeRatio(30) }} />
      <Box style={RowCenter}>
        <Typography style={{ ...S16W700, color: NeutralDay000 }}>
          10:00 am April 28, 2022
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
        }}
      >
        <Box
          style={{
            flex: 5,
          }}
        >
          <Typography style={S24W700}>Profit Plan</Typography>
          <Box
            style={{
              ...Row,
              width: sizeRatio(330),
              justifyContent: "space-between",
              marginTop: sizeRatio(24),
            }}
          >
            <Typography style={{ ...S16W700, color: NeutralDay400 }}>
              Percentage (%)
            </Typography>
            <input
              type="text"
              name="percentage"
              value={percentage}
              autoComplete="off"
              style={styles.inputStyle}
              onChange={(e) => setPercentage(e.target.value)}
            />
          </Box>
          <Box
            style={{
              ...Row,
              width: sizeRatio(330),
              justifyContent: "space-between",
              marginTop: sizeRatio(24),
            }}
          >
            <Typography style={{ ...S16W700, color: NeutralDay400 }}>
              Daily requires (SLP)
            </Typography>
            <input
              type="text"
              name="dailyRequires"
              value={dailyRequires}
              autoComplete="off"
              style={styles.inputStyle}
              onChange={(e) => setDailyRequires(e.target.value)}
            />
          </Box>
          <Box
            style={{
              width: "100%",
              textAlign: "end",
              marginTop: sizeRatio(24),
            }}
          >
            <Button style={styles.linkStyle}>
              {"Learn more about profit plan >"}
            </Button>
            <Box
              style={{
                ...RowSpaceBetween,
                width: sizeRatio(330),
                marginTop: sizeRatio(24),
              }}
            >
              <Box style={Row}>
                <Checkbox
                  disabled
                  sx={{
                    padding: 0,
                    color: NeutralDay400,
                  }}
                />

                <Typography
                  style={{
                    ...S16W700,
                    color: NeutralDay400,
                  }}
                >
                  AXS Reward (%)
                </Typography>
                <FiAward
                  style={{
                    ...S16W700,
                    color: NeutralDay400,
                  }}
                />
              </Box>

              <input
                type="text"
                name="axsReward"
                value={axsReward}
                autoComplete="off"
                style={styles.inputStyle}
                onChange={(e) => setAxsReward(e.target.value)}
              />
            </Box>
            <Typography
              style={{
                ...S16W400,
                color: ErrorRed900,
                marginTop: sizeRatio(24),
              }}
            >
              We are not responsible for this agreement, but we reserve the
              right to impose penalties for violations.
            </Typography>
            <Button style={styles.linkStyle}>
              {"Learn more about AXS reward >"}
            </Button>
          </Box>
        </Box>

        <Box style={{ ...FlexColCenter, flex: 2 }}>
          <Button
            style={{ ...styles.btnView, backgroundColor: PrimaryBlue900 }}
            onClick={() => {
              setIsHaveRedealNoti(false);
            }}
          >
            <FiCheckSquare style={styles.iconStyle} />
            <Typography style={styles.txtButton}>Agree</Typography>
          </Button>
          <Button
            style={{ ...styles.btnView, backgroundColor: ErrorRed600 }}
            onClick={() => {
              // setIsHaveRedealNoti(false);
              setOpenModal(true);
            }}
          >
            <FiXCircle style={styles.iconStyle} />
            <Typography style={styles.txtButton}>Disagree</Typography>
          </Button>
        </Box>
      </Box>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={styleModal700}>
          <Box style={RowSpaceBetween}>
            <Typography style={S24W700}>Are you sure?</Typography>
          </Box>
          <Box style={{ ...FlexCol, marginTop: sizeRatio(15) }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: PrimaryBlue900,
                marginTop: sizeRatio(30),
                color: NeutralDay900,
                borderRadius: "8px",
              }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
};
export default RedealComponent;
