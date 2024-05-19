import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Rhombus from "../assets/Loaders/Rhombus.gif";

export default function Loading() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && navigate("/login", { state: { from: location } });

    // cleanup
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="flex items-center justify-center w-100v h-100v">
      <img src={Rhombus} alt="loading" />
    </div>
  );
}
