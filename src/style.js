import { createTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import amita from "../src/asset/font/Amita/Amita-Regular.ttf";
import Sail from "../src/asset/font/Sail/Sail-Regular.ttf";
import Cormorant from "../src/asset/font/Cormorant_Garamond/CormorantGaramond-Regular.ttf";

const amitap = {
  fontFamily: "amitas",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url(${amita})`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const Sailp = {
  fontFamily: "Sails",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url(${Sail})`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const Cormorantp = {
  fontFamily: "Cormorants",
  fontStyle: "normal",
  fontWeight: 400,
  src: `url(${Cormorant})`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createTheme({
  typography: {
    fontFamily: "Cormorantp",
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Cormorantp],
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
