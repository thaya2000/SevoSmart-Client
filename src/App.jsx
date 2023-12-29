import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SolarPanelLearnmore from "./pages/SolarPanel/SolarPanelLearnmore.jsx";
import ConstructionsLearnmore from "./pages/Construction/ConstructionLearnmore.jsx";
import NavigationVertical from "./component/Navigation/NavigationVertical.jsx";
import EnergyVertical from "./component/Energy/EnergyVertical.jsx";
import ConstructionsVertical from "./component/Constructions/ConstructionsVertical.jsx";
import ShopVertical from "./component/Shop/ShopVertical.jsx";
import DiscoverVertical from "./component/Discover/DiscoverVertical.jsx";
import Home from "./pages/Home/Home.jsx";
import { NewBuildingConsultation } from "./pages/Construction/ConstructionConsultation.jsx";
import EnergyOrder from "./pages/SolarPanel/SolarPanelConsultation.jsx";

function App() {
  return (
    <BrowserRouter>
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
