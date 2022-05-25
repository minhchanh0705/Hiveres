import {
  Breadcrumbs,
  Button,
  ButtonGroup,
  Link,
  Paper,
  Stack,
  TablePagination,
  TextField,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { ImPower } from "react-icons/im";
import { FiAward, FiCopy, FiPercent, FiChevronDown } from "react-icons/fi";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import { Bar } from "react-chartjs-2";
import { sizeRatio } from "@/theme";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NavBar from "@/components/NavBar";
import DrawerComponent from "@/components/DrawerComponent";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentSectionAtom, isExpandAtom } from "@/recoil/atoms";
import { height } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
  AiOutlineFire,
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineThunderbolt,
} from "react-icons/ai";

const AccountDetail = () => {
  const isExpand = useRecoilValue(isExpandAtom);
  const [period, setPeriod] = useState("monthly");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [keywordSearch, setKeywordSearch] = useState("");
  const setCurrentSectionAtom = useSetRecoilState(currentSectionAtom);
  const navigate = useNavigate();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const searchAccount = (char) => {
    setKeywordSearch(char);
  };

  const imgPets = [
    "https://pngset.com/images-original/axie-marketplace-white-aqua-axie-egg-food-animal-fish-transparent-png-2568119.png",
    "https://pngset.com/images-original/axie-marketplace-axie-chopsuey-food-birthday-cake-dessert-egg-transparent-png-2614883.png",
    "https://pngset.com/images-original/axie-marketplace-nimo-axie-egg-food-animal-sea-life-transparent-png-2920166.png",
  ];
  const createData = (id, pet, name, skill, stats) => {
    return {
      id,
      pet,
      name,
      skill,
      stats,
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
    createData(1, imgPets[0], "Axie #1", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(2, imgPets[1], "Axie #2", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(3, imgPets[0], "Axie #3", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(4, imgPets[1], "Axie #4", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(5, imgPets[2], "Axie #5", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(6, imgPets[0], "Axie #6", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(7, imgPets[1], "Axie #7", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(8, imgPets[2], "Axie #8", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(9, imgPets[0], "Axie #9", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(10, imgPets[1], "Axie #10", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(11, imgPets[2], "Axie #11", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(12, imgPets[2], "Axie #12", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(13, imgPets[0], "Axie #13", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(14, imgPets[2], "Axie #14", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(15, imgPets[0], "Axie #15", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(16, imgPets[2], "Axie #16", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(17, imgPets[2], "Axie #17", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(18, imgPets[1], "Axie #18", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(19, imgPets[2], "Axie #19", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(20, imgPets[0], "Axie #20", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(21, imgPets[2], "Axie #21", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
    createData(22, imgPets[1], "Axie #22", "Aquatic", {
      heart: 40,
      star: 12,
      thunder: 34,
      fire: 4,
    }),
  ];

  const Row = ({ row }) => {
    const [open, setOpen] = useState(false);

    return (
      <Fragment>
        <TableRow
          hover
          sx={{ "& > *": { borderWidth: "0px" }, height: sizeRatio(83) }}
          onClick={() => setOpen(!open)}
        >
          <TableCell
            style={{
              width: sizeRatio(369),
              fontFamily: "Helvetica",
              fontWeight: 400,
              fontSize: sizeRatio(16),
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="iconPet"
                src={row.pet}
                style={{
                  width: sizeRatio(32),
                  marginRight: sizeRatio(10),
                }}
              />
              {row.name}
            </div>
          </TableCell>

          <TableCell
            align="center"
            style={{
              width: sizeRatio(369),
              fontFamily: "Helvetica",
              fontWeight: 400,
              fontSize: sizeRatio(16),
            }}
          >
            {row.skill}
          </TableCell>
          <TableCell
            align="center"
            style={{
              width: sizeRatio(426),
              fontFamily: "Helvetica",
              fontWeight: 400,
              fontSize: sizeRatio(16),
            }}
          >
            <AiOutlineHeart
              style={{
                color: "#10B981",
                fontSize: sizeRatio(20),
                width: sizeRatio(65),
              }}
            />
            <span
              style={{
                width: sizeRatio(65),
              }}
            >
              {row.stats.heart}
            </span>
            <AiOutlineThunderbolt
              style={{
                color: "#061123",
                width: sizeRatio(65),
                fontSize: sizeRatio(20),
              }}
            />
            <span
              style={{
                width: sizeRatio(65),
              }}
            >
              {row.stats.star}
            </span>
            <AiOutlineHeart
              style={{
                color: "#FFB600",
                fontSize: sizeRatio(20),
                width: sizeRatio(65),
              }}
            />
            <span
              style={{
                width: sizeRatio(65),
              }}
            >
              {row.stats.thunder}
            </span>
            <AiOutlineFire
              style={{
                color: "#EF4444",
                fontSize: sizeRatio(20),
                width: sizeRatio(65),
              }}
            />
            <span style={{}}>{row.stats.fire}</span>
          </TableCell>
        </TableRow>
        <TableRow>
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
        </TableRow>
      </Fragment>
    );
  };

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
      kpi: PropTypes.number.isRequired,
    }).isRequired,
  };
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="#"
      onClick={() => {
        navigate("/JobList");
        setCurrentSectionAtom("JobList");
      }}
      style={{
        fontFamily: "Helvetica",
        fontWeight: 400,
        fontSize: sizeRatio(20),
        color: "#061123",
      }}
    >
      Job List
    </Link>,
    <Typography
      key="2"
      color="text.primary"
      style={{
        fontFamily: "Helvetica",
        fontWeight: 700,
        fontSize: sizeRatio(20),
        color: "#ECAE13",
      }}
    >
      Account Detail
    </Typography>,
  ];
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
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: sizeRatio(isExpand ? 948 : 1080),
                marginTop: sizeRatio(32),
                marginBottom: sizeRatio(42),
              }}
            >
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
              <IoArrowBackCircleOutline
                onClick={() => {
                  navigate("/JobList");
                  setCurrentSectionAtom("JobList");
                }}
                style={{
                  marginTop: sizeRatio(40),
                  marginBottom: sizeRatio(24),
                  fontSize: sizeRatio(48),
                }}
              />
              <div
                style={{
                  fontFamily: "Helvetica",
                  fontWeight: 700,
                  fontSize: sizeRatio(16),
                }}
              >
                ronin:1248eyfehsaoidhf1351
                <FiCopy />
              </div>
              <div
                style={{
                  fontFamily: "Helvetica",
                  fontWeight: 300,
                  fontSize: sizeRatio(48),
                }}
              >
                Axie
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: sizeRatio(16),
                    marginLeft: sizeRatio(5),
                  }}
                >
                  #000123456
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#475569",
                  width: sizeRatio(155),
                  height: sizeRatio(32),
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: sizeRatio(8),
                  color: "#6EE787",
                  fontFamily: "Helvetica",
                  fontWeight: 700,
                  fontSize: sizeRatio(12),
                }}
              >
                <FiAward
                  style={{
                    fontSize: sizeRatio(16),
                  }}
                />
                AXS REWARD 40%
              </div>
              <div
                style={{
                  marginTop: sizeRatio(40),
                  display: "flex",
                  flex: 1,
                  fontFamily: "Helvetica",
                  fontWeight: 300,
                  fontSize: sizeRatio(20),
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    marginRight: sizeRatio(10),
                  }}
                >
                  <div>Email</div>
                  <input
                    defaultValue="Hiveres@gmail.com"
                    style={{
                      borderRadius: sizeRatio(8),
                      borderWidth: "1px",
                      fontFamily: "Helvetica",
                      fontWeight: 400,
                      fontSize: sizeRatio(20),
                      marginTop: sizeRatio(16),
                      paddingLeft: sizeRatio(12),
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    marginLeft: sizeRatio(10),
                  }}
                >
                  <div>Password</div>
                  <input
                    defaultValue="Hiveres"
                    style={{
                      borderRadius: sizeRatio(8),
                      borderWidth: "1px",
                      fontFamily: "Helvetica",
                      fontWeight: 400,
                      fontSize: sizeRatio(20),
                      marginTop: sizeRatio(16),
                      paddingLeft: sizeRatio(12),
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  width: sizeRatio(isExpand ? 948 : 1080),
                  display: "flex",
                  backgroundColor: "#FFFFFF",
                  borderRadius: sizeRatio(12),
                  justifyContent: "space-between",
                  paddingBlock: sizeRatio(15),
                  paddingInline: sizeRatio(24),
                  marginBlock: sizeRatio(24),
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FiPercent
                    style={{
                      color: "#0F172A",
                      fontSize: sizeRatio(27),
                      marginRight: sizeRatio(25),
                      border: "1.5px solid black",
                      padding: sizeRatio(2),
                      borderRadius: 20,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 700,
                        fontSize: sizeRatio(20),
                      }}
                    >
                      Active Accounts
                    </div>
                    <div
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 400,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      12/20
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FiAward
                    style={{
                      color: "#0F172A",
                      fontSize: sizeRatio(27),
                      marginRight: sizeRatio(25),
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 700,
                        fontSize: sizeRatio(20),
                      }}
                    >
                      Yesterday Revenue
                    </div>
                    <div
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 400,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      48
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <ImPower
                    style={{
                      color: "#0F172A",
                      fontSize: sizeRatio(27),
                      marginRight: sizeRatio(25),
                    }}
                  />

                  <div>
                    <div
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 700,
                        fontSize: sizeRatio(20),
                      }}
                    >
                      Total Payout
                    </div>
                    <div
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 400,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      314
                    </div>
                  </div>
                </div>
                <div
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
                  <div>
                    <div
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 700,
                        fontSize: sizeRatio(20),
                      }}
                    >
                      Total Revenue
                    </div>
                    <div
                      style={{
                        fontFamily: "Helvetica",
                        fontWeight: 400,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      314,567
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Helvetica",
                  fontWeight: 300,
                  fontSize: sizeRatio(36),
                }}
              >
                Inventory
              </div>

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
                          Class
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            fontFamily: "Helvetica",
                            fontWeight: 700,
                            fontSize: sizeRatio(16),
                          }}
                        >
                          Stats
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
          </div>
        </div>
      </Box>
    </div>
  );
};
export default AccountDetail;
