import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { NextUIProvider } from "@nextui-org/react";
import Menu from "./components/nav/Menu.jsx";
import { Login } from "./pages/login/Login.jsx";
import { Signup_step1 } from "./pages/signup/Signup_step1.jsx";
import { Signup_step2 } from "./pages/signup/Signup_step2.jsx";
import { NewBuildingConsultation } from "./pages/new_building_consultation/NewBuildingConsultation.jsx";
import Navigation from "./Components/Navigation/Navigation";
import SolarPanelLearnmore from "./Components/SolarPanelLearnmore/SolarPanelLearnmore.jsx";
import Footer from "./Components/footer/Footer.jsx";
import ConstructionsLearnmore from "./Pages/ConstructionsLearnmore/ConstructionsLearnmore.jsx";
import NavigationVertical from "./components/Navigation/NavigationVertical.jsx";
import Home from "./pages/Home/Home.jsx";


function App() {

  return (

    <BrowserRouter>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/solar-learnmore" element={<SolarPanelLearnmore />} />
        <Route path="/construction-learnmore" element={<ConstructionsLearnmore />} />
        <Route path="/menu" element={<NavigationVertical/>}/>

      </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
