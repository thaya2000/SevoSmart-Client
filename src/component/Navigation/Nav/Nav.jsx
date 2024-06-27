import React, { useState } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

import EnergyVertical from "../NavEnergy/EnergyVertical.jsx";
import NavConstruction from "../NavConstruction/ConstructionsVertical.jsx";
import NavShop from "../NavShop/ShopVertical.jsx";
import NavDiscover from "../NavDiscover/DiscoverVertical.jsx";
import NavigationVertical from '../Navigation/NavigationVertical.jsx';
const Nav = () => {
    const [modelOpened, setModelOpened] = useState(false); 
    const [activeDropdown, setActiveDropdown] = useState(null);
    // const { user } = useSelector((state) => state.auth);
    const toggleModal = () => {
        setModelOpened(!modelOpened);
    };
  const navigate = useNavigate();
    const toggleNavButtons = () => {
        setModelOpened(!modelOpened);  // Toggle state to show/hide menu
    }
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
    { label: "Energy", component: <EnergyVertical />, onClick: handleEnergyClick },
    { label: "Construction", component: <NavConstruction />, onClick: handleConstructionClick },
    { label: "Shop", component: <NavShop />, onClick: handleShopClick },
    { label: "Discover", component: <NavDiscover /> },
    { label: "Support", component: <div></div> },
    { label: "News", onClick: handleNewsClick }
  
  ];
    return (
        <div className='Nav'>
            <button onClick={toggleNavButtons} className="relative z-20">
                <div className="menu-icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </button>
            {modelOpened && <NavigationVertical onClose={toggleModal}/>}
            {/* <div className={navButtons ${modelOpened ? 'navButtons-active' : ''}} style={{zIndex: 10}}>
                {navItems.map((item, index) => (
                    <>
                    <div
                    key={index}
                    className="navibuttons-vertical"
                    onMouseEnter={() => handleButtonHover(index)}
                    onClick={item.onClick}
                    >
                    {item.label}
                    </div>

                    
                  
                        </>
                ))}



            </div>
              <div
                        className={`vertical-dropdown  ${
                        activeDropdown !== null ? "vertical-active" : ""
                        }`}
                        onMouseEnter={() => handleButtonHover(activeDropdown)}
                        onMouseLeave={handleButtonLeave}
                        onClick={handleButtonLeave}
                    >
                        {activeDropdown !== null && navItems[activeDropdown].component}
                        </div> */}
        
        </div>
    )
}

export default Nav;