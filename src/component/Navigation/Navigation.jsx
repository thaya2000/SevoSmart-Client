import { useState } from "react";
import "./Navigation.css";
import { UilSearch, UilUserCircle } from "@iconscout/react-unicons";
import Energy from "./NavComponent/Energy/Energy.jsx";
import Constructions from "./NavComponent/Constructions/Constructions.jsx";
import Shop from "./NavComponent/Shop/Shop.jsx";
import Discover from "./NavComponent/Discover/Discover.jsx";
import Logo from "./NavComponent/Logo/Logo.jsx";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { userAuth } from "../../context/authContext";
import AccountMenu from "./NavComponent/AccountMenu/AccountMenu.jsx";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeProfile, setActiveProfile] = useState(false);

  const [auth, setAuth] = userAuth();
  const navigate = useNavigate();
  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const handleButtonHover = (index) => {
    setActiveDropdown(index);
  };

  const handleButtonLeave = () => {
    setActiveDropdown(null);
  };

  const handleProfileHover = () => {
    setActiveProfile(true);
  };

  const handleProfileLeave = () => {
    setActiveProfile(false);
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
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="navigationItems" onMouseLeave={handleButtonLeave}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="navibuttons"
              onMouseEnter={() => handleButtonHover(index)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="naviEnd">
          <div className="naviSearch">
            <UilSearch />
          </div>
          <div>
            {!auth.user ? (
              <NavLink to="/login">
                <div className="navLogin">Log in</div>
              </NavLink>
            ) : (
              <div className="flex flex-col">
                <AccountMenu />
              </div>
            )}
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
