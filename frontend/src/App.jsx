import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Menu from "./components/nav/Menu.jsx";
import { Login } from "./pages/login/Login.jsx";
import { Signup_step1 } from "./pages/signup/Signup_step1.jsx";
import { Signup_step2 } from "./pages/signup/Signup_step2.jsx";
import { NewBuildingConsultation } from "./pages/new_building_consultation/NewBuildingConsultation.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <NextUIProvider>
      <Login/>
    </NextUIProvider>
  );
}

export default App;
