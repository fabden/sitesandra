import { createTheme } from "@material-ui/core/styles";
import grey from '@material-ui/core/colors/grey';

const theme = createTheme({

  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#ffffff",
        color:grey[500]
      },
    },
  },
});

export default theme;
