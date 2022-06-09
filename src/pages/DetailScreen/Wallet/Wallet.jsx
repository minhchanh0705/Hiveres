import { Paper, Box } from "@mui/material";
import { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { sizeRatio } from "@/theme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentSectionAtom, isExpandAtom } from "@/recoil/atoms";
import NavBar from "@/components/NavBar";
import DrawerComponent from "@/components/DrawerComponent";
import WalletList from "./WalletList";
import ListWallet from "./ListWallet";
import Activity from "./Activities";
import CoinList from "./CoinList";
import ChartBalance from "./ChartBalance";
const Wallet = () => {
  Chart.register(...registerables);
  const isExpand = useRecoilValue(isExpandAtom);

  const setCurrentSectionAtom = useSetRecoilState(currentSectionAtom);

  useEffect(() => {
    setCurrentSectionAtom("Wallet");
  });

  const lstWallet = [
    {
      walletName: "Ronin",
      walletId: "ronin:13612263a7619ed817007524760274c86277d922",
    },
    {
      walletName: "MetaMask",
      walletId: "0xE42540E579122B03f6A37810Ae3879bd38236315",
    },
    {
      walletName: "Fantom",
      walletId: "0xf9ef17ea44c2813e564100728781cdb5887a2363fd",
    },
  ];

  return (
    <Box style={{ backgroundColor: "#F1F5F9" }}>
      <NavBar />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          overflow: "scroll",
        }}
      >
        <DrawerComponent />
        <Box
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            marginBottom: sizeRatio(42),
            marginInline: sizeRatio(30),
          }}
        >
          <Box
            style={{
              width: sizeRatio(isExpand ? 1080 : 1212),

              fontWeight: 700,
              fontSize: sizeRatio(20),
              marginTop: sizeRatio(32),
              marginBottom: sizeRatio(42),
            }}
          >
            Wallet
          </Box>

          <Box
            style={{
              display: "flex",
              width: sizeRatio(isExpand ? 1080 : 1212),
            }}
          >
            <CoinList />
            <ChartBalance />
          </Box>
          <WalletList />
          <Paper
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),
              borderRadius: sizeRatio(16),
              marginTop: sizeRatio(8),
              paddingInline: sizeRatio(32),
              backgroundColor: "#FFFFFF",
              paddingBlock: sizeRatio(24),
            }}
          >
            {lstWallet.map((w, indx) => (
              <ListWallet
                wallet={w.walletName}
                walletId={w.walletId}
                key={indx}
              />
            ))}
          </Paper>

          <Paper
            sx={{
              width: sizeRatio(isExpand ? 1080 : 1212),

              borderRadius: sizeRatio(16),
              marginTop: sizeRatio(24),
              paddingInline: sizeRatio(32),
              backgroundColor: "#FFFFFF",
              paddingBottom: sizeRatio(16),
            }}
          >
            <Activity />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
export default Wallet;
