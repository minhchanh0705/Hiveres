import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Select,
  TablePagination,
  Box,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Chart, registerables } from "chart.js";
import { sizeRatio } from "@/theme";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentSectionAtom, isExpandAtom } from "@/recoil/atoms";
import {
  MdDelete,
  MdOutlineContentCopy,
  MdOutlineDelete,
  MdOutlineSwapHorizontalCircle,
} from "react-icons/md";
import { Doughnut } from "react-chartjs-2";
import CheckboxList from "@/components/CheckboxList";
import NavBar from "@/components/NavBar";
import DrawerComponent from "@/components/DrawerComponent";
import { FiEdit, FiFilter } from "react-icons/fi";
import { ImCopy } from "react-icons/im";
import { GoPrimitiveDot } from "react-icons/go";
import { HiOutlineSave } from "react-icons/hi";
import { GrTransaction } from "react-icons/gr";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ReactCodeInput from "react-code-input";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Wallet = () => {
  Chart.register(...registerables);
  const isExpand = useRecoilValue(isExpandAtom);
  const [period, setPeriod] = useState("monthly");
  const [tabWallet, setTabWallet] = useState("invest");
  const [page, setPage] = useState(0);
  const [page1, setPage1] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows1PerPage, setRows1PerPage] = useState(5);
  const [keywordSearch, setKeywordSearch] = useState("");
  const [typeWithdraw, setTypeWithdraw] = useState("Outside");
  const [modalTransaction, setModalTransaction] = useState("");
  const setCurrentSectionAtom = useSetRecoilState(currentSectionAtom);
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
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#0F172A"),
    backgroundColor: "#FFB600",
    "&:hover": {
      backgroundColor: "#ffb916",
    },
  }));
  useEffect(() => {
    setCurrentSectionAtom("Wallet");
  });
  useEffect(() => {
    console.log(modalTransaction);
  }, [modalTransaction]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChange1Page = (event, newPage) => {
    setPage1(newPage);
  };

  const handleChangeRows1PerPage = (event) => {
    setRows1PerPage(+event.target.value);
    setPage1(0);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [valueTokenWithdraw, setValueTokenWithdraw] = useState("BTC");
  const [valueTokenDeposit, setValueTokenDeposit] = useState("BTC");
  const [valueTokenNetwork, setValueNetwork] = useState("Ronin");
  const lstWallet = [
    {
      walletName: "Ronin",
      walletId: "ronin:13612263a7619ed817007524760274c86277d922",
    },
    {
      walletName: "MetaMask",
      walletId: "0xE42540E579122B03f6A37810Ae3879bd38236315",
    },
    {
      walletName: "Fantom",
      walletId: "0xf9ef17ea44c2813e564100728781cdb5887a2363fd",
    },
  ];
  const searchActivities = (char) => {
    setKeywordSearch(char);
  };
  const ListWallet = ({ wallet, walletId }) => {
    return (
      <Box
        style={{
          display: "flex",
          paddingBlock: sizeRatio(29),
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            flex: 2,
          }}
        >
          <img
            style={{
              width: sizeRatio(30),
              height: sizeRatio(30),
              marginRight: sizeRatio(5),
            }}
            src={`../../../src/assets/icon/${wallet}.png`}
            alt=""
          />
          <Typography>{wallet}</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flex: 5,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography>{walletId}</Typography>
          {/* <Button> */}
          <MdOutlineContentCopy
            cursor="pointer"
            style={{
              width: sizeRatio(16),
              height: sizeRatio(16),
              color: "#0F172A",
            }}
          ></MdOutlineContentCopy>
          {/* </Button> */}
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 2,
          }}
        />
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 2,
          }}
        >
          <FiEdit
            style={{
              fontSize: sizeRatio(20),
              color: "#C25A0A",
              marginRight: sizeRatio(15),
            }}
          ></FiEdit>
          <Typography
            style={{
              fontSize: sizeRatio(16),
              color: "#C25A0A",
              fontWeight: 700,
            }}
          >
            Edit
          </Typography>
        </Button>
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            flex: 2,
          }}
        >
          <MdOutlineDelete
            style={{
              fontSize: sizeRatio(22),
              color: "#C25A0A",
              marginRight: sizeRatio(15),
            }}
          ></MdOutlineDelete>
          <Typography
            style={{
              fontSize: sizeRatio(16),
              color: "#C25A0A",
              fontWeight: 700,
            }}
          >
            Delete
          </Typography>
        </Button>
      </Box>
    );
  };
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: "#1E293B",
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: sizeRatio(270),
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        paddingTop: sizeRatio(24),
        paddingBottom: sizeRatio(24),
      },
      "& .MuiMenuItem-root": {
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
      "*::-webkit-scrollbar": {
        width: sizeRatio(4),
      },
      "*::-webkit-scrollbar-track": {
        backgroundColor: "#FFF",
        borderRadius: "4px",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "#ECAE13",
        borderRadius: "4px",
      },
    },
  }));
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const createData = (id, asset, amount, address, action, date, idAddress) => {
    return {
      id,
      asset,
      amount,
      address:
        action === ("Deposit" || "") ? "To: " + address : "From: " + address,
      action,
      date,
      idAddress,
    };
  };
  const rows = [
    createData(
      1,
      "HVR",
      "0,314",
      "#00012356789",
      "Deposit",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      2,
      "ETH",
      "0,314",
      "#00012356789",
      "Withdraw",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      3,
      "SLP",
      "0,314",
      "#00012356789",
      "Withdraw",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      4,
      "BTC",
      "0,314",
      "#00012356789",
      "Deposit",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      5,
      "ETH",
      "0,314",
      "#00012356789",
      "Withdraw",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      6,
      "HVR",
      "0,314",
      "#00012356789",
      "Withdraw",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      7,
      "ETH",
      "0,314",
      "#00012356789",
      "Deposit",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      8,
      "ETH",
      "0,314",
      "#00012356789",
      "Withdraw",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      9,
      "ETH",
      "0,314",
      "#00012356789",
      "Deposit",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      10,
      "SLP",
      "0,314",
      "#00012356789",
      "Lock",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      11,
      "BTC",
      "0,314",
      "#00012356789",
      "Deposit",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      12,
      "HVR",
      "0,314",
      "#00012356789",
      "Withdraw",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      13,
      "ETH",
      "0,314",
      "#00012356789",
      "Deposit",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      14,
      "SLP",
      "0,314",
      "#00012356789",
      "Deposit",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      15,
      "BTC",
      "0,314",
      "#00012356789",
      "Deposit",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      16,
      "HVR",
      "0,314",
      "#00012356789",
      "Lock",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      17,
      "ETH",
      "0,314",
      "#00012356789",
      "Deposit",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      18,
      "SLP",
      "0,314",
      "#00012356789",
      "Withdraw",
      "18 Apr 2022",
      "#00012356789"
    ),
    createData(
      19,
      "BTC",
      "0,314",
      "#00012356789",
      "Deposit",
      "18 Apr 2022",
      "#00012356789"
    ),
  ];

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

  const createData1 = (id, asset, reason, amount) => {
    return {
      id,
      asset,
      reason,
      amount,
    };
  };
  const rows1 = [
    createData1(
      1,
      ["HVR", "Hiverium"],
      ["Private sales", "24/06/2022"],
      "0,314"
    ),
    createData1(
      2,
      ["SLP", "Smooth Love Potion"],
      ["Staking", "24/06/2022"],
      "0,314"
    ),
    createData1(
      3,
      ["BTC", "Bitcoin"],
      ["Account #12345678", "24/06/2022"],
      "0,314"
    ),
    createData1(
      4,
      ["STEPN", "Stepn"],
      ["Private sales", "24/06/2022"],
      "0,314"
    ),
    createData1(5, ["ETH", "Entherium"], ["Staking", "24/06/2022"], "0,314"),
  ];
  const Icon = ({ iconName }) => {
    if (iconName === "HVR") {
      return (
        <img
          style={{
            width: sizeRatio(40),
            height: sizeRatio(40),
            marginRight: sizeRatio(25),
          }}
          src="../../../src/assets/icon/HVR.png"
          alt=""
        />
      );
    } else if (iconName === "SLP") {
      return (
        <img
          style={{
            width: sizeRatio(40),
            height: sizeRatio(40),
            marginRight: sizeRatio(25),
          }}
          src="../../../src/assets/icon/SLP.png"
          alt=""
        />
      );
    } else if (iconName === "BTC") {
      return (
        <img
          style={{
            width: sizeRatio(40),
            height: sizeRatio(40),
            marginRight: sizeRatio(25),
          }}
          src="../../../src/assets/icon/BTC.png"
          alt=""
        />
      );
    } else if (iconName === "STEPN") {
      return (
        <img
          style={{
            width: sizeRatio(40),
            height: sizeRatio(40),
            marginRight: sizeRatio(25),
          }}
          src="../../../src/assets/icon/STEPN.png"
          alt=""
        />
      );
    } else if (iconName === "ETH") {
      return (
        <img
          style={{
            width: sizeRatio(40),
            height: sizeRatio(40),
            marginRight: sizeRatio(25),
          }}
          src="../../../src/assets/icon/ETH.png"
          alt=""
        />
      );
    }
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
  const NetworkView = ({ network }) => {
    return <Typography>{network}</Typography>;
  };
  const lstNetwork = ["Ronin", "Etherium"];
  const lstToken = {
    BTC: "Bitcoin",
    ETH: "Entherium",
    SLP: "Smooth Love Potion",
  };
  const Row1 = ({ r1 }) => {
    return (
      <Fragment>
        <TableRow
          hover
          style={{
            height: sizeRatio(90),
          }}
        >
          <TableCell
            style={{
              width: sizeRatio(229.6),
            }}
            align="left"
          >
            <Box
              style={{
                fontWeight: 700,
                fontSize: sizeRatio(12),
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Icon iconName={r1.asset[0]} />
              <Box>
                <Box
                  style={{
                    fontWeight: 700,
                    fontSize: sizeRatio(16),
                  }}
                >
                  {r1.asset[0]}
                </Box>
                <Typography>{r1.asset[1]}</Typography>
              </Box>
            </Box>
          </TableCell>
          <TableCell
            align="left"
            style={{
              width: sizeRatio(229.6),

              fontWeight: 400,
              fontSize: sizeRatio(14),
            }}
          >
            <Box
              style={{
                fontWeight: 700,
                fontSize: sizeRatio(16),
              }}
            >
              {r1.reason[0]}
            </Box>
            <Typography>{r1.reason[1]}</Typography>
          </TableCell>
          <TableCell
            align="right"
            style={{
              width: sizeRatio(229.6),

              fontWeight: 700,
              fontSize: sizeRatio(16),
              color: "#B91C1C",
            }}
          >
            {r1.amount}
          </TableCell>
        </TableRow>
      </Fragment>
    );
  };
  const Row = ({ row }) => {
    return (
      <Fragment>
        <TableRow hover>
          <TableCell
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            align="center"
          >
            <img
              style={{
                width: sizeRatio(40),
                height: sizeRatio(40),
              }}
              src={`../../../src/assets/icon/${row.asset}.png`}
              alt=""
            />
            {row.asset}
          </TableCell>
          <TableCell
            align="center"
            style={{
              width: sizeRatio(229.6),

              fontWeight: 400,
              fontSize: sizeRatio(16),
            }}
          >
            {row.amount}
          </TableCell>
          <TableCell
            align="left"
            style={{
              width: sizeRatio(229.6),

              fontWeight: 400,
              fontSize: sizeRatio(16),
            }}
          >
            {row.address}
          </TableCell>
          <TableCell
            align="center"
            style={{
              width: sizeRatio(229.6),

              fontWeight: 400,
              fontSize: sizeRatio(16),
            }}
          >
            {row.action}
          </TableCell>
          <TableCell
            align="left"
            style={{
              width: sizeRatio(229.6),

              fontWeight: 400,
              fontSize: sizeRatio(16),
            }}
          >
            {row.date}
          </TableCell>
          <TableCell
            align="left"
            style={{
              width: sizeRatio(229.6),

              fontWeight: 400,
              fontSize: sizeRatio(16),
            }}
          >
            {row.idAddress}
          </TableCell>
        </TableRow>
      </Fragment>
    );
  };

  const InfoConfirm = ({ keys, value, value2 }) => {
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: sizeRatio(30),
        }}
      >
        <Typography
          style={{
            fontWeight: 700,
            fontSize: sizeRatio(20),
          }}
        >
          {keys}
        </Typography>
        <Box
          style={{
            textAlign: "end",
            display: "flex",
          }}
        >
          {Object.keys(lstToken).includes(value) && (
            <img
              style={{
                width: sizeRatio(30),
                height: sizeRatio(30),
                marginRight: sizeRatio(5),
              }}
              src={`../../../src/assets/icon/${value}.png`}
              alt=""
            />
          )}
          <Box>
            <Typography
              style={{
                fontWeight: 700,
                width: sizeRatio(110),
                fontSize: sizeRatio(16),
              }}
            >
              {Object.keys(lstToken).includes(value)
                ? `${value} - ${lstToken[value]}`
                : value}
            </Typography>
            {value2 && (
              <Typography
                style={{
                  fontWeight: 700,
                  width: sizeRatio(110),
                  fontSize: sizeRatio(16),
                }}
              >
                {value2}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    );
  };

  const lstAssets = ["HVR", "SLP", "BTC", "ETH", "STEPN"];
  const lstActions = ["Deposit", "Withdraw", "Lock", "Staking"];

  return (
    <Box style={{ backgroundColor: "#F1F5F9" }}>
      <NavBar />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <DrawerComponent />
        <Box
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            marginBottom: sizeRatio(42),
          }}
        >
          <Box
            style={{
              width: sizeRatio(isExpand ? 1080 : 1212),

              fontWeight: 700,
              fontSize: sizeRatio(20),
              marginTop: sizeRatio(32),
              marginBottom: sizeRatio(42),
            }}
          >
            Wallet
          </Box>

          {/* Table Upper Wallet */}
          <Box
            style={{
              display: "flex",
              width: sizeRatio(isExpand ? 1080 : 1212),
            }}
          >
            <Box
              style={{
                flex: 4,
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingInline: sizeRatio(30),
                }}
              >
                <Typography
                  style={{
                    display: "flex",
                    color: "#0F172A",
                    fontWeight: 700,
                    fontSize: sizeRatio(16),
                    alignItems: "center",
                  }}
                >
                  Coin List
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MdOutlineSwapHorizontalCircle
                    style={{
                      marginLeft: sizeRatio(14),
                      fontSize: sizeRatio(20),
                    }}
                    cursor="pointer"
                  />
                  <Typography
                    style={{
                      display: "flex",
                      color: "#0F172A",
                      paddingInline: sizeRatio(14),
                      fontWeight: 700,
                      fontSize: sizeRatio(16),
                      alignItems: "center",
                    }}
                  >
                    LOCKED
                  </Typography>
                </Box>
              </Box>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: sizeRatio(600),
                  borderRadius: sizeRatio(16),
                  paddingInline: sizeRatio(32),
                  backgroundColor: "#FFFFFF",
                  marginRight: sizeRatio(10),
                  marginTop: sizeRatio(20),
                }}
              >
                <TableContainer>
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="left"
                          style={{
                            fontWeight: 700,
                            fontSize: sizeRatio(16),
                          }}
                        >
                          Asset
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            fontWeight: 700,
                            fontSize: sizeRatio(16),
                          }}
                        >
                          Reason
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            fontWeight: 700,
                            fontSize: sizeRatio(16),
                          }}
                        >
                          Amount
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows1
                        .slice(
                          page1 * rows1PerPage,
                          page1 * rows1PerPage + rows1PerPage
                        )
                        .map((row1) => {
                          return <Row1 key={row1.id} r1={row1} />;
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>

                <TablePagination
                  rowsPerPageOptions={[5, 25, 100]}
                  component="div"
                  count={rows1.length}
                  rowsPerPage={rows1PerPage}
                  page={page1}
                  onPageChange={handleChange1Page}
                  onRowsPerPageChange={handleChangeRows1PerPage}
                />
              </Paper>
            </Box>
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
                            <NetworkView network={network} />
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
                          src="../../../src/assets/icon/qr.png"
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
                        <GoPrimitiveDot /> Send only SLP to this deposit
                        address.
                      </div>
                      <div>
                        <GoPrimitiveDot /> Make sure that the information is
                        correct
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
                              typeWithdraw === "Outside"
                                ? "#CBD5E1"
                                : "#F8FAFC",
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
                              typeWithdraw === "Hiverian"
                                ? "#CBD5E1"
                                : "#F8FAFC",
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
                        <FormControl
                          fullWidth
                          style={{ marginTop: sizeRatio(10) }}
                        >
                          <Select
                            value={valueTokenDeposit}
                            onChange={(e) =>
                              setValueTokenDeposit(e.target.value)
                            }
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
                        {/* {typeWithdraw === "Outside" && (
                          <Box>
                            <Typography
                              style={{
                                marginTop: sizeRatio(15),
                                fontWeight: 700,
                                fontSize: sizeRatio(16),
                              }}
                            >
                              Withdraw to network
                            </Typography>
                            <FormControl
                              fullWidth
                              style={{ marginTop: sizeRatio(10) }}
                            >
                              <Select
                                value={valueTokenNetwork}
                                onChange={(e) =>
                                  setValueNetwork(e.target.value)
                                }
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
                                    <NetworkView network={network} />
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Box>
                        )} */}
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
                          onClick={() =>
                            setModalTransaction("VerificationCode")
                          }
                        >
                          Submit
                        </Button>
                      </Box>
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
                        onClick={() =>
                          setModalTransaction("confirmTransaction")
                        }
                      >
                        Submit
                      </Button>
                    </Box>
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
                      <InfoConfirm keys="ID" value="#0000123456" />
                      <InfoConfirm keys="Asset" value="BTC" />
                      <InfoConfirm keys="Recipient:" value="#0000123456" />
                      <InfoConfirm
                        keys="Transfer network:"
                        value="Hiveres Chain"
                      />
                      <InfoConfirm keys="Amount:" value="0,314 BTC" />
                      <InfoConfirm keys="Transaction fee:" value="0,001 BTC" />
                      <InfoConfirm
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
                          textX = Math.round(
                            (width - ctx.measureText(text).width) / 2
                          ),
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
          </Box>
          {/* Table Below Activity */}
          <Box
            style={{
              display: "flex",
              marginTop: sizeRatio(32),
              width: sizeRatio(isExpand ? 1080 : 1212),
              justifyContent: "space-between",
              paddingInline: sizeRatio(30),
            }}
          >
            <Typography
              style={{
                display: "flex",
                color: "#0F172A",
                fontWeight: 700,
                fontSize: sizeRatio(16),
                alignItems: "center",
              }}
            >
              Wallet List
            </Typography>
            <Button
              id="profile-button"
              style={{
                width: sizeRatio(120),
                backgroundColor: "#061123",
                borderRadius: "8px",
                justifyContent: "space-around",
              }}
              aria-controls={open ? "profile-button" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableElevation
              onClick={handleClick}
            >
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontWeight: 400,
                  fontSize: sizeRatio(12),
                }}
              >
                Add Wallet
              </Typography>
              <AiOutlinePlusCircle
                style={{
                  color: "#FFFFFF",
                  fontSize: sizeRatio(16),
                }}
              />
            </Button>
          </Box>
          <Paper
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              borderRadius: sizeRatio(16),
              marginTop: sizeRatio(8),
              paddingInline: sizeRatio(32),
              backgroundColor: "#FFFFFF",
              paddingBlock: sizeRatio(24),
            }}
          >
            {lstWallet.map((w) => (
              <ListWallet wallet={w.walletName} walletId={w.walletId} />
            ))}
          </Paper>

          <Paper
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),

              borderRadius: sizeRatio(16),
              marginTop: sizeRatio(24),
              paddingInline: sizeRatio(32),
              backgroundColor: "#FFFFFF",
              paddingBottom: sizeRatio(16),
            }}
          >
            <Box
              style={{
                marginTop: sizeRatio(35),
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  fontWeight: 700,
                  fontSize: sizeRatio(24),
                }}
              >
                Activities
              </Box>
              <Box>
                <input
                  type="text"
                  name="searchnActivities"
                  autoComplete="off"
                  style={{
                    height: sizeRatio(32),
                    marginRight: sizeRatio(32),
                  }}
                  placeholder="Search..."
                  onChange={(e) => searchActivities(e.target.value)}
                />

                <Button
                  id="profile-button"
                  style={{
                    width: sizeRatio(116),
                    backgroundColor: "#061123",
                    borderRadius: "8px",
                  }}
                  aria-controls={open ? "profile-button" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  disableElevation
                  onClick={handleClick}
                  endIcon={
                    <FiFilter
                      style={{
                        color: "#FFFFFF",
                        fontSize: sizeRatio(20),
                        marginLeft: sizeRatio(5),
                      }}
                    />
                  }
                >
                  <Typography
                    style={{
                      color: "#FFFFFF",

                      fontWeight: 400,
                      fontSize: sizeRatio(14),
                    }}
                  >
                    Filter
                  </Typography>
                </Button>

                <StyledMenu
                  id="filter-menu"
                  MenuListProps={{
                    "aria-labelledby": "filter-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <Box
                    style={{
                      display: "flex",
                      padding: 0,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      marginLeft: sizeRatio(24),
                      marginRight: sizeRatio(8),
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                        color: "#FFFFFF",
                      }}
                    >
                      Asset
                    </Typography>
                    <Box
                      style={{
                        width: "100%",
                        backgroundColor: "#1E293B",
                        overflow: "hidden",
                        overflowY: "scroll",
                        maxHeight: sizeRatio(176),
                      }}
                    >
                      <CheckboxList
                        bgcolor="#1E293B"
                        txtColor="#FFF"
                        lstItems={lstAssets}
                        nameCheckbox="Asset"
                      />
                    </Box>
                    <Typography
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                        color: "#FFFFFF",
                        marginTop: sizeRatio(32),
                      }}
                    >
                      Action
                    </Typography>
                    <Box
                      style={{
                        width: "100%",
                        overflow: "hidden",
                        overflowY: "scroll",
                        maxHeight: sizeRatio(176),
                      }}
                    >
                      <CheckboxList
                        bgcolor="#1E293B"
                        txtColor="#FFF"
                        lstItems={lstActions}
                        nameCheckbox="Action"
                      />
                    </Box>
                  </Box>
                  <Box
                    style={{
                      width: "100%",
                      paddingInline: sizeRatio(24),
                    }}
                  >
                    <ColorButton
                      variant="contained"
                      style={{
                        width: "100%",
                        color: "#0F172A",

                        fontWeight: 400,
                        fontSize: sizeRatio(14),
                      }}
                    >
                      Confirm
                    </ColorButton>
                  </Box>
                </StyledMenu>
              </Box>
            </Box>
            <TableContainer>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    ></TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      Amount
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      From/To
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      Action
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      ID
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return <Row key={row.id} row={row} />;
                    })}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              sx={{
                marginTop: sizeRatio(10),
              }}
              rowsPerPageOptions={[5, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
export default Wallet;
