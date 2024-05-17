import { useState, useRef } from "react";
import "./Userdropdownmenu.css";
import { dropdownMenu } from "@nextui-org/react";

const UserDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <div className="user-dropdown">
      <div onClick={toggleMenu}>
        <img
          className="profile-picture"
          src={profilePicture || "default_profile_picture_path"}
          alt="Profile"
        />
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {isMenuOpen && (
        <div className="dropdown-menu">
          <button className="close-button" onClick={toggleMenu}>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/pastel-glyph/64/737373/cancel--v1.png"
              alt="cancel--v1"
            />
          </button>
          <div className="profilename-container" onClick={handleImageUpload}>
            <img
              className="profile-picture-dropdown"
              src={profilePicture || "default_profile_picture_path"}
              alt="Profile"
            />
            <img
              className="camera-icon"
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/737373/camera--v1.png"
              alt="camera--v1"
            />
            <span className="profile-name">Kithurshika Kirushnan</span>
          </div>

          <div className="ul-container">
            <ul className="list">
              <div className="bag-containerA">
                <a href="/order-summary">
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
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/737373/settings.png"
                    alt="settings"
                  />
                  Settings
                </li>
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
            <button className="log-out" onClick={dropdownMenu}>
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
