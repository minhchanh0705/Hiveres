import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Icon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  TablePagination,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { BsPersonCheck, BsCashCoin } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiChevronDown, FiAward, FiFilter } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import { styled, alpha } from "@mui/material/styles";

import { Chart, registerables } from "chart.js";
import { sizeRatio } from "@/theme";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
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
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { Doughnut } from "react-chartjs-2";
import CheckboxList from "@/components/CheckboxList";
import NavBar from "@/components/NavBar";
import DrawerComponent from "@/components/DrawerComponent";

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
  const setCurrentSectionAtom = useSetRecoilState(currentSectionAtom);

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

  const handleChange = (event, newTabWallet) => {
    newTabWallet !== null && setTabWallet(newTabWallet);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const searchActivities = (char) => {
    setKeywordSearch(char);
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
  const Row1 = ({ r1 }) => {
    return (
      <Fragment>
        <TableRow hover>
          <TableCell
            style={{
              width: sizeRatio(229.6),
              height: sizeRatio(90),
            }}
            align="left"
          >
            <div
              style={{
                fontFamily: "Helvetica",
                fontWeight: 700,
                fontSize: sizeRatio(12),
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Icon iconName={r1.asset[0]} />
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: sizeRatio(16),
                  }}
                >
                  {r1.asset[0]}
                </div>
                <div>{r1.asset[1]}</div>
              </div>
            </div>
          </TableCell>
          <TableCell
            align="left"
            style={{
              width: sizeRatio(229.6),
              height: sizeRatio(90),
              fontFamily: "Helvetica",
              fontWeight: 400,
              fontSize: sizeRatio(14),
              // backgroundColor: "blue",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: sizeRatio(16),
              }}
            >
              {r1.reason[0]}
            </div>
            <div>{r1.reason[1]}</div>
          </TableCell>
          <TableCell
            align="right"
            style={{
              width: sizeRatio(229.6),
              fontFamily: "Helvetica",
              fontWeight: 700,
              fontSize: sizeRatio(16),
              color: "#B91C1C",
              height: sizeRatio(90),
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
              fontFamily: "Helvetica",
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
              fontFamily: "Helvetica",
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
              fontFamily: "Helvetica",
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
              fontFamily: "Helvetica",
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
              fontFamily: "Helvetica",
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

  const lstAssets = ["HVR", "SLP", "BTC", "ETH", "STEPN"];
  const lstActions = ["Deposit", "Withdraw", "Lock", "Staking"];

  return (
    <div style={{ backgroundColor: "#F1F5F9" }}>
      <NavBar />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <DrawerComponent />
        <div
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: sizeRatio(isExpand ? 948 : 1080),
                  fontFamily: "Helvetica",
                  fontWeight: 700,
                  fontSize: sizeRatio(20),
                  marginTop: sizeRatio(32),
                  marginBottom: sizeRatio(42),
                }}
              >
                Wallet
              </div>

              {/* Table Upper Wallet */}
              <div
                style={{
                  display: "flex",
                  width: sizeRatio(isExpand ? 948 : 1080),
                }}
              >
                <div
                  style={{
                    flex: 4,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      color: "#0F172A",
                      fontFamily: "Helvetica",
                      fontWeight: 700,
                      fontSize: sizeRatio(16),
                      alignItems: "center",
                    }}
                  >
                    LOCKED WALLET
                    <MdOutlineSwapHorizontalCircle
                      style={{
                        marginLeft: sizeRatio(14),
                        fontSize: sizeRatio(20),
                      }}
                    />
                  </div>
                  <Paper
                    sx={{
                      height: sizeRatio(575),
                      borderRadius: sizeRatio(16),
                      paddingInline: sizeRatio(32),
                      backgroundColor: "#FFFFFF",
                      paddingBottom: sizeRatio(16),
                      marginRight: sizeRatio(10),
                    }}
                  >
                    <div
                      style={{
                        marginTop: sizeRatio(35),
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    ></div>
                    <TableContainer>
                      <Table aria-label="collapsible table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              align="left"
                              style={{
                                fontFamily: "Helvetica",
                                fontWeight: 700,
                                fontSize: sizeRatio(16),
                              }}
                            >
                              Asset
                            </TableCell>
                            <TableCell
                              align="left"
                              style={{
                                fontFamily: "Helvetica",
                                fontWeight: 700,
                                fontSize: sizeRatio(16),
                              }}
                            >
                              Reason
                            </TableCell>
                            <TableCell
                              align="right"
                              style={{
                                fontFamily: "Helvetica",
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
                </div>
                <div
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
                        height: sizeRatio(32),
                        marginInline: sizeRatio(12),
                        borderRadius: "4px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor:
                          period === "monthly" ? "#E2E8F0" : "#061123",
                        backgroundColor:
                          period === "monthly" ? "#061123" : "#E2E8F0",
                        color: period === "monthly" ? "#E2E8F0" : "#061123",
                        fontFamily: "Helvetica",
                        fontWeight: 400,
                        fontSize: sizeRatio(14),
                      }}
                      onClick={() => setPeriod("monthly")}
                    >
                      Deposit
                    </Button>
                    <Button
                      style={{
                        width: sizeRatio(120),
                        height: sizeRatio(32),
                        borderRadius: "4px",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor:
                          period === "yearly" ? "#E2E8F0" : "#061123",
                        backgroundColor:
                          period === "yearly" ? "#061123" : "#E2E8F0",
                        color: period === "yearly" ? "#E2E8F0" : "#061123",
                        fontFamily: "Helvetica",
                        fontWeight: 400,
                        fontSize: sizeRatio(14),
                      }}
                      onClick={() => setPeriod("yearly")}
                    >
                      Withdraw
                    </Button>
                  </ButtonGroup>
                  <Paper
                    sx={{
                      height: sizeRatio(575),
                      borderRadius: sizeRatio(16),
                      backgroundColor: "#FFFFFF",
                      marginTop: sizeRatio(35),
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
                </div>
              </div>
              {/* Table Below Activity */}
              <Paper
                sx={{
                  width: sizeRatio(isExpand ? 948 : 1080),
                  borderRadius: sizeRatio(16),
                  marginTop: sizeRatio(24),
                  paddingInline: sizeRatio(32),
                  backgroundColor: "#FFFFFF",
                  paddingBottom: sizeRatio(16),
                }}
              >
                <div
                  style={{
                    marginTop: sizeRatio(35),
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Helvetica",
                      fontWeight: 700,
                      fontSize: sizeRatio(24),
                    }}
                  >
                    Activities
                  </div>
                  <div>
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
                      <div
                        style={{
                          color: "#FFFFFF",
                          fontFamily: "Helvetica",
                          fontWeight: 400,
                          fontSize: sizeRatio(14),
                        }}
                      >
                        Filter
                      </div>
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
                      <div
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
                            fontFamily: "Archivo",
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
                            fontFamily: "Archivo",
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
                      </div>
                      <div
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
                            fontFamily: "Helvetica",
                            fontWeight: 400,
                            fontSize: sizeRatio(14),
                          }}
                        >
                          Confirm
                        </ColorButton>
                      </div>
                    </StyledMenu>
                  </div>
                </div>
                <TableContainer>
                  <Table aria-label="collapsible table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="center"
                          style={{
                            fontFamily: "Helvetica",
                            fontWeight: 700,
                            fontSize: sizeRatio(16),
                          }}
                        ></TableCell>
                        <TableCell
                          align="center"
                          style={{
                            fontFamily: "Helvetica",
                            fontWeight: 700,
                            fontSize: sizeRatio(16),
                          }}
                        >
                          Amount
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            fontFamily: "Helvetica",
                            fontWeight: 700,
                            fontSize: sizeRatio(16),
                          }}
                        >
                          From/To
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            fontFamily: "Helvetica",
                            fontWeight: 700,
                            fontSize: sizeRatio(16),
                          }}
                        >
                          Action
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            fontFamily: "Helvetica",
                            fontWeight: 700,
                            fontSize: sizeRatio(16),
                          }}
                        >
                          Date
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{
                            fontFamily: "Helvetica",
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
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return <Row key={row.id} row={row} />;
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </div>
          </Box>
        </div>
      </Box>
    </div>
  );
};
export default Wallet;
