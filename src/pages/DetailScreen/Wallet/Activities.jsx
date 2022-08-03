import { colors, sizeRatio } from "@/theme";
import {
  Box,
  Button,
  Menu,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { FiGitPullRequest } from "react-icons/fi";
import { rows } from "./jsonData/rows.json";
import RowWalletList from "./RowWalletList";
import { styled, alpha } from "@mui/material/styles";
import CheckboxList from "@/components/CheckboxList";
import SearchComponent from "@/components/SearchComponent";

const Activity = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const { NeutralDay000 } = colors;

  const lstAssets = ["HVR", "SLP", "BTC", "ETH", "STEPN"];
  const lstActions = ["Deposit", "Withdraw", "Lock", "Staking"];
  const headerStyle = {
    textAlign: "center",
    fontWeight: 700,
    fontSize: sizeRatio(16),
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

  const searchActivities = (char) => {
    console.log(char);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
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
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            style={{
              marginRight: sizeRatio(20),
            }}
          >
            <SearchComponent handleSearchChange={searchActivities} />
          </Box>
          <Button
            id="filter-button"
            style={{
              width: sizeRatio(116),
              outline: "none",
              backgroundColor: "#061123",
              borderRadius: "8px",
            }}
            aria-haspopup="true"
            disableElevation
            onClick={handleClick}
            endIcon={
              <FiGitPullRequest
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
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  outline: "none",
                  width: sizeRatio(232),
                  height: sizeRatio(32),
                  paddingInline: sizeRatio(24),
                  color: NeutralDay000,
                  fontWeight: 400,
                  fontSize: sizeRatio(14),
                  backgroundColor: "#FFB600",
                }}
                onClick={handleClose}
              >
                Confirm
              </Button>
            </Box>
          </StyledMenu>
        </Box>
      </Box>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell style={headerStyle}></TableCell>
              <TableCell style={headerStyle}>Amount</TableCell>
              <TableCell style={headerStyle}>From/To</TableCell>
              <TableCell style={headerStyle}>Action</TableCell>
              <TableCell style={headerStyle}>Date</TableCell>
              <TableCell style={headerStyle}>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return <RowWalletList key={row.id} row={row} />;
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
        onPageChange={(event, newPage) => {
          setPage(newPage);
        }}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        }}
      />
    </Box>
  );
};
export default Activity;
