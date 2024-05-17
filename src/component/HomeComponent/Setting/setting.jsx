import React, { useState } from 'react';
import './setting.css'; // Optional: for styling

function Setting() {
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('path-to-placeholder-image');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="setting-container">
      <div className="sidebar">
        <div className="profileMain">
          <div className="profile-picture" onClick={triggerFileInput}>
            <img src={imagePreview} alt="Profile" />
          </div>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <div className="profilename">
            <span>Kithurshika Kirushnan</span>
          </div>
        </div>
        <nav className="navigation">
          <ul className='Ul-order'>
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
        </nav>
      </div>
      <div className="main-content">
        <h2 className="profile">Profile</h2>
        <form>
          <div className="form-group">
            <label>User name</label>
            <input type="text" placeholder="User name" />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" placeholder="Contact Number" />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" placeholder="E-mail" />
          </div>
          <h3 className="password-setting">Setting Password</h3>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" placeholder="New Password" />
          </div>
          <button type="submit" className='setting-submit'>Save</button>
        </form>
      </div>
    </div>
  );
}

export default Setting;
