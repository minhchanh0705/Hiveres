import {
  Button,
  ButtonGroup,
  Icon,
  Paper,
  TablePagination,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { BsPersonCheck, BsCashCoin } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiChevronDown, FiAward } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";

import { Bar } from "react-chartjs-2";
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
import NavBar from "@/components/NavBar";
import DrawerComponent from "@/components/DrawerComponent";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentSectionAtom, isExpandAtom } from "@/recoil/atoms";
const Earning = () => {
  Chart.register(...registerables);
  const isExpand = useRecoilValue(isExpandAtom);
  const [period, setPeriod] = useState("monthly");
  const [tabEarning, setTabEarning] = useState("invest");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [keywordSearch, setKeywordSearch] = useState("");
  const setCurrentSectionAtom = useSetRecoilState(currentSectionAtom);
  useEffect(() => {
    setCurrentSectionAtom("Earning");
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event, newTabEarning) => {
    newTabEarning !== null && setTabEarning(newTabEarning);
  };

  const searchAccount = (char) => {
    setKeywordSearch(char);
  };

  const imgPets = [
    "https://pngset.com/images-original/axie-marketplace-white-aqua-axie-egg-food-animal-fish-transparent-png-2568119.png",
    "https://pngset.com/images-original/axie-marketplace-axie-chopsuey-food-birthday-cake-dessert-egg-transparent-png-2614883.png",
    "https://pngset.com/images-original/axie-marketplace-nimo-axie-egg-food-animal-sea-life-transparent-png-2920166.png",
  ];
  const createData = (id, name, pets, status, yesterday, kpi) => {
    return {
      id,
      name,
      pets,
      status,
      yesterday,
      kpi,
      history: [
        {
          date: "2020-01-05",
          customerId: "11091700",
          amount: 3,
        },
        {
          date: "2020-01-02",
          customerId: "Anonymous",
          amount: 1,
        },
      ],
    };
  };
  const rows = [
    createData(1, "Axie #1", imgPets, "In Progress", 250, 1.65, 60),
    createData(2, "Axie #2", imgPets, "Pending", 250, 1.65, 60),
    createData(3, "Axie #3", imgPets, "Done", 250, 1.65, 60),
    createData(4, "Axie #4", imgPets, "Pending", 250, 1.65, 60),
    createData(5, "Axie #5", imgPets, "Pending", 250, 1.65, 60),
    createData(6, "Axie #6", imgPets, "Cancel", 250, 1.65, 60),
    createData(7, "Axie #7", imgPets, "Pending", 250, 1.65, 60),
    createData(8, "Axie #8", imgPets, "In Progress", 250, 1.65, 60),
    createData(9, "Axie #9", imgPets, "Pending", 250, 1.65, 60),
    createData(10, "Axie #10", imgPets, "Cancel", 250, 1.65, 60),
    createData(11, "Axie #11", imgPets, "Pending", 250, 1.65, 60),
    createData(12, "Axie #12", imgPets, "In Progress", 250, 1.65, 60),
    createData(13, "Axie #13", imgPets, "Done", 250, 1.65, 60),
    createData(14, "Axie #14", imgPets, "Pending", 250, 1.65, 60),
    createData(15, "Axie #15", imgPets, "Pending", 250, 1.65, 60),
    createData(16, "Axie #16", imgPets, "Cancel", 250, 1.65, 60),
    createData(17, "Axie #17", imgPets, "Pending", 250, 1.65, 60),
    createData(18, "Axie #18", imgPets, "In Progress", 250, 1.65, 60),
    createData(19, "Axie #19", imgPets, "Pending", 250, 1.65, 60),
    createData(20, "Axie #20", imgPets, "Cancel", 250, 1.65, 60),
    createData(21, "Axie #21", imgPets, "Pending", 250, 1.65, 60),
    createData(22, "Axie #22", imgPets, "In Progress", 250, 1.65, 60),
  ];

  const Row = ({ row }) => {
    const [open, setOpen] = useState(false);

    return (
      <Fragment>
        <TableRow
          hover
          // sx={{ "& > *": { borderWidth: "0px" } }}
          // onClick={() => setOpen(!open)}
        >
          <TableCell
            style={{
              width: sizeRatio(229.6),
              fontFamily: "Helvetica",
              fontWeight: 400,
              fontSize: sizeRatio(16),
            }}
            align="center"
          >
            <FiAward
              style={{
                marginRight: sizeRatio(4),
                fontSize: sizeRatio(18),
              }}
            />
            {row.name}
          </TableCell>
          <TableCell
            align="center"
            style={{
              width: sizeRatio(229.6),
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {row.pets.map((url, i) => (
                <Box
                  key={i}
                  style={{
                    paddingInline: sizeRatio(2),
                  }}
                >
                  <img alt="iconPet" src={url} width={sizeRatio(32)}></img>
                </Box>
              ))}
            </Box>
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
            {row.status}
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
            {row.yesterday}
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
            {row.kpi}
          </TableCell>
        </TableRow>
        {/* <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    History
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Customer</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Total price ($)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row.history.map((historyRow) => (
                        <TableRow key={historyRow.date}>
                          <TableCell component="th" scope="row">
                            {historyRow.date}
                          </TableCell>
                          <TableCell>{historyRow.customerId}</TableCell>
                          <TableCell align="right">{historyRow.amount}</TableCell>
                          <TableCell align="right">
                            {Math.round(historyRow.amount * row.price * 100) /
                              100}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow> */}
      </Fragment>
    );
  };

  const profitBarChart = (period) =>
    Array.from(
      {
        length:
          period === "monthly"
            ? 31
            : period === "7days"
            ? 7
            : period === "yearly" && 12,
      },
      (_, i) => {
        const randomNumber = Math.floor(Math.random() * 100);
        // total[i] = randomNumber;
        return randomNumber;
      }
    );
  const payoutBarChart = (period) =>
    Array.from(
      {
        length:
          period === "monthly"
            ? 31
            : period === "7days"
            ? 7
            : period === "yearly" && 12,
      },
      (_, i) => {
        const randomNumber = Math.floor(Math.random() * 100);
        // total[i] += randomNumber;
        return randomNumber;
      }
    );
  Row.propTypes = {
    row: PropTypes.shape({
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        })
      ).isRequired,
      name: PropTypes.string.isRequired,
      pets: PropTypes.array.isRequired,
      yesterday: PropTypes.number.isRequired,
      kpi: PropTypes.number.isRequired,
    }).isRequired,
  };

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
              marginTop: sizeRatio(32),
              marginBottom: sizeRatio(42),
              fontFamily: "Helvetica",
              fontWeight: 700,
              fontSize: sizeRatio(20),
            }}
          >
            Earning
          </Box>
          <ButtonGroup variant="light">
            <Button
              style={{
                width: sizeRatio(198),
                height: sizeRatio(34),
                marginInline: sizeRatio(12),
                borderRadius: "8px",
                backgroundColor:
                  tabEarning === "invest" ? "#061123" : "#E2E8F0",
                color: tabEarning === "invest" ? "#F8FAFC" : "#94A3BB",
              }}
              onClick={() => setTabEarning("invest")}
            >
              <Typography
                style={{
                  fontSize: sizeRatio(16),
                  fontWeight: 700,
                }}
              >
                Invest
              </Typography>
            </Button>
            <Button
              style={{
                width: sizeRatio(198),
                height: sizeRatio(34),
                marginInline: sizeRatio(12),
                borderRadius: "8px",
                backgroundColor: tabEarning === "jobs" ? "#061123" : "#E2E8F0",
                color: tabEarning === "jobs" ? "#F8FAFC" : "#94A3BB",
              }}
              onClick={() => setTabEarning("jobs")}
            >
              <Typography
                style={{
                  fontSize: sizeRatio(16),
                  fontWeight: 700,
                }}
              >
                Jobs
              </Typography>
            </Button>
          </ButtonGroup>
          <Box
            style={{
              width: sizeRatio(isExpand ? 1080 : 1212),

              display: "flex",
              backgroundColor: "#FFFFFF",
              borderRadius: sizeRatio(12),
              justifyContent: "space-between",
              paddingBlock: sizeRatio(15),
              paddingInline: sizeRatio(24),
              marginBlock: sizeRatio(24),
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <BsPersonCheck
                style={{
                  color: "#0F172A",
                  fontSize: sizeRatio(27),
                  marginRight: sizeRatio(25),
                }}
              />
              <Box>
                <Typography
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: 700,
                    fontSize: sizeRatio(20),
                  }}
                >
                  Active Accounts
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: 400,
                    fontSize: sizeRatio(16),
                  }}
                >
                  12/20
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IoSchoolOutline
                style={{
                  color: "#0F172A",
                  fontSize: sizeRatio(27),
                  marginRight: sizeRatio(25),
                }}
              />
              <Box>
                <Typography
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: 700,
                    fontSize: sizeRatio(20),
                  }}
                >
                  Yesterday Revenue
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: 400,
                    fontSize: sizeRatio(16),
                  }}
                >
                  48
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  width: sizeRatio(27),
                  marginRight: sizeRatio(25),
                }}
                src="../../../src/assets/icon/SLP.png"
                alt=""
              />

              <Box>
                <Typography
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: 700,
                    fontSize: sizeRatio(20),
                  }}
                >
                  Total Payout
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: 400,
                    fontSize: sizeRatio(16),
                  }}
                >
                  314
                </Typography>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <BsCashCoin
                style={{
                  color: "#0F172A",
                  fontSize: sizeRatio(27),
                  marginRight: sizeRatio(25),
                }}
              />
              <Box>
                <Typography
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: 700,
                    fontSize: sizeRatio(20),
                  }}
                >
                  Total Revenue
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: 400,
                    fontSize: sizeRatio(16),
                  }}
                >
                  314,567
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              width: sizeRatio(isExpand ? 1080 : 1212),

              height: sizeRatio(510),
              display: "flex",
              backgroundColor: "#FFFFFF",
              borderRadius: sizeRatio(12),
              paddingBlock: sizeRatio(15),
              paddingInline: sizeRatio(25),
              marginTop: sizeRatio(24),
            }}
          >
            <Bar
              options={{
                indexAxis: "x",
                elements: {
                  bar: {
                    borderWidth: 0.1,
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true,
                  },
                },
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Monthly Revenue",
                    align: "start",
                    color: "#0F172A",
                    font: {
                      family: "Helvetica",
                      weight: 700,
                      size: sizeRatio(20),
                    },
                  },
                },
              }}
              data={{
                labels: [
                  ...Array(
                    period === "monthly"
                      ? 31
                      : period === "7days"
                      ? 7
                      : period === "yearly" && 12
                  ).keys(),
                ].map((e) => e + 1),
                datasets: [
                  // {
                  //   label: "Total",
                  //   type: "line",
                  //   borderColor: "#64748B",
                  //   borderWidth: 1,
                  //   pointBorderWidth: 0,
                  //   pointBackgroundColor: "#64748B",
                  //   borderJoinStyle: "round",
                  //   tension: 0.5,
                  //   data: total,
                  // },
                  {
                    label: "Profit",
                    data: profitBarChart(period),
                    backgroundColor: "#475569",
                  },
                  {
                    label: "Payout",
                    data: payoutBarChart(period),
                    backgroundColor: "#94A3BB",
                    borderRadius: 8,
                  },
                ],
              }}
            />
            <ButtonGroup
              variant="light"
              style={{
                height: sizeRatio(22),
                position: "relative",
                top: "40px",
                right: sizeRatio(340),
              }}
            >
              <Button
                style={{
                  width: sizeRatio(105),
                  borderRadius: "8px",
                  backgroundColor: period === "7days" ? "#061123" : "#E2E8F0",
                  color: "#94A3BB",
                  fontFamily: "Helvetica",
                  fontWeight: 400,
                  fontSize: sizeRatio(12),
                }}
                onClick={() => setPeriod("7days")}
              >
                Last 7 days
              </Button>
              <Button
                style={{
                  width: sizeRatio(105),
                  marginInline: sizeRatio(12),
                  borderRadius: "8px",
                  backgroundColor: period === "monthly" ? "#061123" : "#E2E8F0",
                  color: "#94A3BB",
                  fontFamily: "Helvetica",
                  fontWeight: 400,
                  fontSize: sizeRatio(12),
                }}
                onClick={() => setPeriod("monthly")}
              >
                Monthly
              </Button>
              <Button
                style={{
                  width: sizeRatio(105),
                  borderRadius: "8px",
                  backgroundColor: period === "yearly" ? "#061123" : "#E2E8F0",
                  color: "#94A3BB",
                  fontFamily: "Helvetica",
                  fontWeight: 400,
                  fontSize: sizeRatio(12),
                }}
                onClick={() => setPeriod("yearly")}
              >
                Yearly
              </Button>
            </ButtonGroup>
          </Box>
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
              <Typography
                style={{
                  fontFamily: "Helvetica",
                  fontWeight: 700,
                  fontSize: sizeRatio(24),
                }}
              >
                Accounts list
              </Typography>
              <Box>
                <input
                  // ref={}
                  type="text"
                  name="searchAccount"
                  autoComplete="off"
                  style={{
                    height: sizeRatio(32),
                  }}
                  placeholder="Search..."
                  onChange={(e) => searchAccount(e.target.value)}
                  // onFocus={() => }
                  // onBlur={() => }
                />
                <ButtonGroup
                  variant="light"
                  style={{
                    height: sizeRatio(22),
                  }}
                >
                  <Button
                    style={{
                      width: sizeRatio(70),
                      height: sizeRatio(32),
                      marginInline: sizeRatio(12),
                      borderRadius: "8px",
                      backgroundColor: "#0F172A",
                    }}
                    onClick={() => setPeriod("monthly")}
                  >
                    <Typography
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "Helvetica",
                        fontWeight: 400,
                        fontSize: sizeRatio(14),
                      }}
                    >
                      All
                    </Typography>
                    <FiChevronDown
                      style={{
                        color: "#FFFFFF",
                        fontSize: sizeRatio(24),
                        marginLeft: sizeRatio(5),
                      }}
                    />
                  </Button>
                  <Button
                    style={{
                      width: sizeRatio(140),
                      height: sizeRatio(32),
                      borderRadius: "8px",
                      backgroundColor: "#0F172A",
                    }}
                    onClick={() => setPeriod("monthly")}
                  >
                    <Typography
                      style={{
                        color: "#FFFFFF",
                        fontFamily: "Helvetica",
                        fontWeight: 400,
                        fontSize: sizeRatio(14),
                        marginRight: sizeRatio(5),
                      }}
                    >
                      Add Account
                    </Typography>
                    <IoIosAddCircleOutline
                      style={{
                        color: "#FFFFFF",
                        fontSize: sizeRatio(24),
                      }}
                    />
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
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
                    >
                      Name
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      Pets
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      SLP/Yesterday
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      KPI
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
export default Earning;
