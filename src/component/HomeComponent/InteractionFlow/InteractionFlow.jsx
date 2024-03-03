import React, { useState, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Panel,
} from "reactflow";

import "reactflow/dist/style.css";

import TextUpdaterNode from "./TextUpdaterNode.jsx";
import OfferNode from "./OfferNode.jsx";

import "./text-updater-node.css";
import "./offerNode.css";

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

const onNodeDragStart = (event, node) => console.log("drag start", node);
const onNodeDragStop = (event, node) => console.log("drag stop", node);
const onNodeClick = (event, node) => console.log("click node", node);
const onPaneClick = (event) => console.log("onPaneClick", event);
const onPaneScroll = (event) => console.log("onPaneScroll", event);
const onPaneContextMenu = (event) => console.log("onPaneContextMenu", event);

const nodeTypes = { textUpdater: TextUpdaterNode, offer: OfferNode };

const InteractionFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  const [isSelectable, setIsSelectable] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const [isConnectable, setIsConnectable] = useState(false);
  const [zoomOnScroll, setZoomOnScroll] = useState(false);
  const [panOnScroll, setPanOnScroll] = useState(false);
  const [panOnScrollMode, setPanOnScrollMode] = useState("free");
  const [zoomOnDoubleClick, setZoomOnDoubleClick] = useState(false);
  const [panOnDrag, setpanOnDrag] = useState(true);
  const [captureZoomClick, setCaptureZoomClick] = useState(false);
  const [captureZoomScroll, setCaptureZoomScroll] = useState(false);
  const [captureElementClick, setCaptureElementClick] = useState(false);

  const proOptions = { hideAttribution: true };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      elementsSelectable={isSelectable}
      nodesConnectable={isConnectable}
      nodesDraggable={isDraggable}
      zoomOnPinch={true}
      zoomOnScroll={zoomOnScroll}
      panOnScroll={panOnScroll}
      panOnScrollMode={panOnScrollMode}
      zoomOnDoubleClick={zoomOnDoubleClick}
      selectNodesOnDrag={false}
      onConnect={onConnect}
      onNodeClick={captureElementClick ? onNodeClick : undefined}
      onNodeDragStart={onNodeDragStart}
      onNodeDragStop={onNodeDragStop}
      panOnDrag={panOnDrag}
      onPaneClick={captureZoomClick ? onPaneClick : undefined}
      onPaneScroll={captureZoomScroll ? onPaneScroll : undefined}
      onPaneContextMenu={captureZoomClick ? onPaneContextMenu : undefined}
      nodeTypes={nodeTypes}
      fitView
      attributionPosition="top-left"
      proOptions={proOptions}
    >
      {/* <MiniMap /> */}
      {/* <Controls /> */}

      {/* <Panel position="topleft">
        <div>
          <label htmlFor="draggable">
            <input
              id="draggable"
              type="checkbox"
              checked={isDraggable}
              onChange={(event) => setIsDraggable(event.target.checked)}
              className="react-flow__draggable"
            />
            nodesDraggable
          </label>
        </div>
        <div>
          <label htmlFor="connectable">
            <input
              id="connectable"
              type="checkbox"
              checked={isConnectable}
              onChange={(event) => setIsConnectable(event.target.checked)}
              className="react-flow__connectable"
            />
            nodesConnectable
          </label>
        </div>
        <div>
          <label htmlFor="selectable">
            <input
              id="selectable"
              type="checkbox"
              checked={isSelectable}
              onChange={(event) => setIsSelectable(event.target.checked)}
              className="react-flow__selectable"
            />
            elementsSelectable
          </label>
        </div>
        <div>
          <label htmlFor="zoomonscroll">
            <input
              id="zoomonscroll"
              type="checkbox"
              checked={zoomOnScroll}
              onChange={(event) => setZoomOnScroll(event.target.checked)}
              className="react-flow__zoomonscroll"
            />
            zoomOnScroll
          </label>
        </div>
        <div>
          <label htmlFor="panonscroll">
            <input
              id="panonscroll"
              type="checkbox"
              checked={panOnScroll}
              onChange={(event) => setPanOnScroll(event.target.checked)}
              className="react-flow__panonscroll"
            />
            panOnScroll
          </label>
        </div>
        <div>
          <label htmlFor="panonscrollmode">
            <select
              id="panonscrollmode"
              value={panOnScrollMode}
              onChange={(event) => setPanOnScrollMode(event.target.value)}
              className="react-flow__panonscrollmode"
            >
              <option value="free">free</option>
              <option value="horizontal">horizontal</option>
              <option value="vertical">vertical</option>
            </select>
            panOnScrollMode
          </label>
        </div>
        <div>
          <label htmlFor="zoomondbl">
            <input
              id="zoomondbl"
              type="checkbox"
              checked={zoomOnDoubleClick}
              onChange={(event) => setZoomOnDoubleClick(event.target.checked)}
              className="react-flow__zoomondbl"
            />
            zoomOnDoubleClick
          </label>
        </div>
        <div>
          <label htmlFor="panOnDrag">
            <input
              id="panOnDrag"
              type="checkbox"
              checked={panOnDrag}
              onChange={(event) => setpanOnDrag(event.target.checked)}
              className="react-flow__panOnDrag"
            />
            panOnDrag
          </label>
        </div>
        <div>
          <label htmlFor="capturezoompaneclick">
            <input
              id="capturezoompaneclick"
              type="checkbox"
              checked={captureZoomClick}
              onChange={(event) => setCaptureZoomClick(event.target.checked)}
              className="react-flow__capturezoompaneclick"
            />
            capture onPaneClick
          </label>
        </div>
        <div>
          <label htmlFor="capturezoompanescroll">
            <input
              id="capturezoompanescroll"
              type="checkbox"
              checked={captureZoomScroll}
              onChange={(event) => setCaptureZoomScroll(event.target.checked)}
              className="react-flow__capturezoompanescroll"
            />
            capture onPaneScroll
          </label>
        </div>
        <div>
          <label htmlFor="captureelementclick">
            <input
              id="captureelementclick"
              type="checkbox"
              checked={captureElementClick}
              onChange={(event) => setCaptureElementClick(event.target.checked)}
              className="react-flow__captureelementclick"
            />
            capture onElementClick
          </label>
        </div>
      </Panel> */}
    </ReactFlow>
  );
};

export default InteractionFlow;
