import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../../../context/authContext";
import "./AccountMenu.css";

export default function AccountMenu() {
  const [auth, setAuth] = userAuth();
  const [activeProfile, setActiveProfile] = useState(false);

  const navigate = useNavigate();
  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const handleProfileHover = () => {
    setActiveProfile(true);
  };

  const handleProfileLeave = () => {
    setActiveProfile(false);
  };

  return (
    <div>
      <div onMouseEnter={handleProfileHover} onMouseLeave={handleProfileLeave}>
        <button className="naviAccount">
          {auth.user.firstname.charAt(0).toUpperCase()}
        </button>
      </div>
      {activeProfile && (
        <div
          className="account-menu-container"
          onMouseEnter={handleProfileHover}
          onMouseLeave={handleProfileLeave}
        >
          <div className="account-menu">
            <NavLink to="/solar-learnmore">
              <div className="account-menu-item">{auth.user.firstname}</div>
            </NavLink>
            <NavLink to="/solar-learnmore">
              <div className="account-menu-item">Profile</div>
            </NavLink>
            <NavLink to="/solar-learnmore">
              <div className="account-menu-item">Settings</div>
            </NavLink>
            <NavLink to="/login">
              <div className="account-menu-item" onClick={logout}>
                Log out
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}