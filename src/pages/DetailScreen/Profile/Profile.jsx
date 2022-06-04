import DrawerComponent from "@/components/DrawerComponent";
import NavBar from "@/components/NavBar";
import { isExpandAtom } from "@/recoil/atoms";
import { sizeRatio } from "@/theme";
import { Box, Button, Paper, Typography } from "@mui/material";
import { FiLogOut, FiSave } from "react-icons/fi";
import { useRecoilValue } from "recoil";

const Profile = () => {
  const isExpand = useRecoilValue(isExpandAtom);
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
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingInline: sizeRatio(70),
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <img
                style={{
                  width: sizeRatio(150),
                  height: sizeRatio(150),
                }}
                src="../../../../src/assets/icon/avatar.png"
                alt=""
              />

              {/* <Box
                style={{
                  borderWidth: "1px",
                  borderColor: "black",
                  borderStyle: "solid",
                  borderRadius: 100,
                  width: sizeRatio(150),
                  height: sizeRatio(150),
                }}
              ></Box> */}
              <Typography
                style={{
                  marginLeft: sizeRatio(40),
                  fontSize: sizeRatio(48),
                }}
              >
                Hiveres
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                height: "100%",
                alignItems: "flex-end",
              }}
            >
              <Button
                style={{
                  border: "1px solid #061123",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  paddingInline: sizeRatio(20),
                  paddingBlock: sizeRatio(6),
                  color: "#061123",
                }}
              >
                <Typography
                  style={{
                    fontSize: sizeRatio(12),
                    fontWeight: 700,
                  }}
                >
                  Sign out
                </Typography>
                <FiLogOut
                  style={{
                    borderWidth: sizeRatio(2),
                    width: sizeRatio(20),
                    height: sizeRatio(20),
                    marginLeft: sizeRatio(15),
                  }}
                />
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              border: "1px solid #CBD5E1",
              borderRadius: "12px",
              paddingBlock: sizeRatio(30),
            }}
          >
            <Typography
              style={{
                fontSize: sizeRatio(36),
                marginLeft: sizeRatio(70),
                color: "#0F172A",
              }}
            >
              Account's Info
            </Typography>
            <Typography
              style={{
                fontWeight: 300,
                fontSize: sizeRatio(20),
                marginLeft: sizeRatio(70),
                color: "#000",
                display: "flex",
              }}
            >
              Info about your account across Hiveres services
            </Typography>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: sizeRatio(48),
                paddingInline: sizeRatio(70),
              }}
            >
              <Typography
                style={{
                  fontSize: sizeRatio(20),
                  color: "#0F172A",
                  flex: 2,
                }}
              >
                Email
              </Typography>
              <input
                defaultValue="Hiveres@gmail.com"
                style={{
                  height: sizeRatio(52),
                  borderRadius: sizeRatio(8),
                  borderWidth: "0px",
                  color: "#0F172A",
                  fontSize: sizeRatio(18),
                  paddingLeft: sizeRatio(12),
                  flex: 10,
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              border: "1px solid #CBD5E1",
              borderRadius: "12px",
              marginTop: sizeRatio(48),
              paddingBlock: sizeRatio(30),
            }}
          >
            <Typography
              style={{
                fontSize: sizeRatio(36),
                marginLeft: sizeRatio(70),
                color: "#0F172A",
              }}
            >
              Personal Info
            </Typography>
            <Typography
              style={{
                fontWeight: 300,
                fontSize: sizeRatio(20),
                marginLeft: sizeRatio(70),
                color: "#000",
              }}
            >
              Manage your personal info and control what can be seen when you
              use Hiveres Account profile.
            </Typography>
            <Box
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                marginTop: sizeRatio(48),
                paddingInline: sizeRatio(70),
              }}
            >
              <Typography
                style={{
                  fontSize: sizeRatio(20),
                  color: "#0F172A",
                  flex: 2,
                }}
              >
                Name
              </Typography>
              <input
                defaultValue="Hiveres"
                style={{
                  height: sizeRatio(52),
                  borderRadius: sizeRatio(8),
                  borderWidth: "0px",
                  fontSize: sizeRatio(20),
                  paddingLeft: sizeRatio(12),
                  flex: 10,
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                marginTop: sizeRatio(48),
                paddingInline: sizeRatio(70),
              }}
            >
              <Typography
                style={{
                  fontSize: sizeRatio(20),
                  color: "#0F172A",
                  flex: 2,
                }}
              >
                Gender
              </Typography>
              <input
                defaultValue="Male"
                style={{
                  height: sizeRatio(52),
                  borderRadius: sizeRatio(8),
                  borderWidth: "0px",
                  fontSize: sizeRatio(20),
                  paddingLeft: sizeRatio(12),
                  flex: 10,
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                marginTop: sizeRatio(48),
                paddingInline: sizeRatio(70),
              }}
            >
              <Typography
                style={{
                  fontSize: sizeRatio(20),
                  color: "#0F172A",
                  flex: 2,
                }}
              >
                Nation
              </Typography>
              <input
                defaultValue="Việt Nam"
                style={{
                  height: sizeRatio(52),
                  borderRadius: sizeRatio(8),
                  borderWidth: "0px",
                  fontSize: sizeRatio(20),
                  paddingLeft: sizeRatio(12),
                  flex: 10,
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                marginTop: sizeRatio(48),
                paddingInline: sizeRatio(70),
              }}
            >
              <Typography
                style={{
                  fontSize: sizeRatio(20),
                  color: "#0F172A",
                  flex: 2,
                }}
              >
                Date of birth
              </Typography>
              <input
                defaultValue="24 - 06 - 1998"
                style={{
                  height: sizeRatio(52),
                  borderRadius: sizeRatio(8),
                  borderWidth: "0px",
                  fontSize: sizeRatio(20),
                  paddingLeft: sizeRatio(12),
                  flex: 10,
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              paddingBlock: sizeRatio(30),
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: sizeRatio(70),
            }}
          >
            <Button
              style={{
                width: sizeRatio(210),
                height: sizeRatio(48),
                backgroundColor: "#061123",
                borderRadius: "8px",
                alignItems: "center",
              }}
            >
              <FiSave
                style={{
                  color: "#FFFFFF",
                  fontSize: sizeRatio(20),
                  marginInline: sizeRatio(3),
                }}
              />
              <Typography
                style={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: sizeRatio(16),
                  marginInline: sizeRatio(3),
                }}
              >
                Save Changes
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Profile;
