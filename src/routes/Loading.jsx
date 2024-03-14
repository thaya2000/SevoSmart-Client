import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Rhombus from "../assets/Loaders/Rhombus.gif";

export default function Loading() {
  // state
  const [count, setCount] = useState(3);
  //hooks
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && navigate("/login");

    // cleanup
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="flex items-center justify-center w-100v h-100v">
      <img src={Rhombus} alt="loading" />
    </div>
  );
}
