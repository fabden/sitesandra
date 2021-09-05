import { createTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
//import amitaPolice from "../src/asset/font/Amita/Amita-Regular.ttf";
import SailPolice from "../src/asset/font/Sail/Sail-Regular.ttf";
//import CormorantPolice from "../src/asset/font/Cormorant_Garamond/CormorantGaramond-Regular.ttf";

const Sail = {
  fontFamily: "Sail",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url(${SailPolice})`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
 /*const Cormorant = {
  fontFamily: "Cormorant",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url(${CormorantPolice})`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const amita = {
  fontFamily: "amita",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url(${amitaPolice})`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};*/

const theme = createTheme({
  typography: {
    fontFamily: "Sail",
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Sail],
      },
    },

    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#ffffff",
        color: grey[500],
      },
    },
  },
});

export default theme;
