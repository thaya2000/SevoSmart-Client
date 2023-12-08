import React, {useEffect, useState } from "react";
import "./Navigation.css";
import { UilSearch, UilUser } from "@iconscout/react-unicons";
import logo from "../../images/logo.png";
import Energy from "../Energy/Energy.jsx";
import Constructions from "../Constructions/Constructions.jsx";
import Shop from "../Shop/Shop.jsx";
import Discover from "../Discover/Discover.jsx";
import Support from "../Support/Support.jsx";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [showEnergy, setShowEnergy] = useState(false);
  const [showConstuctions, setShowConstuctions] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showDiscover, setShowDiscover] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);




const [scrolled, setScrolled] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollUpThreshold = 100;

      if (scrollPosition > scrollUpThreshold && scrollPosition > prevScrollPosition) {
        // Scrolling up
        setScrolled(true);
      } else {
        // Scrolling down or not enough scroll up
        setScrolled(false);
      }

      setPrevScrollPosition(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);





  const handleEnergyButtonHover = () => {
    setShowEnergy(true);
  };
  const handleConstuctionsButtonHover = () => {
    setShowConstuctions(true);
  };
  const handleShopButtonHover = () => {
    setShowShop(true);
  };
  const handleDiscoverButtonHover = () => {
    setShowDiscover(true);
  };
  const handleSupportButtonHover = () => {
    setShowSupport(true);
  };

  

  const handleEnergyButtonLeave = () => {
    setShowEnergy(false);
  };
  const handleConstuctionsButtonLeave = () => {
    setShowConstuctions(false);
  };
  const handleShopButtonLeave = () => {
    setShowShop(false);
  };
  const handleDiscoverButtonLeave = () => {
    setShowDiscover(false);
  };
  const handleSupportButtonLeave = () => {
    setShowSupport(false);
  };

  return (
    <div
      className="Container"
      onMouseLeave={() => {
        handleConstuctionsButtonLeave();
        handleShopButtonLeave();
        handleDiscoverButtonLeave();
        handleSupportButtonLeave();
        handleEnergyButtonLeave();
      }}
    >
      <div className={`navi ${scrolled ? 'scrolled' : ''}`}>
        <div className="menu">
          <Link to="/menu">
            <button className="menu-button">Menu</button>
          </Link>
        </div>
        <Link to="/">
          <div
            className="logo"
            onMouseEnter={() => {
              handleConstuctionsButtonLeave();
              handleShopButtonLeave();
              handleDiscoverButtonLeave();
              handleSupportButtonLeave();
              handleEnergyButtonLeave();
            }}
          >
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="pageButtons">
          <button
            className={`navibuttons 
            ${showEnergy ? "show-Energy" : ""} 
            ${showConstuctions ? "show-Energy" : ""} 
            ${showShop ? "show-Energy" : ""}
            ${showDiscover ? "show-Energy" : ""}
            ${showSupport ? "show-Energy" : ""}
            `}
            onMouseEnter={() => {
              handleConstuctionsButtonLeave();
              handleShopButtonLeave();
              handleDiscoverButtonLeave();
              handleSupportButtonLeave();
              handleEnergyButtonHover();
            }}
            // onMouseLeave={handleEnergyButtonLeave}
          >
            Energy
          </button>

          <button
            className={`navibuttons 
            ${showEnergy ? "show-Energy" : ""} 
            ${showConstuctions ? "show-Energy" : ""} 
            ${showShop ? "show-Energy" : ""}
            ${showDiscover ? "show-Energy" : ""}
            ${showSupport ? "show-Energy" : ""}
            `}
            onMouseEnter={() => {
              handleEnergyButtonLeave();
              handleShopButtonLeave();
              handleDiscoverButtonLeave();
              handleSupportButtonLeave();
              handleConstuctionsButtonHover();
            }}
            // onMouseLeave={handleConstuctionsButtonLeave}
          >
            Constuctions
          </button>

          <button
            className={`navibuttons 
            ${showEnergy ? "show-Energy" : ""} 
            ${showConstuctions ? "show-Energy" : ""} 
            ${showShop ? "show-Energy" : ""}
            ${showDiscover ? "show-Energy" : ""}
            ${showSupport ? "show-Energy" : ""}
            `}
            onMouseEnter={() => {
              handleConstuctionsButtonLeave();
              handleEnergyButtonLeave();
              handleDiscoverButtonLeave();
              handleSupportButtonLeave();
              handleShopButtonHover();
            }}
          >
            Shop
          </button>

          <button
            className={`navibuttons 
            ${showEnergy ? "show-Energy" : ""} 
            ${showConstuctions ? "show-Energy" : ""} 
            ${showShop ? "show-Energy" : ""}
            ${showDiscover ? "show-Energy" : ""}
            ${showSupport ? "show-Energy" : ""}
            `}
            onMouseEnter={() => {
              handleConstuctionsButtonLeave();
              handleEnergyButtonLeave();
              handleShopButtonLeave();
              handleSupportButtonLeave();
              handleDiscoverButtonHover();
            }}
          >
            Discover
          </button>

          {/* <button
            className={`navibuttons 
            ${showEnergy ? "show-Energy" : ""} 
            ${showConstuctions ? "show-Energy" : ""} 
            ${showShop ? "show-Energy" : ""}
            ${showDiscover ? "show-Energy" : ""}
            ${showSupport ? "show-Energy" : ""}
            `}
            onMouseEnter={() => {
              handleConstuctionsButtonLeave();
              handleEnergyButtonLeave();
              handleShopButtonLeave();
              handleDiscoverButtonLeave();
              handleSupportButtonHover();
            }}
          >
            Support
          </button> */}
        </div>

        <div
          className={`naviSearch 
            ${showEnergy ? "show-Account" : ""} 
            ${showConstuctions ? "show-Account" : ""} 
            ${showShop ? "show-Account" : ""}
            ${showDiscover ? "show-Account" : ""}
            ${showSupport ? "show-Account" : ""}
            `}
          onMouseEnter={() => {
            handleConstuctionsButtonLeave();
            handleShopButtonLeave();
            handleDiscoverButtonLeave();
            handleSupportButtonLeave();
            handleEnergyButtonLeave();
          }}
        >
          <UilSearch />
        </div>
        <div
          className={`naviAccount 
            ${showEnergy ? "show-Account" : ""} 
            ${showConstuctions ? "show-Account" : ""} 
            ${showShop ? "show-Account" : ""}
            ${showDiscover ? "show-Account" : ""}
            ${showSupport ? "show-Account" : ""}
            `}
          onMouseEnter={() => {
            handleConstuctionsButtonLeave();
            handleShopButtonLeave();
            handleDiscoverButtonLeave();
            handleSupportButtonLeave();
            handleEnergyButtonLeave();
          }}
        >
          <Link to="/login">
            <UilUser />
          </Link>
          
        </div>
      </div>
      <div className="dropdown">
        {showEnergy && <Energy />}
        {showConstuctions && <Constructions />}
        {showShop && <Shop />}
        {showDiscover && <Discover />}
        {showSupport && <Support />}
      </div>
    </div>
  );
};

export default Navigation;
