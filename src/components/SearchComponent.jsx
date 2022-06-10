import { sizeRatio } from "@/theme";
import { Box } from "@mui/material";
import { FiSearch } from "react-icons/fi";

const SearchComponent = ({ handleSearchChange }) => {
  return (
    <Box
      style={{
        height: sizeRatio(32),

        width: sizeRatio(280),
        display: "flex",
        alignItems: "center",
        borderRadius: sizeRatio(8),
        borderWidth: "0px",
        paddingLeft: sizeRatio(12),
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <FiSearch />
      <input
        type="text"
        name="searchAccount"
        autoComplete="off"
        style={{
          height: sizeRatio(30),
          borderWidth: "0px",
          paddingLeft: sizeRatio(10),
        }}
        placeholder="Search..."
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </Box>
  );
};
export default SearchComponent;
