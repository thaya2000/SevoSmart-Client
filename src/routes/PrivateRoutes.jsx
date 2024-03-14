import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { userAuth } from "../context/authContext";
import axios from "axios";
import Loading from "./Loading";

export default function PrivateRoutes() {
  const [auth, setAuth] = userAuth();
  // state
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      const { status } = await axios.get(`/auth-check`);
      console.log(status);
      if (status === 200) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Loading />;
}
