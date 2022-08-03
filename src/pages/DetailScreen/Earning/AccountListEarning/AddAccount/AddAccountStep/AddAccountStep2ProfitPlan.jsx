import { colors, sizeRatio, space, text } from "@/theme";

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
  const [axsReward, setAxsReward] = useState(0);

  const { NeutralDay000, NeutralDay400 } = colors;
  const { SecondaryHeading5, S14W700, S24W400, S14W400, S16W700 } = text;
  const { Row } = space;

  const pets = [
    "https://pngset.com/images-original/axie-marketplace-white-aqua-axie-egg-food-animal-fish-transparent-png-2568119.png",
    "https://pngset.com/images-original/axie-marketplace-axie-chopsuey-food-birthday-cake-dessert-egg-transparent-png-2614883.png",
    "https://pngset.com/images-original/axie-marketplace-nimo-axie-egg-food-animal-sea-life-transparent-png-2920166.png",
  ];
  return (
    <Box>
      <Typography style={S24W400}>10 Axies</Typography>
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
            ...S16W700,
            color: "#0B3E8E",
            outline: "none",
            textDecoration: "underline",
          }}
        >
          {"Show more >"}
        </Button>
      </Box>
      <Typography style={{ ...S24W400, color: NeutralDay000 }}>
        Profit Plan
      </Typography>
      <Box
        style={{
          ...Row,
          width: sizeRatio(330),
          justifyContent: "space-between",
          marginTop: sizeRatio(24),
        }}
      >
        <Typography style={{ ...S16W700, color: NeutralDay000 }}>
          Percentage (%)
        </Typography>
        <input
          type="text"
          name="percentage"
          value={percentage}
          autoComplete="off"
          style={{
            ...SecondaryHeading5,
            height: sizeRatio(32),
            width: sizeRatio(44),
            textAlign: "center",
            border: `1px solid ${NeutralDay400}`,
            borderRadius: "8px",
          }}
          onChange={(e) => setPercentage(e.target.value)}
        />
      </Box>

      <Box
        style={{
          ...Row,

          width: sizeRatio(330),
          justifyContent: "space-between",
          marginTop: sizeRatio(24),
        }}
      >
        <Typography style={{ ...S16W700, color: NeutralDay000 }}>
          Daily requires (SLP)
        </Typography>
        <input
          type="text"
          name="dailyRequires"
          value={dailyRequires}
          autoComplete="off"
          style={{
            ...SecondaryHeading5,
            height: sizeRatio(32),
            width: sizeRatio(44),
            textAlign: "center",
            border: `1px solid ${NeutralDay400}`,
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
            ...S16W700,
            color: "#0B3E8E",
            outline: "none",
            textDecoration: "underline",
          }}
        >
          {"Learn more about profit plan >"}
        </Button>
        <Box
          style={{
            display: "flex",
            width: sizeRatio(330),
            justifyContent: "space-between",
            marginTop: sizeRatio(24),
          }}
        >
          <Box style={Row}>
            <Checkbox
              sx={{
                padding: 0,
              }}
            />

            <Typography style={{ ...S16W700, color: NeutralDay000 }}>
              AXS Reward (%)
            </Typography>
            <FiAward />
          </Box>

          <input
            type="text"
            name="axsReward"
            value={axsReward}
            autoComplete="off"
            style={{
              ...SecondaryHeading5,
              height: sizeRatio(32),
              width: sizeRatio(44),
              textAlign: "center",
              border: `1px solid ${NeutralDay400}`,
              borderRadius: "8px",
            }}
            onChange={(e) => setAxsReward(e.target.value)}
          />
        </Box>
      </Box>

      <Typography
        style={{
          ...S14W700,
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
            ...S16W700,
            color: "#0B3E8E",
            outline: "none",
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
            ...S16W700,
            backgroundColor: "#061123",
            outline: "none",
            color: "#F8FAFC",
            width: sizeRatio(119),
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
            ...S16W700,
            backgroundColor: "#061123",
            outline: "none",
            color: "#F8FAFC",
            width: sizeRatio(119),
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
