import React, { useState } from 'react';

function Passwordsetting() {
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
              <a href="">
                <li>
                <img width="20" height="20" src="https://img.icons8.com/tiny-glyph/16/737373/user-male-circle.png" alt="user-male-circle"/>
                  Account
                </li>
              </a>
            </div>
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
              <li>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/737373/settings.png"
                  alt="settings"
                />
                 Password Settings
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <h2 className="profile">Reset Password</h2>
        <form>
          <div className="form-group">
            <label>Current Password</label>
            <input type="text" placeholder="Current password" />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="text" placeholder="New Password" />
          </div>
          

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="text" placeholder="Confirm Password" />
          </div>
          
          
         
          
          <button type="submit" className='setting-submit'>Save</button>
        </form>
      </div>
    </div>
  );
}

export default Passwordsetting;
