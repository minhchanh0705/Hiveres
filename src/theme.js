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
export const sizeRatio = (size) => `${size}px`;
// export const sizeRatio = (size) => `${(windowWidth * size) / 1440}px`;
const stylesModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#FFF",
  paddingBlock: sizeRatio(35),
  paddingInline: sizeRatio(70),
  borderRadius: "12px",
};
export const styleModal676 = { ...stylesModal, width: sizeRatio(676) };
export const styleModal700 = { ...stylesModal, width: sizeRatio(700) };
export const styleModal900 = { ...stylesModal, width: sizeRatio(900) };

export const colors = {
  NeutralDay000: "#0F172A",
  NeutralDay100: "#1E293B",
  NeutralDay300: "#475569",
  NeutralDay400: "#64748B",
  NeutralDay500: "#94A3BB",
  NeutralDay600: "#CBD5E1",
  NeutralDay700: "#E2E8F0",
  NeutralDay800: "#F1F5F9",
  NeutralDay900: "#F8FAFC",
  WarningOrange900: "#C25A0A",
  SuccessGreen900: "#047857",

  ErrorRed600: "#EF4444",
  ErrorRed900: "#B91C1C",
  SecondaryYellow700: "#FFB600",
  PrimaryBlue900: "#061123",
};

export const text = {
  S13W700: {
    fontSize: sizeRatio(13),
    fontWeight: 700,
  },
  S16W400: {
    fontSize: sizeRatio(16),
    fontWeight: 400,
  },
  S16W700: {
    fontSize: sizeRatio(16),
    fontWeight: 700,
  },
  S24W700: {
    fontSize: sizeRatio(24),
    fontWeight: 700,
  },
  S14W400: {
    fontSize: sizeRatio(14),
    fontWeight: 400,
  },
  S24W400: {
    fontSize: sizeRatio(24),
    fontWeight: 400,
  },
  S14W700: {
    fontSize: sizeRatio(14),
    fontWeight: 700,
  },
  S18W400: {
    fontSize: sizeRatio(18),
    fontWeight: 400,
  },
  S36W300: {
    fontSize: sizeRatio(36),
    fontWeight: 300,
  },
  S32W500: {
    fontSize: sizeRatio(32),
    fontWeight: 500,
  },
  S20W700: {
    fontSize: sizeRatio(20),
    fontWeight: 700,
  },
  S20W300: {
    fontSize: sizeRatio(20),
    fontWeight: 300,
  },
  S20W400: {
    fontSize: sizeRatio(20),
    fontWeight: 400,
  },

  S12W400: {
    fontSize: sizeRatio(12),
    fontWeight: 400,
  },
  S12W700: {
    fontSize: sizeRatio(12),
    fontWeight: 700,
  },
  S10W400: {
    fontSize: sizeRatio(10),
    fontWeight: 400,
  },
  S10W300: {
    fontSize: sizeRatio(10),
    fontWeight: 300,
  },
  S8W300: {
    fontSize: sizeRatio(8),
    fontWeight: 300,
  },
};

export const space = {
  RowCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Row: {
    display: "flex",
    alignItems: "center",
  },
  FlexCol: {
    display: "flex",
    flexDirection: "column",
  },
  FlexColCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  RowSpaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  RowSpaceAround: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  RowFlexEnd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  RowFlexStart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  RowBaseline: {
    display: "flex",
    alignItems: "baseline",
  },
};

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
