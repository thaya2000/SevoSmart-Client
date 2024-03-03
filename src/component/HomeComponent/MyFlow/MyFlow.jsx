import React from "react";
import ReactFlow, { addEdge, MiniMap, Controls } from "react-flow-renderer";

const MyFlow = () => {
  const elements = [
    {
      id: "1",
      type: "input",
      data: { label: "Left Div" },
      position: { x: 100, y: 100 },
    },
    { id: "2", data: { label: "Right Div 1" }, position: { x: 400, y: 100 } },
    { id: "3", data: { label: "Right Div 2" }, position: { x: 500, y: 100 } },
    { id: "4", data: { label: "Right Div 3" }, position: { x: 600, y: 100 } },
    { id: "5", data: { label: "Right Div 4" }, position: { x: 700, y: 100 } },
    { id: "6", data: { label: "Right Div 5" }, position: { x: 800, y: 100 } },
  ];

  const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
  };

  const onConnect = (params) => console.log("onConnect", params);

  return (
    <ReactFlow
      elements={elements}
      onLoad={onLoad}
      onConnect={onConnect}
      snapToGrid={true}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};

export default MyFlow;
