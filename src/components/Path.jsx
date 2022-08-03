import { Box, Typography } from "@mui/material";
import { currentSectionAtom } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";

const Path = () => {
  const currSection = useRecoilValue(currentSectionAtom);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Box className="row">
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
