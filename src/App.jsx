import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./component/Navigation/Navigation.jsx";
import Home from "../src/pages/Home/Home.jsx";
import SolarPanelLearnmore from "../src/pages/SolarPanel/SolarPanelLearnmore.jsx";
import EnergyOrder from "../src/pages/Energy/EnergyOrder.jsx";
import NewBuildingConsultation from "../src/pages/Construction/ConstructionConsultation.jsx";
import ConstructionsLearnmore from "../src/pages/Construction/ConstructionLearnmore.jsx";
import NavigationVertical from "./component/Navigation/NavigationVertical.jsx";

import EnergyVertical from "./component/Navigation/NavComponent/Energy/EnergyVertical.jsx";
import ConstructionsVertical from "./component/Navigation/NavComponent/Constructions/ConstructionsVertical.jsx";
import ShopVertical from "./component/Navigation/NavComponent/Shop/ShopVertical.jsx";
import DiscoverVertical from "./component/Navigation/NavComponent/Discover/DiscoverVertical.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar-learnmore" element={<SolarPanelLearnmore />} />
        <Route path="/energy-order" element={<EnergyOrder />} />
        <Route
          path="/new-building-consultation"
          element={<NewBuildingConsultation />}
        />
        <Route
          path="/construction-learnmore"
          element={<ConstructionsLearnmore />}
        />
        <Route path="/menu" element={<NavigationVertical />} />
        <Route path="/energy-vertical" element={<EnergyVertical />} />
        <Route
          path="/construction-vertical"
          element={<ConstructionsVertical />}
        />
        <Route path="/shop-vertical" element={<ShopVertical />} />
        <Route path="/discover-vertical" element={<DiscoverVertical />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
