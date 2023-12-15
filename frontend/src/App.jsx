import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./Components/Navigation/Navigation";

import SolarPanelLearnmore from "./Components/SolarPanelLearnmore/SolarPanelLearnmore.jsx";
import Footer from "./Components/footer/Footer.jsx";
import ConstructionsLearnmore from "./Pages/ConstructionsLearnmore/ConstructionsLearnmore.jsx";
import NavigationVertical from "./components/Navigation/NavigationVertical.jsx";
import Home from "./pages/Home/Home.jsx";
import EnergyVertical from "./components/Energy/EnergyVertical.jsx";
import ConstructionsVertical from "./components/Constructions/ConstructionsVertical.jsx";
import Login from "./Pages/Auth/login/Login.jsx";
import ShopVertical from "./components/Shop/ShopVertical.jsx";
import DiscoverVertical from "./components/Discover/DiscoverVertical.jsx";
import Signup_step1 from "./Pages/Auth/signup/Signup_step1.jsx";
import Constructions from "./Components/Constructions/Constructions.jsx";
import { NewBuildingConsultation } from "./Pages/new_building_consultation/NewBuildingConsultation.jsx";
import EnergyOrder from "./Pages/energy_order/EnergyOrder.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar-learnmore" element={<SolarPanelLearnmore />} />
        <Route
          path="/construction-learnmore"
          element={<ConstructionsLearnmore />}
        />
        <Route path="/menu" element={<NavigationVertical />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
