import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function AdminAuthCheck({ children }) {
  const { token, role, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!loading) {
      if (!token || role !== "ADMIN") {
        navigate("/login", { state: { from: window.location.pathname } });
      } else {
        setIsChecking(false);
      }
    }
  }, [token, role, loading, navigate]);

  if (isChecking) {
    return <Loading />;
  }

  if (!token || role !== "ADMIN") {
    return null;
  }

  return children;
}

AdminAuthCheck.propTypes = {
  children: PropTypes.node.isRequired,
};
