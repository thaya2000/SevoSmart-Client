import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { userAuth } from "../context/authContext";
import axios from "axios";
import Loading from "./Loading";

export default function PrivateRoutes() {
  const [auth, setAuth] = userAuth();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      if (auth?.token) {
        try {
          const { status } = await axios.get("/api/v1/auth/auth-check", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          });
          console.log(status);
          setOk(status === 200);
        } catch (error) {
          console.log(error.response?.status || "Network error");
          setOk(false);
        }
      }
    };

    authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loading />;
}
