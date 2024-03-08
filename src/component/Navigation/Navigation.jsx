import { useState } from "react";
import "./Navigation.css";
import { UilSearch, UilUserCircle } from "@iconscout/react-unicons";
import Energy from "./NavComponent/Energy/Energy.jsx";
import Constructions from "./NavComponent/Constructions/Constructions.jsx";
import Shop from "./NavComponent/Shop/Shop.jsx";
import Discover from "./NavComponent/Discover/Discover.jsx";
import Logo from "./NavComponent/Logo/Logo.jsx";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(1);

  const handleButtonHover = (index) => {
    setActiveDropdown(index);
  };

  const handleButtonLeave = () => {
    setActiveDropdown(1);
  };

  const navItems = [
    { label: "Energy", component: <Energy /> },
    { label: "Constructions", component: <Constructions /> },
    { label: "Shop", component: <Shop /> },
    { label: "Discover", component: <Discover /> },
    { label: "Support", component: <div></div> },
  ];

  return (
    <div className="Container">
      <div className="navigationBar">
        <div className="logo">
          <Logo />
        </div>
        <div className="navigationItems" onMouseLeave={handleButtonLeave}>
          {navItems.map((item, index) => (
            <button
              key={index}
              className="navibuttons"
              onMouseEnter={() => handleButtonHover(index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="naviEnd">
          <div className="naviSearch">
            <UilSearch />
          </div>
          <div className="naviAccount">
            <UilUserCircle />
          </div>
        </div>
      </div>
      <div
        className={`dropdown ${activeDropdown !== null ? "active" : ""}`}
        onMouseEnter={() => handleButtonHover(activeDropdown)}
        onMouseLeave={handleButtonLeave}
      >
        {activeDropdown !== null && navItems[activeDropdown].component}
      </div>
    </div>
  );
};

export default Navigation;
