import { sizeRatio } from "@/theme";
import { Box, Button, Typography } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { MdOutlineContentCopy, MdOutlineDelete } from "react-icons/md";

const ListWallet = ({ wallet, walletId }) => {
  return (
    <Box
      style={{
        display: "flex",
        paddingBlock: sizeRatio(29),
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flex: 2,
        }}
      >
        <img
          style={{
            width: sizeRatio(30),
            height: sizeRatio(30),
            marginRight: sizeRatio(5),
          }}
          src={`/assets/icon/${wallet}.png`}
          alt=""
        />
        <Typography>{wallet}</Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          flex: 5,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>{walletId}</Typography>
        <MdOutlineContentCopy
          cursor="pointer"
          style={{
            width: sizeRatio(16),
            height: sizeRatio(16),
            color: "#0F172A",
          }}
        ></MdOutlineContentCopy>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 2,
        }}
      />
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 2,
        }}
      >
        <FiEdit
          style={{
            fontSize: sizeRatio(20),
            color: "#C25A0A",
            marginRight: sizeRatio(15),
          }}
        ></FiEdit>
        <Typography
          style={{
            fontSize: sizeRatio(16),
            color: "#C25A0A",
            fontWeight: 700,
          }}
        >
          Edit
        </Typography>
      </Button>
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          flex: 2,
        }}
      >
        <MdOutlineDelete
          style={{
            fontSize: sizeRatio(22),
            color: "#C25A0A",
            marginRight: sizeRatio(15),
          }}
        ></MdOutlineDelete>
        <Typography
          style={{
            fontSize: sizeRatio(16),
            color: "#C25A0A",
            fontWeight: 700,
          }}
        >
          Delete
        </Typography>
      </Button>
    </Box>
  );
};
export default ListWallet;
