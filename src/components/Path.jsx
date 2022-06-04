import { Box, Typography } from "@mui/material";
import { currentSectionAtom } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";

const Path = () => {
  // const currTab = useRecoilValue(currentTabAtom);
  const currSection = useRecoilValue(currentSectionAtom);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Box className="row">
        {/* <div
          style={{
            fontFamily: "Archivo",
            fontWeight: 700,
            color: "#FFB600",
          }}
        >
          {currTab}
        </div>
        <div
          style={{
            fontFamily: "Archivo",
            fontWeight: 600,
            paddingInline: sizeRatio ( 17,
          }}
        >
          {">"}
        </div> */}
        <Typography
          style={{
            fontFamily: "Helvetica",
            fontWeight: 600,
          }}
        >
          {currSection}
        </Typography>
      </Box>
    </Box>
  );
};
export default Path;
