import DrawerComponent from "@/components/DrawerComponent";
import NavBar from "@/components/NavBar";
import { Box } from "@mui/material";

const Profile = () => {
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
            <div>Profile</div>
          </Box>
        </div>
      </Box>
    </div>
  );
};
export default Profile;
