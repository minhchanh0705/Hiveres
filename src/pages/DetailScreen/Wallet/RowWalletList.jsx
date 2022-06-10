import { sizeRatio } from "@/theme";
import { TableCell, TableRow } from "@mui/material";
import { Fragment } from "react";

const RowWalletList = ({ row }) => {
  const valueStyle = {
    textAlign: "center",
    width: sizeRatio(229.6),
    fontSize: sizeRatio(16),
  };
  return (
    <Fragment>
      <TableRow hover>
        <TableCell
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          align="center"
        >
          <img
            style={{
              width: sizeRatio(40),
              height: sizeRatio(40),
            }}
            src={`/assets/icon/${row.asset}.png`}
            alt=""
          />
          {row.asset}
        </TableCell>

        <TableCell style={valueStyle}>{row.amount}</TableCell>
        <TableCell style={valueStyle}>{row.address}</TableCell>
        <TableCell style={valueStyle}>{row.action}</TableCell>
        <TableCell style={valueStyle}>{row.date}</TableCell>
        <TableCell style={valueStyle}>{row.idAddress}</TableCell>
      </TableRow>
    </Fragment>
  );
};
export default RowWalletList;
