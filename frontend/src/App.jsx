import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation.jsx";
import SolarPanelLearnmore from "./Components/SolarPanelLearnmore/SolarPanelLearnmore.jsx";
import Footer from "./Components/footer/Footer.jsx";
import ConstructionsLearnmore from "./Pages/ConstructionsLearnmore/ConstructionsLearnmore.jsx";
import NavigationVertical from "./components/Navigation/NavigationVertical.jsx";
import Home from "./pages/Home/Home.jsx";
import EnergyVertical from "./components/Energy/EnergyVertical.jsx";
import ConstructionsVertical from "./components/Constructions/ConstructionsVertical.jsx";
import Login from './Pages/Auth/login/Login.jsx'
import ShopVertical from "./components/Shop/ShopVertical.jsx";

function App() {

  return (
    <BrowserRouter>
      
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar-learnmore" element={<SolarPanelLearnmore />} />
        <Route path="/construction-learnmore" element={<ConstructionsLearnmore />} />
        <Route path="/menu" element={<NavigationVertical />} />
        <Route path="/energy-vertical" element={<EnergyVertical />} />
        <Route path="/construction-vertical" element={<ConstructionsVertical />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop-vertical" element={<ShopVertical />} />

        
      </Routes>
    <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
