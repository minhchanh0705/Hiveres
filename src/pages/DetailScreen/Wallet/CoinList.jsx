import { Fragment, useState } from "react";
import { rows1 } from "./jsonData/rows1.json";
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
import { sizeRatio } from "@/theme";
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
const RowsCoinList = ({ r1 }) => {
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
const CoinList = () => {
  const [page1, setPage1] = useState(0);
  const [rows1PerPage, setRows1PerPage] = useState(5);

  const handleChangeRows1PerPage = (event) => {
    setRows1PerPage(+event.target.value);
    setPage1(0);
  };
  const handleChange1Page = (event, newPage) => {
    setPage1(newPage);
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
                .map((rows1) => {
                  return <RowsCoinList key={rows1.id} r1={rows1} />;
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
