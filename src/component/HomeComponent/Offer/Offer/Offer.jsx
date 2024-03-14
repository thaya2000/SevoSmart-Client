import ReactFlow, { useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";
import OfferDescription from "../OfferDescription/OfferDescription.jsx";
import OfferNode from "../OfferNode/OfferNode.jsx";
import "../OfferDescription/OfferDescription.css";
import "../OfferNode/OfferNode.css";

import { FaLightbulb } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { BsLightningFill } from "react-icons/bs";

const initialNodes = [
  {
    id: "interaction-0",
    sourcePosition: "right",
    type: "textUpdater",
    data: { label: "Node 0" },
    position: { x: 50, y: -100 },
  },
  {
    id: "interaction-1",
    targetPosition: "left",
    type: "offer",
    data: {
      label: "25 year warranty",
      iconBgColor: "#FFD700",
      labelBgColor: "#ffffff",
      icon: <FaLightbulb size="1.5vw" />,
    },
    position: { x: 300, y: -100 },
  },
  {
    id: "interaction-2",
    sourcePosition: "left",
    type: "offer",
    data: {
      label: "100% inverter warranty",
      iconBgColor: "#ffffff",
      labelBgColor: "#FFD700",
      icon: <MdSecurity size="1.5vw" />,
    },
    position: { x: 310, y: -50 },
  },
  {
    id: "interaction-3",
    sourcePosition: "left",
    type: "offer",
    data: {
      label: "95% save electricity",
      iconBgColor: "#FFD700",
      labelBgColor: "#ffffff",
      icon: <BsLightningFill size="1.5vw" />,
    },
    position: { x: 320, y: 0 },
  },
  {
    id: "interaction-4",
    sourcePosition: "left",
    type: "offer",
    data: {
      label: "10 years of battery life",
      iconBgColor: "#ffffff",
      labelBgColor: "#FFD700",
      icon: <MdSecurity size="1.5vw" />,
    },
    position: { x: 310, y: 50 },
  },
  {
    id: "interaction-5",
    sourcePosition: "left",
    type: "offer",
    data: {
      label: "25 year panel warranty",
      iconBgColor: "#FFD700",
      labelBgColor: "#ffffff",
      icon: <FaLightbulb size="1.5vw" />,
    },
    position: { x: 300, y: 100 },
  },
];

const initialEdges = [
  {
    id: "interaction-0e-1",
    source: "interaction-0",
    sourceHandle: "e",
    target: "interaction-1",
    type: "straight",
  },
  {
    id: "interaction-0d-2",
    source: "interaction-0",
    sourceHandle: "d",
    target: "interaction-2",
    type: "straight",
  },
  {
    id: "interaction-0a-3",
    source: "interaction-0",
    sourceHandle: "a",
    target: "interaction-3",
    type: "straight",
  },
  {
    id: "interaction-0b-4",
    source: "interaction-0",
    sourceHandle: "b",
    target: "interaction-4",
    type: "straight",
  },
  {
    id: "interaction-0c-5",
    source: "interaction-0",
    sourceHandle: "c",
    target: "interaction-5",
    type: "straight",
  },
];

const nodeTypes = { textUpdater: OfferDescription, offer: OfferNode };

const Offer = () => {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const proOptions = { hideAttribution: true };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      elementsSelectable={false}
      nodesDraggable={false}
      zoomOnDoubleClick={false}
      panOnDrag={false}
      nodeTypes={nodeTypes}
      fitView
      proOptions={proOptions}
      preventScrolling={false}
    ></ReactFlow>
  );
};

export default Offer;
