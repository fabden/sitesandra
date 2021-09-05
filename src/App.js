import Slider from "./Components/Slider";
import Menus from "./Components/Menus";
import Categorie from "./Components/Categorie";
import NuagePhotos from "./Components/NuagePhotos";
import Missions from "./Components/Missions";
import Footer from "./Components/Footer";
import { ThemeProvider } from "@material-ui/core";
import theme from "./style";
import CssBaseline from '@material-ui/core/CssBaseline';
import Marche from "./Components/Marche";

function App() {
  return (
    <>
    
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Menus></Menus>
        <Slider></Slider>
        <Categorie></Categorie>
        <NuagePhotos></NuagePhotos>
        <Missions></Missions>
        <Marche></Marche>
        <Footer></Footer>
        
      </ThemeProvider>
    </>
  );
}

export default App;
