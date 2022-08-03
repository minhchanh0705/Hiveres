import { Paper, TablePagination, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { sizeRatio } from "@/theme";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NavBar from "@/components/NavBar";
import DrawerComponent from "@/components/DrawerComponent";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentSectionAtom, isExpandAtom } from "@/recoil/atoms";
import { useNavigate } from "react-router-dom";
import { FiAward, FiSearch } from "react-icons/fi";
import SearchComponent from "@/components/SearchComponent";

const JobList = () => {
  const isExpand = useRecoilValue(isExpandAtom);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [keywordSearch, setKeywordSearch] = useState("");
  const setCurrentSectionAtom = useSetRecoilState(currentSectionAtom);
  let navigate = useNavigate();

  useEffect(() => {
    currentSectionAtom !== "JobList" && setCurrentSectionAtom("JobList");
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const searchJob = (char) => {
    console.log(char);
    // setKeywordSearch(char);
  };

  const imgPets = [
    "https://pngset.com/images-original/axie-marketplace-white-aqua-axie-egg-food-animal-fish-transparent-png-2568119.png",
    "https://pngset.com/images-original/axie-marketplace-axie-chopsuey-food-birthday-cake-dessert-egg-transparent-png-2614883.png",
    "https://pngset.com/images-original/axie-marketplace-nimo-axie-egg-food-animal-sea-life-transparent-png-2920166.png",
  ];

  const createData = (id, isAward, name, pets, kpi) => {
    return {
      id,
      isAward,
      name,
      pets,
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
    createData(1, true, "Axie #1", imgPets, 60),
    createData(2, false, "Axie #2", imgPets, 60),
    createData(3, true, "Axie #3", imgPets, 60),
    createData(4, false, "Axie #4", imgPets, 60),
    createData(5, false, "Axie #5", imgPets, 60),
    createData(6, true, "Axie #6", imgPets, 60),
    createData(7, false, "Axie #7", imgPets, 60),
    createData(8, true, "Axie #8", imgPets, 60),
    createData(9, true, "Axie #9", imgPets, 60),
    createData(10, false, "Axie #10", imgPets, 60),
    createData(11, false, "Axie #11", imgPets, 60),
    createData(12, true, "Axie #12", imgPets, 60),
    createData(13, false, "Axie #13", imgPets, 60),
    createData(14, true, "Axie #14", imgPets, 60),
    createData(15, false, "Axie #15", imgPets, 60),
    createData(16, false, "Axie #16", imgPets, 60),
    createData(17, true, "Axie #17", imgPets, 60),
    createData(18, true, "Axie #18", imgPets, 60),
    createData(19, false, "Axie #19", imgPets, 60),
    createData(20, true, "Axie #20", imgPets, 60),
    createData(21, false, "Axie #21", imgPets, 60),
    createData(22, false, "Axie #22", imgPets, 60),
  ];

  const Row = ({ row }) => {
    const handleJobsAccountDetail = () => {
      navigate(`/JobsAccountDetail`, {
        state: {
          id: row.id,
          walletId: "3ea702b8335e98adbc6f8fc9af43750c92bb8489",
        },
      });
    };
    return (
      <Fragment>
        <TableRow
          hover
          sx={{ "& > *": { borderWidth: "0px" }, height: sizeRatio(83) }}
          onClick={handleJobsAccountDetail}
        >
          <TableCell align="center">
            {row.isAward && (
              <FiAward
                style={{
                  marginRight: sizeRatio(4),
                  fontSize: sizeRatio(24),
                }}
              />
            )}
          </TableCell>
          <TableCell
            style={{
              width: sizeRatio(353.33),
              fontSize: sizeRatio(16),
            }}
            align="center"
          >
            {row.name}
          </TableCell>
          <TableCell
            align="center"
            style={{
              width: sizeRatio(353.33),
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
              width: sizeRatio(353.33),
              fontSize: sizeRatio(16),
            }}
          >
            {row.kpi}
          </TableCell>
        </TableRow>
      </Fragment>
    );
  };

  return (
    <Box style={{ backgroundColor: "#F1F5F9" }}>
      <NavBar />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          overflow: "scroll",
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
            marginInline: sizeRatio(30),
          }}
        >
          <Box
            style={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              marginTop: sizeRatio(32),
              marginBottom: sizeRatio(42),
              fontWeight: 700,
              fontSize: sizeRatio(20),
            }}
          >
            Job List
          </Box>
          <Paper
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              borderRadius: sizeRatio(16),
              paddingInline: sizeRatio(32),
              backgroundColor: "#FFFFFF",
              paddingBottom: sizeRatio(16),
            }}
          >
            <Box
              style={{
                marginTop: sizeRatio(35),
                marginBottom: sizeRatio(24),
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
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

              <SearchComponent handleSearchChange={searchJob} />
            </Box>
            <TableContainer>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        fontWeight: 700,
                        fontSize: sizeRatio(16),
                      }}
                    >
                      Pets
                    </TableCell>

                    <TableCell
                      align="center"
                      style={{
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
export default JobList;
