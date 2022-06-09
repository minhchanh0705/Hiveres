import { Fragment, useState } from "react";
import { ImCopy } from "react-icons/im";
import { GoPrimitiveDot } from "react-icons/go";
import { HiOutlineSave } from "react-icons/hi";
import { GrTransaction } from "react-icons/gr";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ReactCodeInput from "react-code-input";
import { Doughnut } from "react-chartjs-2";
import InfoConfirmRow from "./InfoConfirmRow";
import CancelSubmitRow from "../SubComponents/CancelSubmitRow";
import {
  Box,
  Typography,
  Paper,
  TableRow,
  TableCell,
  ButtonGroup,
  Button,
  Modal,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { sizeRatio } from "@/theme";
import NetworkSelect from "./NetworkSelect";
const data = {
  labels: ["HVR 0,314", "SLP 0,314", "BTC 0,314", "STEPN 0,314"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 8, 7, 5],
      backgroundColor: ["#0F172A", "#475569", "#CBD5E1", "#94A3BB"],
      borderColor: "#FFFFFF",
      borderWidth: 1,
    },
  ],
};
const lstToken = {
  BTC: "Bitcoin",
  ETH: "Entherium",
  SLP: "Smooth Love Potion",
};
const ItemToken = ({ token }) => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon iconName={token} />
      <Typography
        style={{
          fontWeight: 700,
          fontSize: sizeRatio(16),
        }}
      >
        {token} - {lstToken[token]}
      </Typography>
    </Box>
  );
};

const ImgLogo = ({ name }) => {
  return (
    <img
      style={{
        width: sizeRatio(40),
        height: sizeRatio(40),
        marginRight: sizeRatio(25),
      }}
      src={`../../../public/assets/icon/${name}.png`}
      alt=""
    />
  );
};
const Icon = ({ iconName }) => {
  if (iconName === "HVR") {
    return <ImgLogo name="HVR" />;
  } else if (iconName === "SLP") {
    return <ImgLogo name="SLP" />;
  } else if (iconName === "BTC") {
    return <ImgLogo name="BTC" />;
  } else if (iconName === "STEPN") {
    return <ImgLogo name="STEPN" />;
  } else if (iconName === "ETH") {
    return <ImgLogo name="ETH" />;
  }
};

