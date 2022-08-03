import { Fragment, useState } from "react";
import { rows1 } from "./jsonData/rows1.json";
import { rows2 } from "./jsonData/rows2.json";
import {
  Box,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { colors, sizeRatio } from "@/theme";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const CoinList = () => {
  const [page1, setPage1] = useState(0);
  const [rows1PerPage, setRows1PerPage] = useState(5);
  const [typeLstCoin, setTypeLstCoin] = useState("locked");
  const [rows, setRows] = useState(rows1);
  const { NeutralDay000 } = colors;

  const handleChangeRows1PerPage = (event) => {
    setRows1PerPage(+event.target.value);
    setPage1(0);
  };
  const handleChange1Page = (event, newPage) => {
    setPage1(newPage);
  };

  const handleChangeTypeLstCoin = () => {
    if (typeLstCoin === "locked") {
      setRows(rows2);
      setTypeLstCoin("usable");
    } else {
      setTypeLstCoin("locked");
      setRows(rows1);
    }
  };

  const lstToken = {
    BTC: "Bitcoin",
    ETH: "Entherium",
    SLP: "Smooth Love Potion",
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

  const styles = {
    headerTxt: {
      fontWeight: 700,
      fontSize: sizeRatio(16),
      color: NeutralDay000,
    },
    txtReason: {
      textAlign: "left",
      width: sizeRatio(169.6),
      fontSize: sizeRatio(14),
    },
  };

  const DataCoinLock = ({ r }) => {
    return (
      <>
        <TableCell
          style={{
            textAlign: "left",
            width: sizeRatio(389.6),
            fontSize: sizeRatio(14),
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              fontWeight: 700,
              fontSize: sizeRatio(12),
            }}
          >
            <Icon iconName={r.asset[0]} />
            <Box>
              <Typography style={styles.headerTxt}>{r.asset[0]}</Typography>
              <Typography
                style={{
                  fontWeight: 700,
                  fontSize: sizeRatio(12),
                }}
              >
                {r.asset[1]}
              </Typography>
            </Box>
          </Box>
        </TableCell>
        <TableCell>
          <Typography style={styles.headerTxt}>{r.reason[0]}</Typography>
          <Typography style={styles.txtReason}>{r.reason[1]}</Typography>
        </TableCell>
        <TableCell>
          <Typography
            style={{
              textAlign: "right",
              width: sizeRatio(119.6),
              fontWeight: 700,
              fontSize: sizeRatio(16),
              color: "#B91C1C",
            }}
          >
            {r.amount}
          </Typography>
        </TableCell>
      </>
    );
  };

  const DataCoinUsable = ({ r }) => {
    return (
      <>
        <TableCell
          style={{
            textAlign: "left",
            width: sizeRatio(389.6),
            fontSize: sizeRatio(14),
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              fontWeight: 700,
              fontSize: sizeRatio(12),
            }}
          >
            <Icon iconName={r.asset[0]} />
            <Box>
              <Typography style={styles.headerTxt}>{r.asset[0]}</Typography>
              <Typography
                style={{
                  fontWeight: 700,
                  fontSize: sizeRatio(12),
                }}
              >
                {r.asset[1]}
              </Typography>
            </Box>
          </Box>
        </TableCell>
        <TableCell
          style={{
            fontWeight: 700,
            fontSize: sizeRatio(16),
            color: r.price[0] === "ins" ? "#047857" : "#B91C1C",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {r.price[0] === "ins" ? <FiArrowUp /> : <FiArrowDown />}
            <Typography
              style={{
                fontWeight: 700,
                fontSize: sizeRatio(16),
                width: sizeRatio(169.6),
              }}
            >
              {" "}
              {r.price[1]}
            </Typography>
          </Box>
          <Typography style={{ fontWeight: 400, fontSize: sizeRatio(14) }}>
            {r.price[2]}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography
            style={{
              textAlign: "right",
              width: sizeRatio(119.6),
              fontWeight: 700,
              fontSize: sizeRatio(16),
              color: "#B91C1C",
            }}
          >
            {r.balance[0]}
          </Typography>
          <Typography
            style={{
              textAlign: "right",
              width: sizeRatio(119.6),
              fontWeight: 400,
              fontSize: sizeRatio(14),
              color: "#B91C1C",
            }}
          >
            {r.balance[1]}
          </Typography>
        </TableCell>
      </>
    );
  };

  const RowsCoinList = ({ r }) => {
    return (
      <Fragment>
        <TableRow
          hover
          style={{
            height: sizeRatio(90),
          }}
        >
          {typeLstCoin === "locked" ? (
            <DataCoinLock r={r} />
          ) : (
            <DataCoinUsable r={r} />
          )}
        </TableRow>
      </Fragment>
    );
  };

  return (
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
        <Typography style={styles.headerTxt}>Coin List</Typography>
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
            onClick={handleChangeTypeLstCoin}
          />
          <Typography
            style={{ ...styles.headerTxt, paddingInline: sizeRatio(14) }}
          >
            {typeLstCoin === "locked" ? "USABLE" : "LOCKED"}
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
                <TableCell align="left" style={styles.headerTxt}>
                  Asset
                </TableCell>
                <TableCell align="left" style={styles.headerTxt}>
                  {typeLstCoin === "locked" ? "Reason" : "Prices"}
                </TableCell>
                <TableCell align="right" style={styles.headerTxt}>
                  {typeLstCoin === "locked" ? "Amount" : "Balance"}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(
                  page1 * rows1PerPage,
                  page1 * rows1PerPage + rows1PerPage
                )
                .map((row) => {
                  return <RowsCoinList key={row.id} r={row} />;
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
  );
};
export default CoinList;
