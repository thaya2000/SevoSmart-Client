import React from 'react';
import "./NavSupport.css";

const NavSupport = () => {
  const scrollToFooter = () => {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Support" onClick={scrollToFooter}>
      Contact
    </div>
  );
};

export default NavSupport;
