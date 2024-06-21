import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import "./NavAccountMenu.css";

export default function NavAccountMenu() {
  const { user } = useSelector((state) => state.auth);
  const [activeProfile, setActiveProfile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const toggleMenu = () => {
    setActiveProfile(!activeProfile);
  };

  return (
    <div>
      <div onClick={toggleMenu}>
        {/* <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios-filled/50/737373/menu--v1.png"
          alt="menu"
        /> */}
        <div className="naviAccount">
          {user && user.firstName ? user.firstName.charAt(0).toUpperCase() : ""}
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
              {user && user.firstName && user.lastName
                ? `${user.firstName} ${user.lastName}`
                : ""}
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
            <button className="log-out" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
