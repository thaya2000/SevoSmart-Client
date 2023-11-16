import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Menu from "./components/nav/Menu.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <NextUIProvider>
      <Menu />
    </NextUIProvider>
  );
}

export default App;
