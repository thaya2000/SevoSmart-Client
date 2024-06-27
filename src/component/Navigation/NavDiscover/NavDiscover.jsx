import React from "react";
import "./NavDiscover.css";

const NavDiscover = () => {
  return (
    <div className="Discover">
  <div className="left">
    <span><a href="/about-us">About us</a></span>
    <span><a href="/careers">Careers</a></span>
    <span><a href="/investor-relations">Investor Relations</a></span>
  </div>
  <div className="right">
    <span><a href="/video-guides">Video Guides</a></span>
    <span><a href="/customer-stories">Customer Stories</a></span>
    <span><a href="/events">Events</a></span>
  </div>
</div>

  );
};

export default NavDiscover;
