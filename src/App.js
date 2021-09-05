import Slider from "./Components/Slider";
import Menus from "./Components/Menus";
import Categorie from "./Components/Categorie";
import NuagePhotos from "./Components/NuagePhotos";
import Missions from "./Components/Missions";
import Footer from "./Components/Footer";
import Marche from "./Components/Marche";
import ConditionsGenerale from "./Components/ConditionsGenerale";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Menus></Menus>
      <Slider></Slider>
      <Switch>
        <Route exact path="/">
          <Categorie></Categorie>
          <NuagePhotos></NuagePhotos>
          <Missions></Missions>
          <Marche></Marche>
        </Route>
        <Route exact path="/Condition-Generale">
          <ConditionsGenerale></ConditionsGenerale>
        </Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
