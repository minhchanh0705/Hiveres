import { colors, sizeRatio } from "@/theme";
import { styled, alpha } from "@mui/material/styles";
import { Box, Button, Menu, Modal, Slider, Typography } from "@mui/material";
// import CheckboxList from "@/components/CheckboxList";
import { useState } from "react";
import CheckboxList from "@/components/CheckboxList";

const ActivityFilter = ({ anchorEl, setAnchorEl }) => {
  const [value, setValue] = useState([20, 37]);
  const { NeutralDay000 } = colors;

  function valuetext(value) {
    return `${value}%`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
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

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const lstAssets = ["HVR", "SLP", "BTC", "ETH", "STEPN"];
  const lstActions = ["Deposit", "Withdraw", "Lock", "Staking"];
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
        <Slider
          getAriaLabel={() => "Percentage range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
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
            width: sizeRatio(232),
            height: sizeRatio(32),
            paddingInline: sizeRatio(24),
            color: NeutralDay000,
            fontWeight: 400,
            fontSize: sizeRatio(14),
            backgroundColor: "#FFB600",
          }}
        >
          Confirm
        </Button>
      </Box>
    </StyledMenu>
  );
};
export default ActivityFilter;
