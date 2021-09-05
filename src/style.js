import { createTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";



const theme = createTheme({
  typography: {    
    h4:{
      fontFamily : "Sail", 
    },
    h1:{
      fontFamily : "Sail", 
    },
    h2:{
      fontFamily : "Sail", 
    },
    h3:{
      fontFamily : "Sail", 
    }

  },

  overrides: {
 

    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#ffffff",
        color: grey[500],
      },
    },
  },
});

export default theme;
