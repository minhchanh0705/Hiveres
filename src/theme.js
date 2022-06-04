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
let windowWidth = window.innerWidth;
if (window.innerWidth < 1080) {
  windowWidth = 1080;
} else if (window.innerWidth > 1800) {
  windowWidth = 1800;
}
export const sizeRatio = (size) => `${(windowWidth * size) / 1440}px`;
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
          fontSize: sizeRatio(20),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // "& .MuiOutlinedInput-notchedOutline": {
          //   border: "none",
          // },
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
    MuiTablePagination: {
      styleOverrides: {
        root: {
          fontSize: sizeRatio(16),
          fontWeight: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },

        selectLabel: {
          margin: 0,
        },
        displayedRows: {
          margin: 0,
        },
      },
    },
  },
});

export default theme;
// css-ugc96i-MuiTablePagination-selectLabel
