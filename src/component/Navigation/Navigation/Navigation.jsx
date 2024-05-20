import { useState } from "react";
import "./Navigation.css";
import { UilSearch } from "@iconscout/react-unicons";
import NavEnergy from "../NavEnergy/NavEnergy.jsx";
import NavConstruction from "../NavConstruction/NavConstruction.jsx";
import NavShop from "../NavShop/NavShop.jsx";
import NavDiscover from "../NavDiscover/NavDiscover.jsx";
import Logo from "../Logo/Logo.jsx";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { userAuth } from "../../../context/authContext.jsx";
import NavAccountMenu from "../NavAccountMenu/NavAccountMenu.jsx";
import { FaCartShopping } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [auth, setAuth] = userAuth();

  const handleButtonHover = (index) => {
    setActiveDropdown(index);
  };

  const handleButtonLeave = () => {
    setActiveDropdown(null);
  };

  const navItems = [
    { label: "Energy", component: <NavEnergy /> },
    { label: "Construction", component: <NavConstruction /> },
    { label: "Shop", component: <NavShop /> },
    { label: "Discover", component: <NavDiscover /> },
    { label: "Support", component: <div></div> },
  ];

  return (
    <div className="Container">
      <div className="navigationBar">
        <div className="logo w-2/3 sm:w-full">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div
          className="navigationItems hidden lg:flex"
          onMouseLeave={handleButtonLeave}
        >
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
        <div className="naviEnd w-1/3 sm:w-full">
          <div className="naviSearch">
            <UilSearch size="2rem" />
          </div>
          <div>
            {!auth.user ? (
              <NavLink to="/login">
                <div className="navLogin">Log in</div>
              </NavLink>
            ) : (
              <div className="flex flex-row gap-x-1 ">
                <NavLink to="/cart">
                  <div className="px-2">
                    <IoCartOutline size="2rem" />
                  </div>
                </NavLink>
                <div>
                  <NavAccountMenu />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`dropdown absolute ${
          activeDropdown !== null ? "active" : ""
        }`}
        onMouseEnter={() => handleButtonHover(activeDropdown)}
        onMouseLeave={handleButtonLeave}
        onClick={handleButtonLeave}
      >
        {activeDropdown !== null && navItems[activeDropdown].component}
      </div>
    </div>
  );
};

export default Navigation;
