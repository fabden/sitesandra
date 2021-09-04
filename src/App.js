import Slider from "./Components/Slider";
import Menus from "./Components/Menus";
import Categorie from "./Components/Categorie";
import NuagePhotos from "./Components/NuagePhotos";
import Missions from "./Components/Missions";
import Footer from "./Components/Footer";
import { ThemeProvider } from "@material-ui/core";
import theme from "./style";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline></CssBaseline>
      <ThemeProvider theme={theme}>
        <Menus></Menus>
        <Slider></Slider>
        <Categorie></Categorie>
        <NuagePhotos></NuagePhotos>
        <Missions></Missions>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
