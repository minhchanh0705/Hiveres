import { sizeRatio } from "@/theme";

import { Box, Typography, Button, Link, Checkbox } from "@mui/material";
import { useState } from "react";
import { FiAward } from "react-icons/fi";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const AddAccountStep2ProfitPlan = ({ setStep }) => {
  const [percentage, setPercentage] = useState(0);
  const [dailyRequires, setDailyRequires] = useState(0);

  const pets = [
    "https://pngset.com/images-original/axie-marketplace-white-aqua-axie-egg-food-animal-fish-transparent-png-2568119.png",
    "https://pngset.com/images-original/axie-marketplace-axie-chopsuey-food-birthday-cake-dessert-egg-transparent-png-2614883.png",
    "https://pngset.com/images-original/axie-marketplace-nimo-axie-egg-food-animal-sea-life-transparent-png-2920166.png",
  ];
  return (
    <Box>
      <Typography
        style={{
          fontSize: sizeRatio(24),
        }}
      >
        10 Axies
      </Typography>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {pets.map((url, i) => (
          <Box
            key={i}
            style={{
              paddingInline: sizeRatio(2),
            }}
          >
            <img alt="iconPet" src={url} width={sizeRatio(100)}></img>
          </Box>
        ))}
      </Box>
      <Box
        style={{
          width: "100%",
          textAlign: "end",
          marginTop: sizeRatio(24),
        }}
      >
        <Button
          style={{
            color: "#0B3E8E",
            fontSize: sizeRatio(16),
            fontWeight: 700,
            textDecoration: "underline",
          }}
        >
          {"Show more >"}
        </Button>
      </Box>
      <Typography
        style={{
          color: "#0F172A",
          fontSize: sizeRatio(24),
        }}
      >
        Profit Plan
      </Typography>
      <Box
        style={{
          display: "flex",
          width: sizeRatio(300),
          justifyContent: "space-between",
          marginTop: sizeRatio(24),
        }}
      >
        <Typography>Percentage (%)</Typography>
        <input
          type="text"
          name="percentage"
          value={percentage}
          autoComplete="off"
          style={{
            height: sizeRatio(32),
            width: sizeRatio(44),
            textAlign: "center",
            border: "1px solid #0F172A",
            borderRadius: "8px",
          }}
          onChange={(e) => setPercentage(e.target.value)}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          width: sizeRatio(300),
          justifyContent: "space-between",
          marginTop: sizeRatio(24),
        }}
      >
        <Typography>Daily requires (SLP)</Typography>
        <input
          type="text"
          name="dailyRequires"
          value={dailyRequires}
          autoComplete="off"
          style={{
            height: sizeRatio(32),
            width: sizeRatio(44),
            textAlign: "center",
            border: "1px solid #0F172A",
            borderRadius: "8px",
          }}
          onChange={(e) => setDailyRequires(e.target.value)}
        />
      </Box>
      <Box
        style={{
          width: "100%",
          textAlign: "end",
          marginTop: sizeRatio(24),
        }}
      >
        <Button
          style={{
            color: "#0B3E8E",
            fontSize: sizeRatio(16),
            fontWeight: 700,
            textDecoration: "underline",
          }}
        >
          {"Learn more about profit plan >"}
        </Button>
        <Box
          style={{
            display: "flex",
            width: sizeRatio(300),
            justifyContent: "space-between",
            marginTop: sizeRatio(24),
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              sx={{
                padding: 0,
              }}
            />

            <Typography
              style={{
                fontSize: sizeRatio(16),
                fontWeight: 700,
                color: "#0F172A",
              }}
            >
              AXS Reward (%)
            </Typography>
            <FiAward />
          </Box>
          <input
            type="text"
            name="dailyRequires"
            value={dailyRequires}
            autoComplete="off"
            style={{
              height: sizeRatio(32),
              width: sizeRatio(44),
              textAlign: "center",
              border: "1px solid #0F172A",
              borderRadius: "8px",
            }}
            onChange={(e) => setDailyRequires(e.target.value)}
          />
        </Box>
      </Box>

      <Typography
        style={{
          fontWeight: 700,
          fontSize: sizeRatio(14),
          color: "#B91C1C",
          marginTop: sizeRatio(32),
          textAlign: "center",
        }}
      >
        We are not responsible for this agreement, but we reserve the right to
        impose penalties for violations.{" "}
      </Typography>
      <Box
        style={{
          width: "100%",
          textAlign: "end",
          marginTop: sizeRatio(24),
        }}
      >
        <Button
          style={{
            color: "#0B3E8E",
            fontSize: sizeRatio(16),
            fontWeight: 700,
            textDecoration: "underline",
          }}
        >
          {"Learn more >"}
        </Button>
      </Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: sizeRatio(30),
        }}
      >
        <Button
          style={{
            backgroundColor: "#061123",
            color: "#F8FAFC",
            width: sizeRatio(119),
            fontSize: sizeRatio(16),
            fontWeight: 700,
            borderRadius: "8px",
          }}
          onClick={() => setStep(1)}
        >
          <IoArrowBackCircleOutline
            style={{
              marginRight: sizeRatio(8),
              fontSize: sizeRatio(20),
            }}
          />
          Back
        </Button>
        <Button
          style={{
            backgroundColor: "#061123",
            color: "#F8FAFC",
            width: sizeRatio(119),
            fontSize: sizeRatio(16),
            fontWeight: 700,
            borderRadius: "8px",
          }}
          onClick={() => setStep(3)}
        >
          Next
          <IoArrowForwardCircleOutline
            style={{
              marginLeft: sizeRatio(8),
              fontSize: sizeRatio(20),
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};
export default AddAccountStep2ProfitPlan;
