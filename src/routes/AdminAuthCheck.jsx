// AdminAuthCheck.jsx
import { useEffect, useState } from "react";
import { userAuth } from "../context/authContext";
import axios from "axios";
import Loading from "./Loading";
import PropTypes from "prop-types";

export default function AdminAuthCheck({ children }) {
  const [auth, setAuth] = userAuth();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      if (auth?.token) {
        try {
          const { status } = await axios.get("/api/v1/auth/admin-check", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          });
          console.log("adminAuthCheck response : " + status);
          setOk(status === 200);
        } catch (error) {
          console.log(error.response?.status || "Network error");
          setOk(false);
        }
      }
    };
    authCheck();
  }, [auth?.token]);

  return ok ? children : <Loading />;
}

AdminAuthCheck.propTypes = {
  children: PropTypes.node,
};
