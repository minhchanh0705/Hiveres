import { sizeRatio } from "@/theme";
import { Box, TableCell, TableRow } from "@mui/material";
import { Fragment } from "react";
import { FiAward } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AccountListRow = ({ row, tabEarning }) => {
  let navigate = useNavigate();

  const valueStyle = {
    textAlign: "center",
    width: sizeRatio(229.6),
    fontSize: sizeRatio(16),
  };
  const handleEarningAccountDetail = () => {
    navigate(`/EarningAccountDetail`, {
      state: {
        id: row.id,
        tabEarning: tabEarning,
        walletId: "eb62eec22ccf13f60a9c3352ec507f00720b00e0",
      },
    });
  };

  return (
    <Fragment>
      <TableRow hover onClick={handleEarningAccountDetail}>
        <TableCell style={valueStyle}>
          <FiAward
            style={{
              marginRight: sizeRatio(4),
              fontSize: sizeRatio(18),
            }}
          />
          {row.name}
        </TableCell>
        <TableCell style={valueStyle}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {row.pets.map((url, i) => (
              <Box
                key={i}
                style={{
                  paddingInline: sizeRatio(2),
                }}
              >
                <img alt="iconPet" src={url} width={sizeRatio(32)}></img>
              </Box>
            ))}
          </Box>
        </TableCell>
        <TableCell style={valueStyle}>{row.status}</TableCell>
        <TableCell style={valueStyle}>{row.yesterday}</TableCell>
        <TableCell style={valueStyle}>{row.kpi}</TableCell>
      </TableRow>
    </Fragment>
  );
};
export default AccountListRow;
