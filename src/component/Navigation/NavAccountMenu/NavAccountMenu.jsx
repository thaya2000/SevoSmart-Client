import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../../context/authContext";
import "./NavAccountMenu.css";
import { dropdownMenu } from "@nextui-org/react";

export default function NavAccountMenu() {
  const [auth, setAuth] = userAuth();
  const [activeProfile, setActiveProfile] = useState(false);

  const navigate = useNavigate();
  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const toggleMenu = () => {
    setActiveProfile(!activeProfile);
  };

  return (
    <div>
      <div onClick={toggleMenu}>
        <div className="naviAccount">
          {auth.user.firstname.charAt(0).toUpperCase()}
        </div>
      </div>
      {activeProfile && (
        <div className="dropdown-menu">
          <button
            className="flex w-full content-end justify-end p-3"
            onClick={toggleMenu}
          >
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/pastel-glyph/64/737373/cancel--v1.png"
              alt="cancel--v1"
            />
          </button>

          <div className="profilename-container">
            <span className="profile-name">
              {auth.user.firstname + " " + auth.user.lastname}
            </span>
          </div>

          <div className="ul-container">
            <ul className="list">
              <div className="bag-containerA">
                <a href="/cart">
                  <li>
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/30/737373/shopping-bag.png"
                      alt="shopping-bag"
                    />
                    My orders
                  </li>
                </a>
              </div>
              <div className="bag-containerB">
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/737373/like--v1.png"
                    alt="like--v1"
                  />
                  Wishlist
                </li>
              </div>
              <div className="bag-containerC">
              <a href="/setting">
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/737373/settings.png"
                    alt="settings"
                  />
                  Settings
                </li>
                </a>
              </div>
            </ul>
          </div>
          <div className="logout-container">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/FA5252/logout-rounded-left.png"
              alt="logout-rounded-left"
            />
            <button
              className="log-out"
              onClick={() => {
                dropdownMenu();
                logout();
              }}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
