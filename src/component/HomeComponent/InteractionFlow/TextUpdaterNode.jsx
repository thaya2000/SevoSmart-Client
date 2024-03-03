import { Handle, Position } from "reactflow";
import offer_solar from "../../../assets/offer_solar.png";

function TextUpdaterNode({ data, isConnectable }) {
  return (
    <div className="flex  justify-center text-updater-node arc">
      <div className="circle deg-0 flex justify-center items-center">
        <Handle
          type="source"
          position={Position.Right}
          id="a"
          isConnectable={isConnectable}
        />
      </div>
      <div className="circle deg-22">
        <Handle
          type="source"
          position={Position.Right}
          id="b"
          isConnectable={isConnectable}
        />
      </div>
      <div className="circle deg-45">
        <Handle
          type="source"
          position={Position.Right}
          id="c"
          isConnectable={isConnectable}
        />
      </div>
      <div className="circle deg-338">
        <Handle
          type="source"
          position={Position.Right}
          id="d"
          isConnectable={isConnectable}
        />
      </div>
      <div className="circle deg-315">
        <Handle
          type="source"
          position={Position.Right}
          id="e"
          isConnectable={isConnectable}
        />
      </div>

      <div className=" flex items-center justify-center relative w-full h-full ">
        <img src={offer_solar} alt="offer_solar" className="w-full h-full" />
        <div className="offer-amount flex items-center justify-center w-2/5 h-2/5   absolute bottom-0 left-0 ">
          50%
          <div className="dash-circle flex items-center justify-center absolute "></div>
        </div>
      </div>
    </div>
  );
}

export default TextUpdaterNode;
