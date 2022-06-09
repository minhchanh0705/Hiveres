import { sizeRatio } from "@/theme";

import { Box, Typography, Button, Link, Checkbox } from "@mui/material";
import { useState } from "react";
import { FiAward } from "react-icons/fi";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const AddAccountStep3ConfirmNewAccount = ({ setStep }) => {
  const [percentage, setPercentage] = useState(0);
  const [dailyRequires, setDailyRequires] = useState(0);

  const pets = [
    "https://pngset.com/images-original/axie-marketplace-white-aqua-axie-egg-food-animal-fish-transparent-png-2568119.png",
    "https://pngset.com/images-original/axie-marketplace-axie-chopsuey-food-birthday-cake-dessert-egg-transparent-png-2614883.png",
    "https://pngset.com/images-original/axie-marketplace-nimo-axie-egg-food-animal-sea-life-transparent-png-2920166.png",
  ];
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IoArrowBackCircleOutline
          style={{
            fontSize: sizeRatio(30),
          }}
          onClick={() => setStep(2)}
        />
        <Typography
          style={{
            fontWeight: 700,
            fontSize: sizeRatio(24),
          }}
        >
          Confirm account’s information
        </Typography>
        <Box
          style={{
            width: sizeRatio(30),
            height: sizeRatio(30),
          }}
        />
      </Box>
    </Box>
  );
};
export default AddAccountStep3ConfirmNewAccount;