const ChartBalance = () => {
  const [modalTransaction, setModalTransaction] = useState("");
  const [typeWithdraw, setTypeWithdraw] = useState("Outside");
  const [valueTokenDeposit, setValueTokenDeposit] = useState("BTC");
  const props = {
    inputStyle: {
      width: sizeRatio(40),
      height: sizeRatio(40),
      borderRadius: "8px",
      marginInline: sizeRatio(24),
    },
    inputStyleInvalid: {
      width: sizeRatio(40),
      height: sizeRatio(40),
      borderRadius: "8px",
      marginInline: sizeRatio(24),
    },
  };

  return (
    <Box
      style={{
        flex: 3,
      }}
    >
      <ButtonGroup
        variant="light"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          height: sizeRatio(22),
          marginLeft: sizeRatio(10),
        }}
      >
        <Button
          style={{
            width: sizeRatio(120),
            height: sizeRatio(30),
            marginInline: sizeRatio(12),
            borderRadius: "4px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#475569",
            color: "#475569",
            fontWeight: 700,
            fontSize: sizeRatio(14),
          }}
          onClick={() => setModalTransaction("Deposit")}
        >
          Deposit
        </Button>
        <Modal
          open={modalTransaction === "Deposit"}
          onClose={() => setModalTransaction("")}
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
              Deposit
            </Typography>
            <Typography
              style={{
                marginTop: sizeRatio(15),
                fontWeight: 700,
                fontSize: sizeRatio(16),
              }}
            >
              Asset
            </Typography>
            <FormControl fullWidth style={{ marginTop: sizeRatio(10) }}>
              <Select
                value={valueTokenDeposit}
                onChange={(e) => setValueTokenDeposit(e.target.value)}
                style={{
                  height: sizeRatio(65),
                  borderRadius: "8px",
                }}
                sx={{
                  "& legend": {
                    display: "none",
                  },
                }}
              >
                {Object.keys(lstToken).map((t) => (
                  <MenuItem key={t} value={t}>
                    <ItemToken key={t} token={t} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography
              style={{
                marginTop: sizeRatio(15),
                fontWeight: 700,
                fontSize: sizeRatio(16),
              }}
            >
              Deposit to network
            </Typography>
            <NetworkSelect />
            <Typography
              style={{
                marginTop: sizeRatio(15),
                fontWeight: 700,
                fontSize: sizeRatio(16),
              }}
            >
              Account's Address
            </Typography>
            <Box style={{ marginTop: sizeRatio(10) }}>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBlock: sizeRatio(12),
                  justifyContent: "center",
                  backgroundColor: "#E2E8F0",
                  borderRadius: "8px 8px 0px 0px",
                }}
              >
                <Typography
                  style={{
                    fontSize: sizeRatio(16),
                    color: "#0F172A",
                  }}
                >
                  #00000012123asasadsger
                </Typography>
                <Box
                  sx={{
                    marginLeft: sizeRatio(8),
                  }}
                  onClick={() => {}}
                >
                  <ImCopy
                    style={{
                      width: sizeRatio(16),
                      height: sizeRatio(16),
                      color: "#0F172A",
                    }}
                  ></ImCopy>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBlock: sizeRatio(24),
                  justifyContent: "center",
                  backgroundColor: "#F8FAFC",
                }}
              >
                <img
                  style={{
                    width: sizeRatio(160),
                    height: sizeRatio(160),
                  }}
                  src="../../../public/assets/icon/qr.png"
                  alt=""
                />
              </Box>
            </Box>
            <Box
              style={{
                fontWeight: 700,
                fontSize: sizeRatio(16),
                marginTop: sizeRatio(15),
              }}
            >
              <div>
                <GoPrimitiveDot /> Ensure the network is Ronin
              </div>
              <div>
                <GoPrimitiveDot /> Minimum deposit: 1SLP
              </div>
              <div>
                <GoPrimitiveDot /> Send only SLP to this deposit address.
              </div>
              <div>
                <GoPrimitiveDot /> Make sure that the information is correct
              </div>
            </Box>
          </Box>
        </Modal>
        <Button
          style={{
            width: sizeRatio(120),
            height: sizeRatio(30),
            marginInline: sizeRatio(12),
            borderRadius: "4px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#475569",
            color: "#475569",
            fontWeight: 700,
            fontSize: sizeRatio(14),
          }}
          onClick={() => setModalTransaction("Withdraw")}
        >
          Withdraw
        </Button>
        <Modal
          open={modalTransaction === "Withdraw"}
          onClose={() => setModalTransaction("")}
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
              {typeWithdraw === "Outside" ? "Withdraw" : "Transfer"}
            </Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: sizeRatio(15),
              }}
            >
              <Box style={{ display: "flex" }}>
                <Button
                  style={{
                    display: "flex",
                    flex: 1,
                    backgroundColor:
                      typeWithdraw === "Outside" ? "#CBD5E1" : "#F8FAFC",
                    borderRadius: sizeRatio(8),
                    height: sizeRatio(56),
                    justifyContent: "flex-start",
                    marginRight: sizeRatio(6),
                    paddingLeft: sizeRatio(14),
                  }}
                  onClick={() => {
                    setTypeWithdraw("Outside");
                  }}
                >
                  <HiOutlineSave
                    style={{
                      fontSize: sizeRatio(30),
                    }}
                  />
                  <Box
                    style={{
                      marginLeft: sizeRatio(12),
                      textAlign: "start",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: sizeRatio(16),
                      }}
                    >
                      Wallet
                    </Typography>
                    <Typography style={{ fontSize: sizeRatio(10) }}>
                      Withdraw to address outside Hiveres
                    </Typography>
                  </Box>
                </Button>

                <Button
                  style={{
                    display: "flex",
                    flex: 1,
                    backgroundColor:
                      typeWithdraw === "Hiverian" ? "#CBD5E1" : "#F8FAFC",
                    borderRadius: sizeRatio(8),
                    height: sizeRatio(56),
                    justifyContent: "flex-start",
                    marginLeft: sizeRatio(6),
                    paddingLeft: sizeRatio(14),
                  }}
                  onClick={() => {
                    setTypeWithdraw("Hiverian");
                  }}
                >
                  <GrTransaction
                    style={{
                      fontSize: sizeRatio(30),
                    }}
                  />
                  <Box
                    style={{
                      marginLeft: sizeRatio(12),
                      textAlign: "start",
                    }}
                  >
                    <Typography style={{ fontSize: sizeRatio(16) }}>
                      Hiverian
                    </Typography>
                    <Typography style={{ fontSize: sizeRatio(10) }}>
                      Send to Hiveres user
                    </Typography>
                  </Box>
                </Button>
              </Box>

              <Box>
                <Typography
                  style={{
                    marginTop: sizeRatio(15),
                    fontWeight: 700,
                    fontSize: sizeRatio(16),
                  }}
                >
                  Asset
                </Typography>
                <FormControl fullWidth style={{ marginTop: sizeRatio(10) }}>
                  <Select
                    value={valueTokenDeposit}
                    onChange={(e) => setValueTokenDeposit(e.target.value)}
                    style={{
                      height: sizeRatio(65),
                      borderRadius: "8px",
                    }}
                    sx={{
                      "& legend": {
                        display: "none",
                      },
                    }}
                  >
                    {Object.keys(lstToken).map((t) => (
                      <MenuItem key={t} value={t}>
                        <ItemToken key={t} token={t} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                    Recipient Email
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
                    flexDirection: "column",
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: sizeRatio(15),
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      Amount
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                        color: "#047857",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      Usable 0.314
                    </Typography>
                  </Box>

                  <Box
                    style={{
                      position: "relative",
                      marginTop: sizeRatio(10),
                    }}
                  >
                    <input
                      type="text"
                      name="recipientEmail"
                      style={{
                        height: sizeRatio(48),
                        width: "100%",
                        paddingRight: "60px",
                        borderRadius: "8px",
                        borderWidth: "1px",
                        borderColor: "#64748B",
                        borderStyle: "solid",
                        // marginTop: sizeRatio(10),
                      }}
                    />
                    <Button
                      style={{
                        position: "absolute",
                        right: sizeRatio(13),
                        width: sizeRatio(64),
                        height: sizeRatio(24),
                        top: sizeRatio(12),
                        backgroundColor: "#E2E8F0",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: 700,
                          fontSize: sizeRatio(12),
                          color: "#64748B",
                        }}
                      >
                        MAX
                      </Typography>
                    </Button>
                  </Box>
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
              <CancelSubmitRow
                setModal={setModalTransaction}
                condition={"VerificationCode"}
              />
            </Box>
          </Box>
        </Modal>
        <Modal
          open={modalTransaction === "VerificationCode"}
          onClose={() => setModalTransaction("")}
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
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IoArrowBackCircleOutline
                style={{
                  fontSize: sizeRatio(30),
                }}
                onClick={() => setModalTransaction("Withdraw")}
              />
              <Typography
                style={{
                  fontWeight: 700,
                  fontSize: sizeRatio(24),
                }}
              >
                {typeWithdraw === "Outside" ? "Withdraw" : "Transfer"}
              </Typography>
              <Box
                style={{
                  width: sizeRatio(30),
                  height: sizeRatio(30),
                }}
              />
            </Box>
            <Typography
              style={{
                fontWeight: 700,
                fontSize: sizeRatio(20),
                marginTop: sizeRatio(30),
              }}
            >
              Enter verification code
            </Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: sizeRatio(30),
              }}
            >
              <ReactCodeInput type="text" fields={6} {...props} />
            </Box>

            <Button
              variant="text"
              style={{
                fontWeight: 700,
                fontSize: sizeRatio(12),
                marginTop: sizeRatio(30),
                color: "#0F172A",
              }}
            >
              Resend
            </Button>
            <CancelSubmitRow
              setModal={setModalTransaction}
              condition={"confirmTransaction"}
            />
          </Box>
        </Modal>
        <Modal
          open={modalTransaction === "confirmTransaction"}
          onClose={() => setModalTransaction("")}
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
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IoArrowBackCircleOutline
                style={{
                  fontSize: sizeRatio(30),
                }}
                onClick={() => setModalTransaction("VerificationCode")}
              />
              <Typography
                style={{
                  fontWeight: 700,
                  fontSize: sizeRatio(24),
                }}
              >
                {typeWithdraw === "Outside" ? "Withdraw" : "Transfer"}{" "}
                information
              </Typography>
              <Box
                style={{
                  width: sizeRatio(30),
                  height: sizeRatio(30),
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: sizeRatio(15),
              }}
            >
              <InfoConfirmRow keys="ID" value="#0000123456" />
              <InfoConfirmRow keys="Asset" value="BTC" />
              <InfoConfirmRow keys="Recipient:" value="#0000123456" />
              <InfoConfirmRow keys="Transfer network:" value="Hiveres Chain" />
              <InfoConfirmRow keys="Amount:" value="0,314 BTC" />
              <InfoConfirmRow keys="Transaction fee:" value="0,001 BTC" />
              <InfoConfirmRow
                keys="Date & Time"
                value="10:00 am"
                value2="April 28, 2022"
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#061123",
                  marginTop: sizeRatio(30),
                  color: "#F8FAFC",
                  borderRadius: "8px",
                }}
                onClick={() => setModalTransaction(false)}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Modal>
      </ButtonGroup>

      <Paper
        sx={{
          height: sizeRatio(600),
          borderRadius: sizeRatio(16),
          backgroundColor: "#FFFFFF",
          marginTop: sizeRatio(20),
          marginLeft: sizeRatio(10),
          paddingTop: sizeRatio(40),
        }}
      >
        <Doughnut
          style={{
            paddingInline: sizeRatio(30),
            paddingBlock: sizeRatio(30),
          }}
          data={data}
          plugins={[
            {
              beforeDraw: (chart) => {
                var width = chart.width,
                  height = chart.height,
                  ctx = chart.ctx;
                ctx.restore();
                // apply thesame options we passed
                ctx.font = `400 ${sizeRatio(16)} Helvetica`;
                var text = "Total Amount",
                  textX = Math.round((width - ctx.measureText(text).width) / 2),
                  textX1 = Math.round(
                    (width - ctx.measureText("6270").width) / 2
                  ),
                  textY = height / 2;
                ctx.fillText(text, textX, textY - 10);
                ctx.fillText("6270", textX1, textY + 10);
                ctx.save();
              },
            },
          ]}
          options={{
            plugins: {
              title: {
                display: true,
                text: "#wallet code",
                align: "start",
                color: "#0F172A",
                font: {
                  family: "Helvetica",
                  weight: 700,
                  size: sizeRatio(16),
                },
              },
              legend: {
                position: "bottom",
              },
            },
          }}
        />
      </Paper>
    </Box>
  );
};
export default ChartBalance;
