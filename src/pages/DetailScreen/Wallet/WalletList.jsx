import { colors, sizeRatio } from "@/theme";
import { Box, Button, Typography } from "@mui/material";
import { isExpandAtom } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import AddWallet from "./AddWallet";

const WalletList = () => {
  const isExpand = useRecoilValue(isExpandAtom);
  const [showModalAddNetwork, setShowModalAddNetwork] = useState(false);
  const { NeutralDay000 } = colors;

  return (
    <Box
      style={{
        display: "flex",
        marginTop: sizeRatio(32),
        width: sizeRatio(isExpand ? 1080 : 1212),
        justifyContent: "space-between",
        paddingInline: sizeRatio(30),
      }}
    >
      <Typography
        style={{
          display: "flex",
          color: NeutralDay000,
          fontWeight: 700,
          fontSize: sizeRatio(16),
          alignItems: "center",
        }}
      >
        Wallet List
      </Typography>
      <Button
        id="profile-button"
        style={{
          width: sizeRatio(120),
          backgroundColor: "#061123",
          borderRadius: "8px",
          justifyContent: "space-around",
        }}
        aria-haspopup="true"
        disableElevation
        onClick={() => setShowModalAddNetwork(true)}
      >
        <Typography
          style={{
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: sizeRatio(12),
          }}
        >
          Add Wallet
        </Typography>
        <AiOutlinePlusCircle
          style={{
            color: "#FFFFFF",
            fontSize: sizeRatio(16),
          }}
        />
      </Button>
      <AddWallet
        showModalAddNetwork={showModalAddNetwork}
        setShowModalAddNetwork={setShowModalAddNetwork}
      />
    </Box>
  );
};
export default WalletList;
