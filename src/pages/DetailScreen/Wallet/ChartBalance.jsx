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
  ButtonGroup,
  Button,
  Modal,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { colors, sizeRatio, space, styleModal700, text } from "@/theme";
import NetworkSelect from "./NetworkSelect";

const ChartBalance = ({ lstWallet }) => {
  const [modalTransaction, setModalTransaction] = useState("");
  const [typeWithdraw, setTypeWithdraw] = useState("Outside");
  const [typeToken, setTypeToken] = useState("BTC");
  const [idWallet, setIdWallet] = useState("chooseWallet");
  const {
    NeutralDay000,
    NeutralDay300,
    NeutralDay400,
    NeutralDay500,
    NeutralDay600,
    NeutralDay700,
    NeutralDay900,
    PrimaryBlue900,
  } = colors;
  const { S16W400, S16W700, S24W700, S12W700, S20W700, S10W400, S14W400 } =
    text;
  const { FlexCol, RowFlexEnd, RowFlexStart, Row, RowCenter, RowSpaceBetween } =
    space;

  const data = {
    labels: ["HVR 0,314", "SLP 0,314", "BTC 0,314", "STEPN 0,314"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 8, 7, 5],
        backgroundColor: [
          NeutralDay000,
          NeutralDay300,
          NeutralDay600,
          NeutralDay500,
        ],
        borderColor: "#FFFFFF",
        borderWidth: 1,
      },
    ],
  };
  const lstToken = [
    {
      name: "BTC",
      detail: "Bitcoin",
    },
    {
      name: "ETH",
      detail: "Entherium",
    },
    {
      name: "SLP",
      detail: "Smooth Love Potion",
    },
  ];
  const ItemToken = ({ name, detail }) => {
    return (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Icon iconName={name} />
        <Typography
          style={{
            fontSize: sizeRatio(14),
          }}
        >
          {name} - {detail}
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
        src={`/assets/icon/${name}.png`}
        alt=""
      />
    );
  };
  const Icon = ({ iconName }) => {
    return <ImgLogo name={iconName} />;
  };

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

  const styles = {
    inputStyle: {
      height: sizeRatio(48),
      width: "100%",
      borderRadius: "8px",
      borderWidth: "1px",
      borderColor: "#64748B",
      borderStyle: "solid",
      paddingLeft: sizeRatio(10),
      paddingRight: sizeRatio(100),
    },
    btnStyle: {
      ...S14W400,
      outline: "none",
      width: sizeRatio(120),
      height: sizeRatio(30),
      marginInline: sizeRatio(12),
      borderRadius: "4px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: NeutralDay300,
      color: NeutralDay300,
    },
    btnWithdraw: {
      display: "flex",
      flex: 1,
      borderRadius: sizeRatio(8),
      height: sizeRatio(56),
      justifyContent: "flex-start",
      paddingLeft: sizeRatio(14),
      outline: "none",
      boxShadow: "none",
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
          style={styles.btnStyle}
          onClick={() => setModalTransaction("Deposit")}
        >
          Deposit
        </Button>
        <Modal
          open={modalTransaction === "Deposit"}
          onClose={() => setModalTransaction("")}
        >
          <Box sx={styleModal700}>
            <Typography style={{ ...S24W700, textAlign: "center" }}>
              Deposit
            </Typography>
            <Typography
              style={{
                ...S16W700,
                S16W400,
              }}
            >
              Asset
            </Typography>
            <FormControl fullWidth style={{ marginTop: sizeRatio(10) }}>
              <Select
                value={typeToken}
                onChange={(e) => setTypeToken(e.target.value)}
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
                {lstToken.map((t) => (
                  <MenuItem key={t.name} value={t.name}>
                    <ItemToken key={t.name} detail={t.detail} name={t.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography
              style={{
                ...S16W700,
                marginTop: sizeRatio(15),
              }}
            >
              Deposit to network
            </Typography>
            <NetworkSelect />
            <Typography
              style={{
                ...S16W700,
                marginTop: sizeRatio(15),
              }}
            >
              Account's Address
            </Typography>
            <Box style={{ marginTop: sizeRatio(10) }}>
              <Box
                style={{
                  ...RowCenter,
                  paddingBlock: sizeRatio(12),
                  backgroundColor: NeutralDay700,
                  borderRadius: "8px 8px 0px 0px",
                }}
              >
                <Typography style={{ ...S16W400, color: NeutralDay000 }}>
                  #00000012123asasadsger
                </Typography>
                <Box
                  style={{
                    marginLeft: sizeRatio(8),
                  }}
                  onClick={() => {}}
                >
                  <ImCopy
                    style={{
                      width: sizeRatio(16),
                      height: sizeRatio(16),
                      color: NeutralDay000,
                    }}
                  ></ImCopy>
                </Box>
              </Box>
              <Box
                style={{
                  ...RowCenter,
                  paddingBlock: sizeRatio(24),
                  backgroundColor: NeutralDay900,
                }}
              >
                <img
                  style={{
                    width: sizeRatio(160),
                    height: sizeRatio(160),
                  }}
                  src="/assets/icon/qr.png"
                  alt=""
                />
              </Box>
            </Box>

            <Box
              style={{
                ...S16W700,
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
          style={styles.btnStyle}
          onClick={() => setModalTransaction("Withdraw")}
        >
          Withdraw
        </Button>
        <Modal
          open={modalTransaction === "Withdraw"}
          onClose={() => setModalTransaction("")}
        >
          <Box sx={styleModal700}>
            <Typography style={{ ...S24W700, textAlign: "center" }}>
              {typeWithdraw === "Outside" ? "Withdraw" : "Transfer"}
            </Typography>
            <Box style={{ ...FlexCol, marginTop: sizeRatio(15) }}>
              <Box style={{ display: "flex" }}>
                <Button
                  style={{
                    ...styles.btnWithdraw,
                    marginRight: sizeRatio(6),
                    backgroundColor:
                      typeWithdraw === "Outside"
                        ? NeutralDay600
                        : NeutralDay900,
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
                    <Typography style={S16W400}>Wallet</Typography>
                    <Typography style={S10W400}>
                      Withdraw to address outside Hiveres
                    </Typography>
                  </Box>
                </Button>

                <Button
                  style={{
                    ...styles.btnWithdraw,
                    marginLeft: sizeRatio(6),
                    backgroundColor:
                      typeWithdraw === "Hiverian"
                        ? NeutralDay600
                        : NeutralDay900,
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
                    <Typography style={S16W400}>Hiverian</Typography>
                    <Typography style={S10W400}>
                      Send to Hiveres user
                    </Typography>
                  </Box>
                </Button>
              </Box>

              <Box>
                <Typography
                  style={{
                    ...S16W700,
                    marginTop: sizeRatio(15),
                  }}
                >
                  Asset
                </Typography>
                <FormControl fullWidth style={{ marginTop: sizeRatio(10) }}>
                  <Select
                    value={typeToken}
                    onChange={(e) => setTypeToken(e.target.value)}
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
                    {lstToken.map((t) => (
                      <MenuItem key={t.name} value={t.name}>
                        <ItemToken
                          key={t.name}
                          detail={t.detail}
                          name={t.name}
                        />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box style={FlexCol}>
                  <Typography
                    style={{
                      ...S16W700,
                      marginTop: sizeRatio(15),
                    }}
                  >
                    {typeWithdraw === "Outside"
                      ? "Recipient Email"
                      : "Recipient Wallet"}
                  </Typography>
                  {typeWithdraw === "Outside" ? (
                    <input
                      type="text"
                      name="recipientEmail"
                      style={{ ...styles.inputStyle, marginTop: sizeRatio(10) }}
                    />
                  ) : (
                    <FormControl fullWidth style={{ marginTop: sizeRatio(10) }}>
                      <Select
                        value={idWallet}
                        onChange={(e) => setIdWallet(e.target.value)}
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
                        <MenuItem
                          key={"chooseWallet"}
                          value={"chooseWallet"}
                          disabled
                        >
                          <Typography
                            style={{
                              ...S16W400,
                              color: NeutralDay500,
                            }}
                          >
                            Choose Wallet
                          </Typography>
                        </MenuItem>
                        {lstWallet.map((wallet) => (
                          <MenuItem key={wallet.name} value={wallet.name}>
                            <ItemToken
                              key={wallet.detail}
                              detail={wallet.detail}
                              name={wallet.name}
                            />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                </Box>

                <Box style={FlexCol}>
                  <Box style={{ ...RowSpaceBetween, marginTop: sizeRatio(15) }}>
                    <Typography style={S16W700}>Amount</Typography>
                    <Typography
                      style={{
                        ...S16W700,
                        ...FlexCol,
                        color: "#047857",
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
                      name="amount"
                      style={styles.inputStyle}
                    />
                    <Button
                      style={{
                        position: "absolute",
                        outline: "none",
                        right: sizeRatio(13),
                        width: sizeRatio(64),
                        height: sizeRatio(24),
                        top: sizeRatio(12),
                        backgroundColor: "#E2E8F0",
                      }}
                    >
                      <Typography
                        style={{
                          ...S12W700,
                          color: NeutralDay400,
                        }}
                      >
                        MAX
                      </Typography>
                    </Button>
                  </Box>
                </Box>
                <Box style={{ ...RowFlexEnd, marginTop: sizeRatio(15) }}>
                  <Typography style={{ ...S16W400, marginRight: sizeRatio(5) }}>
                    Transaction fee:
                  </Typography>
                  <Typography style={S16W700}>0.000 BTC</Typography>
                </Box>

                <Box style={{ ...RowFlexStart, marginTop: sizeRatio(10) }}>
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
          <Box sx={styleModal700}>
            <Box style={{ ...Row, justifyContent: "space-between" }}>
              <Button
                style={{}}
                onClick={() => setModalTransaction("Withdraw")}
              >
                <IoArrowBackCircleOutline
                  style={{
                    fontSize: sizeRatio(30),
                    color: NeutralDay000,
                  }}
                />
              </Button>

              <Typography style={S24W700}>
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
                ...S20W700,
                marginTop: sizeRatio(30),
              }}
            >
              Enter verification code
            </Typography>
            <Box style={{ ...RowCenter, marginTop: sizeRatio(30) }}>
              <ReactCodeInput type="text" fields={6} {...props} />
            </Box>

            <Button
              variant="text"
              style={{
                ...S12W700,
                marginTop: sizeRatio(30),
                color: NeutralDay000,
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
          <Box sx={styleModal700}>
            <Box style={RowSpaceBetween}>
              <Button onClick={() => setModalTransaction("VerificationCode")}>
                <IoArrowBackCircleOutline style={S24W700} />
              </Button>

              <Typography style={S24W700}>
                {typeWithdraw === "Outside" ? "Withdraw " : "Transfer "}
                Information
              </Typography>
              <Box
                style={{
                  width: sizeRatio(30),
                  height: sizeRatio(30),
                }}
              />
            </Box>
            <Box style={{ ...FlexCol, marginTop: sizeRatio(15) }}>
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
                  backgroundColor: PrimaryBlue900,
                  marginTop: sizeRatio(30),
                  color: NeutralDay900,
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
                color: NeutralDay000,
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
