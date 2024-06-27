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
import { useSelector } from "react-redux";
import NavAccountMenu from "../NavAccountMenu/NavAccountMenu.jsx";
import { IoCartOutline } from "react-icons/io5";
import NewsPage from "../../../pages/News/NewsPage.jsx";

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleButtonHover = (index) => {
    setActiveDropdown(index);
  };

  const handleButtonLeave = () => {
    setActiveDropdown(null);
  };
  const handleNewsClick = () => {
    navigate('/news');
  };
  const handleShopClick = () => {
    navigate('/accessories');
  };

  const handleConstructionClick = () => {
    navigate('/construction-learnmore');
  };
  const handleEnergyClick = () => {
    navigate('/energy-learnmore');
  };

  const navItems = [
    { label: "Energy", component: <NavEnergy />,onClick:handleEnergyClick },
    { label: "Construction", component: <NavConstruction /> ,onClick:handleConstructionClick},
    { label: "Shop", component: <NavShop />,onClick: handleShopClick },
    { label: "Discover", component: <NavDiscover /> },
    { label: "Contact", component: <div></div> },
    { label: "News", onClick: handleNewsClick }
  
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
              onClick={item.onClick}
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
            {!user ? (
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
