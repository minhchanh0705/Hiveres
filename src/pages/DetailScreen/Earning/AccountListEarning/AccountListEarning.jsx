import { isExpandAtom } from "@/recoil/atoms";
import { colors, sizeRatio } from "@/theme";
import {
  Box,
  Button,
  Menu,
  Paper,
  Slider,
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
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import AccountListRow from "./AccountListRow/AccountListRow";
import AddAccount from "./AddAccount/AddAccount";
import { accountList } from "../jsonData/accountList.json";
import { styled, alpha } from "@mui/material/styles";
import CheckboxList from "@/components/CheckboxList";
import { FiGitPullRequest } from "react-icons/fi";
import SearchComponent from "@/components/SearchComponent";

const AccountListEarning = ({ tabEarning }) => {
  const isExpand = useRecoilValue(isExpandAtom);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [valueMain, setValueMain] = useState([0, 100]);
  const [showAddAccountModal, setShowAddAccountModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { NeutralDay000 } = colors;
  const navigate = useNavigate();

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
      "& .MuiSlider-markLabel": {
        color: "white",
        fontSize: sizeRatio(10),
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

  const lstStatus = ["In Proccess", "Pending"];

  const marks = [
    {
      value: 25,
      label: "25",
    },
    {
      value: 70,
      label: "70",
    },
  ];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const searchAccount = (char) => {
    // setKeywordSearch(char);
  };

  const valuetext = (value) => {
    return `${value}%`;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const headerStyle = {
    textAlign: "center",
    fontWeight: 700,
    fontSize: sizeRatio(16),
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const FilterMenu = () => {
    const [value, setValue] = useState(valueMain);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
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
            marginInline: sizeRatio(24),
          }}
        >
          <Typography
            style={{
              fontWeight: 700,
              fontSize: sizeRatio(16),
              color: "#FFFFFF",
            }}
          >
            Status
          </Typography>

          <Box
            style={{
              width: "100%",
              backgroundColor: "#1E293B",
              maxHeight: sizeRatio(176),
            }}
          >
            <CheckboxList
              bgcolor="#1E293B"
              txtColor="#FFF"
              lstItems={lstStatus}
              nameCheckbox="Status"
            />
          </Box>
          <Typography
            style={{
              fontWeight: 700,
              fontSize: sizeRatio(16),
              color: "#FFFFFF",
            }}
          >
            Percentage
          </Typography>

          <Slider
            getAriaLabel={() => "Percentage range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{
              color: "#ECAE13",
            }}
            marks={marks}
          />
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
            onClick={() => {
              setValueMain(value);
              handleClose();
            }}
          >
            Confirm
          </Button>
        </Box>
      </StyledMenu>
    );
  };

  return (
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
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontWeight: 700,
            fontSize: sizeRatio(24),
          }}
        >
          Accounts list
        </Typography>
        <Box
          style={{
            display: "flex",
            flex: 1,
            marginRight: sizeRatio(20),
            justifyContent: "flex-end",
          }}
        >
          <SearchComponent handleSearchChange={searchAccount} />
        </Box>
        <Box
          style={{
            display: "flex",
            height: sizeRatio(22),
          }}
        >
          <Button
            id="filter-button"
            style={{
              outline: "none",
              height: sizeRatio(32),
              backgroundColor: "#061123",
              borderRadius: "8px",
              paddingInline: sizeRatio(15),
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
          <FilterMenu />

          <Button
            style={{
              outline: "none",
              height: sizeRatio(32),
              borderRadius: "8px",
              backgroundColor: NeutralDay000,
              marginLeft: sizeRatio(5),
              paddingInline: sizeRatio(15),
            }}
            onClick={() => {
              tabEarning === "invest"
                ? setShowAddAccountModal(true)
                : navigate("/JobList");
            }}
          >
            <Typography
              style={{
                color: "#FFFFFF",
                marginRight: sizeRatio(5),
                fontSize: sizeRatio(14),
              }}
            >
              {tabEarning === "invest" ? "Add Account" : "Take Account"}
            </Typography>
            <IoIosAddCircleOutline
              style={{
                color: "#FFFFFF",
                fontSize: sizeRatio(24),
              }}
            />
          </Button>
          <AddAccount
            showAddAccountModal={showAddAccountModal}
            setShowAddAccountModal={setShowAddAccountModal}
          />
        </Box>
      </Box>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell style={headerStyle}>Name</TableCell>
              <TableCell style={headerStyle}>Pets</TableCell>
              <TableCell style={headerStyle}>Status</TableCell>
              <TableCell style={headerStyle}>SLP/Yesterday</TableCell>
              <TableCell style={headerStyle}>KPI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accountList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <AccountListRow
                    key={row.id}
                    row={row}
                    tabEarning={tabEarning}
                  />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={accountList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default AccountListEarning;
