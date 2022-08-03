import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { sizeRatio, text } from "@/theme";
import { Typography } from "@mui/material";
import { useState } from "react";

const CheckboxList = ({ bgcolor, txtColor, lstItems, nameCheckbox }) => {
  const [checked, setChecked] = useState([0]);
  const { S14W400 } = text;
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const imgName = (img) => {
    if (img === "HVR") {
      return "Hiverium";
    } else if (img === "SLP") {
      return "Smooth Love Potion";
    } else if (img === "BTC") {
      return "Bitcoin";
    } else if (img === "ETH") {
      return "Entherium";
    } else if (img === "STEPN") {
      return "Stepn";
    }
    return;
  };
  return (
    <List sx={{ width: "100%" }}>
      {lstItems.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem key={value} disablePadding>
            <ListItemButton
              sx={{
                paddingLeft: 0,
              }}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  sx={{
                    padding: 0,
                    margin: 0,
                    backgroundColor: txtColor,
                    borderRadius: "4px",
                    width: sizeRatio(20),
                    height: sizeRatio(20),
                    marginLeft: sizeRatio(20),
                    color: txtColor,
                    "&.Mui-checked": {
                      backgroundColor: bgcolor,
                      borderRadius: "4px",
                      color: txtColor,
                    },
                  }}
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                style={{
                  color: txtColor,
                  marginLeft: sizeRatio(5),
                }}
                id={labelId}
                primary={
                  <Typography type="body2" style={S14W400}>
                    {nameCheckbox === "Asset" ? (
                      <>
                        <img
                          style={{
                            width: sizeRatio(12),
                            height: sizeRatio(12),
                            marginRight: sizeRatio(8),
                          }}
                          src={`/assets/icon/${value}.png`}
                          alt=""
                        />
                        {imgName(value)}
                      </>
                    ) : nameCheckbox === "Action" ? (
                      <>
                        <img
                          style={{
                            width: sizeRatio(12),
                            height: sizeRatio(12),
                            marginRight: sizeRatio(8),
                          }}
                          src={`/assets/icon/${value}.png`}
                          alt=""
                        />
                        {value}
                      </>
                    ) : (
                      <>{value}</>
                    )}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
export default CheckboxList;
