import {
  Breadcrumbs,
  Button,
  CircularProgress,
  Link,
  Paper,
  TablePagination,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { ImPower } from "react-icons/im";
import { FiAward, FiCopy, FiEdit } from "react-icons/fi";
import { IoArrowBackCircleOutline, IoServerOutline } from "react-icons/io5";
import { colors, sizeRatio, space, text } from "@/theme";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { TbSword } from "react-icons/tb";

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
import { useRecoilValue } from "recoil";
import { isExpandAtom } from "@/recoil/atoms";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineFire,
  AiOutlineHeart,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { GrMoney, GrPlan } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import RedealComponent from "./RedealComponent/RedealComponent";

import axios from "axios";
import { BsFillShieldFill } from "react-icons/bs";

const EarningAccountDetail = () => {
  const { state } = useLocation();
  const { id, tabEarning, walletId } = state;
  const isExpand = useRecoilValue(isExpandAtom);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [keywordSearch, setKeywordSearch] = useState("");
  const [isHaveRedealNoti, setIsHaveRedealNoti] = useState(true);
  const [accountInformations, setAccountInformations] = useState(null);
  const [lstPetIds, setLstPetIds] = useState(null);

  const {
    NeutralDay000,
    NeutralDay900,
    ErrorRed600,
    SecondaryYellow700,
    PrimaryBlue900,
  } = colors;

  const {
    S16W700,
    S14W400,
    S13W700,
    S14W700,
    S16W400,
    S36W300,
    S20W700,
    S20W300,
    S20W400,
    S12W700,
    S8W300,
  } = text;

  const {
    Row,
    RowSpaceBetween,
    RowCenter,
    RowBaseline,
    RowSpaceAround,
    FlexCol,
  } = space;

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      async function fetchPetIdsAPI() {
        let response = await axios.post(
          "https://graphql-gateway.axieinfinity.com/graphql",
          {
            operationName: "GetAxieBriefList",
            variables: {
              owner: `0x${walletId}`,
            },
            query: `query GetAxieBriefList(
              $owner: String
            ) {
              axies(
                owner: $owner
              ) {
                total
                results {
                  id
                }
              }
            }
           `,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        response?.status === 200 &&
          setLstPetIds(response.data.data.axies.results.map((e) => e.id));
      }
      fetchPetIdsAPI();
    } catch (error) {
      console.log({ error });
    }
  }, []);

  useEffect(() => {
    if (lstPetIds) {
      try {
        let lstDetailPets = [];
        for (let index = 0; index < lstPetIds.length; index++) {
          const idPet = lstPetIds[index];

          async function fetchPetDetailAPI() {
            let response = await axios.post(
              "https://graphql-gateway.axieinfinity.com/graphql",
              {
                operationName: "GetAxieDetail",
                variables: {
                  axieId: idPet,
                },
                query: `query GetAxieDetail($axieId: ID!) {
              axie(axieId: $axieId) {
                ...AxieDetail
                __typename
              }
            }
            
            fragment AxieDetail on Axie {
              id
              image
              class
              chain
              name
              genes
              owner
              birthDate
              bodyShape
              class
              sireId
              sireClass
              matronId
              matronClass
              stage
              title
              breedCount
              level
              figure {
                atlas
                model
                image
                __typename
              }
              parts {
                ...AxiePart
                __typename
              }
              stats {
                ...AxieStats
                __typename
              }
              auction {
                ...AxieAuction
                __typename
              }
              ownerProfile {
                name
                __typename
              }
              battleInfo {
                ...AxieBattleInfo
                __typename
              }
              children {
                id
                name
                class
                image
                title
                stage
                __typename
              }
              __typename
            }
            
            fragment AxieBattleInfo on AxieBattleInfo {
              banned
              banUntil
              level
              __typename
            }
            
            fragment AxiePart on AxiePart {
              id
              name
              class
              type
              specialGenes
              stage
              abilities {
                ...AxieCardAbility
                __typename
              }
              __typename
            }
            
            fragment AxieCardAbility on AxieCardAbility {
              id
              name
              attack
              defense
              energy
              description
              backgroundUrl
              effectIconUrl
              __typename
            }
            
            fragment AxieStats on AxieStats {
              hp
              speed
              skill
              morale
              __typename
            }
            
            fragment AxieAuction on Auction {
              startingPrice
              endingPrice
              startingTimestamp
              endingTimestamp
              duration
              timeLeft
              currentPrice
              currentPriceUSD
              suggestedPrice
              seller
              listingIndex
              state
              __typename
            }
           `,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            lstDetailPets.push(response.data.data.axie);
            if (lstDetailPets.length === lstPetIds.length) {
              setAccountInformations(lstDetailPets);
            }
          }
          fetchPetDetailAPI();
        }
      } catch (error) {
        console.log({ error });
      }
    }
  }, [lstPetIds]);

  const styles = {
    styleIcon: { ...S20W400, width: sizeRatio(65) },
    btnHandleAccount: {
      display: "flex",
      outline: "none",
      justifyContent: "center",
      color: NeutralDay900,
      width: sizeRatio(160),
      height: sizeRatio(48),
      marginInline: sizeRatio(16),
      paddingInline: sizeRatio(32),
      borderRadius: sizeRatio(8),
    },
    inputStyle: {
      ...S20W400,
      borderRadius: sizeRatio(8),
      height: sizeRatio(48),
      borderWidth: "0px",
      fontSize: sizeRatio(20),
      marginTop: sizeRatio(16),
      paddingLeft: sizeRatio(12),
      color: NeutralDay000,
    },
    txtScoreAttack: {
      ...RowCenter,
      textAlign: "center",
      position: "absolute",
      top: sizeRatio(3),
      left: sizeRatio(0),
      width: sizeRatio(36),
      fontSize: sizeRatio(18),
      WebkitTextStroke: "1px #7d451b",
      fontWeight: 900,
      fontFamily: "Changa One",
      color: "#FFF",
      zIndex: 2,
    },
    boxScoreAttack: {
      left: sizeRatio(-20),
      position: "relative",
    },
  };

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

  const rows = accountInformations?.map((info) => {
    const lstAbilities = info.parts
      .filter((part) => part.abilities.length > 0)
      .map((e) => e.abilities[0]);
    return {
      id: info.id,
      pet: info.image,
      name: info.name,
      skill: info.class,
      stats: info.stats,
      abilities: lstAbilities.length > 0 ? lstAbilities : [],
    };
  });

  const RowPet = ({ row }) => {
    const [open, setOpen] = useState(false);
    return (
      <Fragment>
        <TableRow
          hover
          sx={{ height: sizeRatio(83), borderWidth: "0px" }}
          onClick={() => setOpen(!open)}
        >
          <TableCell
            style={{
              width: sizeRatio(369),
              borderWidth: "0px",
            }}
          >
            <Box style={RowCenter}>
              <img
                alt="iconPet"
                src={row.pet}
                style={{
                  width: sizeRatio(55),
                  marginRight: sizeRatio(10),
                }}
              />
              <Typography style={S16W400}>{row.name}</Typography>
            </Box>
          </TableCell>

          <TableCell
            align="center"
            style={{
              width: sizeRatio(369),
              borderWidth: "0px",
            }}
          >
            <Typography style={S16W400}>{row.skill}</Typography>
          </TableCell>
          <TableCell
            align="center"
            style={{ ...S16W400, width: sizeRatio(426), borderWidth: "0px" }}
          >
            <Box style={Row}>
              <AiOutlineHeart
                style={{
                  ...styles.styleIcon,
                  color: "#10B981",
                }}
              />
              <Typography style={S16W400}> {row.stats.hp}</Typography>
              <AiOutlineThunderbolt
                style={{
                  ...styles.styleIcon,
                  color: "#061123",
                }}
              />
              <Typography style={S16W400}> {row.stats.speed}</Typography>
              <AiOutlineHeart
                style={{ ...styles.styleIcon, color: "#FFB600" }}
              />
              <Typography style={S16W400}> {row.stats.skill}</Typography>
              <AiOutlineFire
                style={{ ...styles.styleIcon, color: "#EF4444" }}
              />
              <Typography style={S16W400}> {row.stats.morale}</Typography>
            </Box>
          </TableCell>
        </TableRow>
        <TableRow
          style={{
            borderTopWidth: "1px",
            borderBottomWidth: "0px",
          }}
        >
          <TableCell
            style={{
              paddingBottom: 0,
              paddingTop: 0,
            }}
            colSpan={7}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ ...RowSpaceAround }}>
                {row.abilities.length > 0 &&
                  row.abilities.map(
                    ({
                      attack,
                      defense,
                      effectIconUrl,
                      backgroundUrl,
                      energy,
                      name,
                      description,
                    }) => (
                      <Box
                        style={{
                          marginBlock: sizeRatio(15),
                        }}
                      >
                        <img
                          style={{
                            position: "relative",
                            top: 0,
                            left: 0,
                            width: sizeRatio(160),
                            height: sizeRatio(230),
                          }}
                          src={
                            backgroundUrl
                            // "https://cdn.axieinfinity.com/game/origin-cards/base/version-20220527/aquatic-eyes-04.png"
                          }
                          alt=""
                        />
                        <Typography
                          style={{
                            position: "relative",
                            display: "flex",
                            top: sizeRatio(-225),
                            left: sizeRatio(15),
                            zIndex: 1,
                            WebkitTextStroke: "1px #7d451b",
                            height: 0,
                            fontSize: sizeRatio(24),
                            fontWeight: 900,
                            color: "#FFF",
                            fontFamily: "Changa One",
                          }}
                        >
                          {energy}
                        </Typography>
                        <Typography
                          style={{
                            ...S13W700,
                            position: "relative",
                            display: "flex",
                            top: sizeRatio(-215),
                            left: sizeRatio(45),
                            zIndex: 1,
                            height: 0,
                            color: "#FFF",
                            fontFamily: "Changa One",
                          }}
                        >
                          {name}
                        </Typography>
                        <Box
                          style={{
                            ...styles.boxScoreAttack,
                            top: sizeRatio(-185),
                            height: 0,
                          }}
                        >
                          <TbSword
                            style={{
                              color: "#B62D46",
                              fill: "#B62D46",
                              backgroundColor: "#344829",
                              height: sizeRatio(36),
                              width: sizeRatio(36),
                              borderRadius: 100,
                              padding: sizeRatio(3),
                            }}
                          />
                          <Typography style={styles.txtScoreAttack}>
                            {attack}
                          </Typography>
                        </Box>
                        <Box
                          style={{
                            ...styles.boxScoreAttack,
                            top: sizeRatio(-135),
                            height: 0,
                          }}
                        >
                          <BsFillShieldFill
                            style={{
                              color: "#239163",
                              backgroundColor: "#344829",
                              height: sizeRatio(36),
                              width: sizeRatio(36),
                              padding: sizeRatio(6),
                              borderRadius: 100,
                            }}
                          />
                          <Typography style={styles.txtScoreAttack}>
                            {defense}
                          </Typography>
                        </Box>

                        <Box
                          style={{
                            display: "flex",
                            top: sizeRatio(-60),
                            left: sizeRatio(-1),
                            height: 0,
                            width: sizeRatio(130),
                            position: "relative",
                            zIndex: 1,
                            marginInline: sizeRatio(17),
                          }}
                        >
                          <img
                            style={{
                              position: "relative",
                              left: sizeRatio(-12),
                              top: sizeRatio(5),
                              width: sizeRatio(24),
                              height: sizeRatio(24),
                            }}
                            src={effectIconUrl}
                            alt=""
                          />
                          <Typography
                            style={{
                              ...S8W300,
                              fontFamily: "Changa One",
                              color: "#FFF",
                            }}
                          >
                            {description}
                          </Typography>
                        </Box>
                      </Box>
                    )
                  )}
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>
    );
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="#"
      onClick={() => {
        navigate("/Earning");
      }}
      style={{
        fontSize: sizeRatio(20),
        color: "#061123",
      }}
    >
      Earning
    </Link>,
    <Typography
      key="2"
      color="inherit"
      style={{
        fontSize: sizeRatio(20),
        color: "#061123",
      }}
    >
      {tabEarning === "invest" && "Invest"}
      {tabEarning === "jobs" && "Jobs"}
    </Typography>,
    <Typography
      key="3"
      color="text.primary"
      style={{ ...S20W700, color: "#ECAE13" }}
    >
      Account Detail
    </Typography>,
  ];

  return (
    <Box style={{ backgroundColor: "#F1F5F9" }}>
      <NavBar />
      <Box
        style={{
          display: "flex",
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
          }}
        >
          <Box
            style={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              marginTop: sizeRatio(32),
              marginInline: sizeRatio(30),
            }}
          >
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>

            <Button
              style={{
                marginTop: sizeRatio(40),
                marginBottom: sizeRatio(24),
                color: NeutralDay000,
                outline: "none",
              }}
              onClick={() => {
                navigate("/Earning");
              }}
            >
              <IoArrowBackCircleOutline
                style={{
                  fontSize: sizeRatio(48),
                }}
              />
            </Button>
            <Box style={Row}>
              <Typography
                style={{
                  ...S16W700,
                  marginLeft: sizeRatio(5),
                }}
              >
                ronin:{walletId}
              </Typography>
              <Button
                style={{
                  minHeight: 0,
                  minWidth: 0,
                  padding: sizeRatio(10),
                  outline: "none",
                }}
              >
                <FiCopy
                  style={{
                    color: NeutralDay000,
                    fontSize: sizeRatio(20),
                  }}
                />
              </Button>
            </Box>
            <Box style={RowBaseline}>
              <Typography
                style={{
                  fontSize: sizeRatio(48),
                }}
              >
                Axie
              </Typography>
              <Box style={{ ...S16W400, ...Row, marginLeft: sizeRatio(5) }}>
                <Typography style={{ ...S14W700, marginRight: sizeRatio(5) }}>
                  #000123456
                </Typography>
                <Button
                  style={{
                    minHeight: 0,
                    minWidth: 0,
                    padding: sizeRatio(10),
                    outline: "none",
                  }}
                >
                  <FiEdit
                    style={{
                      color: NeutralDay000,
                      fontSize: sizeRatio(20),
                    }}
                  />
                </Button>
              </Box>
            </Box>
            <Box
              style={{
                ...RowCenter,
                ...S12W700,
                backgroundColor: "#475569",
                width: sizeRatio(155),
                height: sizeRatio(32),
                borderRadius: sizeRatio(8),
                color: "#6EE787",
              }}
            >
              <FiAward style={S16W400} />
              AXS REWARD 40%
            </Box>
            {isHaveRedealNoti && (
              <RedealComponent setIsHaveRedealNoti={setIsHaveRedealNoti} />
            )}
            <Box
              style={{ ...S20W300, ...Row, marginTop: sizeRatio(40), flex: 1 }}
            >
              <Box style={{ ...FlexCol, flex: 1, marginRight: sizeRatio(10) }}>
                <Box style={RowSpaceBetween}>
                  <Typography>Email</Typography>
                  {tabEarning === "invest" && (
                    <Button
                      style={{
                        outline: "none",
                      }}
                    >
                      <FiEdit
                        style={{
                          fontSize: sizeRatio(22),
                          color: NeutralDay000,
                        }}
                      ></FiEdit>
                    </Button>
                  )}
                </Box>
                <input
                  defaultValue="Hiveres@gmail.com"
                  style={{
                    ...styles.inputStyle,
                    backgroundColor: tabEarning === "invest" && "#FFF",
                    borderWidth: tabEarning === "jobs" ? "1px" : "0px",
                  }}
                  disabled={tabEarning === "jobs"}
                />
              </Box>
              <Box
                style={{
                  ...FlexCol,
                  flex: 1,
                  marginLeft: sizeRatio(10),
                }}
              >
                <Box style={RowSpaceBetween}>
                  <Typography>Password</Typography>
                  {tabEarning === "invest" && (
                    <Button
                      style={{
                        outline: "none",
                      }}
                    >
                      <FiEdit
                        style={{
                          fontSize: sizeRatio(22),
                          color: NeutralDay000,
                        }}
                      ></FiEdit>
                    </Button>
                  )}
                </Box>

                <input
                  defaultValue="Hiveres"
                  style={{
                    ...styles.inputStyle,
                    backgroundColor: tabEarning === "invest" && "#FFF",
                    borderWidth: tabEarning === "jobs" ? "1px" : "0px",
                  }}
                  disabled={tabEarning === "jobs"}
                />
              </Box>
            </Box>
            <Box
              style={{
                ...RowSpaceBetween,
                width: sizeRatio(isExpand ? 1080 : 1212),
                backgroundColor: "#FFFFFF",
                borderRadius: sizeRatio(12),
                paddingBlock: sizeRatio(15),
                paddingInline: sizeRatio(24),
                marginBlock: sizeRatio(24),
              }}
            >
              <Box style={Row}>
                <GrPlan
                  style={{
                    color: NeutralDay000,
                    fontSize: sizeRatio(27),
                    marginRight: sizeRatio(25),
                  }}
                />
                <Box>
                  <Typography style={S20W700}>Profit Plan</Typography>
                  <Typography style={S20W300}>40% - 40 SLP</Typography>
                </Box>
              </Box>
              <Box style={Row}>
                <ImPower
                  style={{
                    color: NeutralDay000,
                    fontSize: sizeRatio(27),
                    marginRight: sizeRatio(25),
                  }}
                />
                <Box>
                  <Typography style={S20W700}>Energy</Typography>
                  <Typography style={S20W300}>48</Typography>
                </Box>
              </Box>
              <Box style={Row}>
                <IoServerOutline
                  style={{
                    color: NeutralDay000,
                    fontSize: sizeRatio(27),
                    marginRight: sizeRatio(25),
                  }}
                />

                <Box>
                  <Typography style={S20W700}>Yesterday Revenue</Typography>
                  <Typography style={S20W300}>314</Typography>
                </Box>
              </Box>
              <Box style={Row}>
                <GrMoney
                  style={{
                    color: NeutralDay000,
                    fontSize: sizeRatio(27),
                    marginRight: sizeRatio(25),
                  }}
                />
                <Box>
                  <Typography style={S20W700}>Total Revenue</Typography>
                  <Typography style={S20W300}>314,567</Typography>
                </Box>
              </Box>
            </Box>
            <Box style={S36W300}>Inventory</Box>

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
              <TableContainer>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" style={S16W700}>
                        Name
                      </TableCell>
                      <TableCell align="center" style={S16W700}>
                        Class
                      </TableCell>
                      <TableCell align="center" style={S16W700}>
                        Stats
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows ? (
                      rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return <RowPet key={row.id} row={row} />;
                        })
                    ) : (
                      <TableRow>
                        <TableCell
                          style={{
                            width: sizeRatio(369),
                            borderWidth: "0px",
                          }}
                        ></TableCell>
                        <TableCell
                          align="center"
                          style={{
                            width: sizeRatio(369),
                            borderWidth: "0px",
                          }}
                        >
                          <CircularProgress />
                        </TableCell>
                        <TableCell
                          style={{
                            width: sizeRatio(369),
                            borderWidth: "0px",
                          }}
                        ></TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 25, 100]}
                component="div"
                count={rows?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              <Box style={RowCenter}>
                {tabEarning === "invest" && (
                  <Button
                    style={{
                      ...styles.btnHandleAccount,
                      backgroundColor: ErrorRed600,
                    }}
                  >
                    <RiDeleteBinLine
                      style={{
                        fontSize: sizeRatio(20),
                        marginRight: sizeRatio(10),
                      }}
                    />
                    <Typography
                      style={{
                        ...S16W700,
                        color: NeutralDay900,
                      }}
                    >
                      Delete
                    </Typography>
                  </Button>
                )}
                <Button
                  style={{
                    ...styles.btnHandleAccount,
                    backgroundColor: SecondaryYellow700,
                  }}
                >
                  <RiDeleteBinLine
                    style={{
                      fontSize: sizeRatio(20),
                      marginRight: sizeRatio(10),
                    }}
                  />
                  <Typography
                    style={{
                      ...S16W700,
                      color: NeutralDay900,
                    }}
                  >
                    Drop
                  </Typography>
                </Button>
                <Button
                  style={{
                    ...styles.btnHandleAccount,
                    backgroundColor: PrimaryBlue900,
                  }}
                >
                  <RiDeleteBinLine
                    style={{
                      fontSize: sizeRatio(20),
                      marginRight: sizeRatio(10),
                    }}
                  />
                  <Typography
                    style={{
                      ...S16W700,
                      color: NeutralDay900,
                    }}
                  >
                    Re-deal
                  </Typography>
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default EarningAccountDetail;
