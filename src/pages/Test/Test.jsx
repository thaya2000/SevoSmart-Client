import React from "react";
import "./Test.css";

export default function Test() {
  return (
    <div className="fixed w-screen h-9/10 overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-center w-screen h-100v  bg-yellow-600">
        <div className="circle-wrapper relative">
          <div className="circle deg-0">Lor</div>
          <div className="circle deg-22">Lore</div>
          <div className="circle deg-45">Lore</div>
          <div className="circle deg-338">Lorem</div>
          <div className="circle deg-315">Lorem</div>
          {/* <div className="circle deg-225">Lorem</div> */}
          {/* <div className="circle deg-270">Lorem</div> */}
          {/* <div className="circle deg-315">Lorem</div> */}
        </div>
      </div>
    </div>
  );
}
