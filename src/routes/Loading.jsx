import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Rhombus from "../assets/Loaders/Rhombus.gif";

export default function Loading() {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("/login", { state: { from: location } });
    }
  }, [count, navigate, location]);

  return (
    <div className="flex items-center justify-center w-100v h-100v">
      <img src={Rhombus} alt="loading" />
    </div>
  );
}
