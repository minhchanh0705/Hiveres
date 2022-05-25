import { Box } from "@mui/material";
import { currentSectionAtom } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";

const Path = () => {
  // const currTab = useRecoilValue(currentTabAtom);
  const currSection = useRecoilValue(currentSectionAtom);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className="row">
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
        <div
          style={{
            fontFamily: "Archivo",
            fontWeight: 600,
          }}
        >
          {currSection}
        </div>
      </div>
    </Box>
  );
};
export default Path;
