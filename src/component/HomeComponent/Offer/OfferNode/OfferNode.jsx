import React from "react";
import { Handle, Position } from "reactflow";
import { FaLightbulb } from "react-icons/fa6";
import "./OfferNode.css";

export default function OfferNode({ data, isConnectable }) {
  return (
    <div className="offer">
      <div
        className="offer-icon flex items-center justify-center"
        style={{ backgroundColor: data.iconBgColor }}
      >
        {data.icon}
      </div>
      <div
        className="offer-label"
        style={{ backgroundColor: data.labelBgColor }}
      >
        {data.label}
        <Handle
          type="target"
          position={Position.Left}
          id="o"
          isConnectable={isConnectable}
        />
      </div>
    </div>
  );
}
