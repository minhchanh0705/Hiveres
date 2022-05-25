import { createTheme } from "@mui/material/styles";
import { red, lightBlue, grey, orange } from "@mui/material/colors";

let isMobile = false;
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  isMobile = true;
}
const font = "Helvetica";
// const font = import.meta.env.VITE_FONT;

export const sizeRatio = (size) => `${(1440 * size) / 1440}px`;
let theme = createTheme({
  typography: {
    fontFamily: font,
    fontSize: 16,
    button: {
      textTransform: "none",
      fontWeight: "bold",
      fontSize: sizeRatio(15),
    },
    ERROR: {
      fontFamily: font,
      color: red[600],
      fontSize: sizeRatio(14),
      fontWeight: "bold",
    },
    mandatoryStar: {
      fontFamily: font,
      color: red[600],
      fontSize: sizeRatio(17),
      fontWeight: "bold",
    },
    HELPER: {
      fontFamily: font,
      color: lightBlue[800],
      fontSize: sizeRatio(14),
      fontWeight: "bold",
    },
    WARNING: {
      fontFamily: font,
      color: orange[500],
      fontSize: sizeRatio(14),
      fontWeight: "bold",
    },
    inputFieldLabel: { fontFamily: font, fontSize: sizeRatio(15) },
  },
  palette: {
    text: {
      primary: "#424242",
    },
    grey: {
      main: grey[300],
      contrastText: "#fff",
    },
    dGrey: {
      main: grey[600],
      contrastText: "#fff",
    },
    primary: {
      main: lightBlue[800],
    },
    secondary: {
      main: red[600],
      contrastText: "#fff",
    },
    orange: {
      main: orange[500],
      contrastText: "#fff",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: sizeRatio(15),
          background: "#ffffff",
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
