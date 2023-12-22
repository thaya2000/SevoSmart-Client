import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import SolarPanelLearnmore from "./Pages/SolarPanelLearnmore/SolarPanelLearnmore.jsx";
import ConstructionsLearnmore from "./Pages/ConstructionsLearnmore/ConstructionsLearnmore.jsx";
import NavigationVertical from "./Components/Navigation/NavigationVertical.jsx";

import EnergyVertical from "./Components/Energy/EnergyVertical.jsx";
import ConstructionsVertical from "./Components/Constructions/ConstructionsVertical.jsx";

import ShopVertical from "./Components/Shop/ShopVertical.jsx";
import DiscoverVertical from "./Components/Discover/DiscoverVertical.jsx";

import Home from "./Pages/Home/Home.jsx";
import { NewBuildingConsultation } from "./Pages/NewBuildingConsultation/NewBuildingConsultation.jsx";
import EnergyOrder from "./Pages/EnergyOrder/EnergyOrder.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}

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
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
