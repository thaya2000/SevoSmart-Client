import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './setting.css'; // Optional: for styling
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import RambousLoader from "../../../routes/RambousLoader";

function Passwordsetting() {
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('path-to-placeholder-image');
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const { oldPassword, newPassword, confirmPassword } = formData;

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error('Please fill in all fields.');
      return;
    }

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      toast.error('New password and confirm password do not match.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.put(`https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/auth/users/password/${user.userId}`, {
        newPassword,
        oldPassword
      });
      setLoading(false);

      if (response.status === 200) {
        toast.success('Password updated successfully.');
        navigate('/'); // Redirect to home page
      } else {
        toast.error('Failed to update password.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error('Failed to update password.');
      setLoading(false);
    }
  };

  return (
    <div>
        {loading ? (
        <RambousLoader />
      ) : (
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
              <a href="/setting">
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Current Password</label>
            <input type="password" name="oldPassword" value={oldPassword} onChange={handleChange} placeholder="Current password" />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input type="password" name="newPassword" value={newPassword} onChange={handleChange} placeholder="New Password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
          </div>
          <button type="submit" className='setting-submit'>Save</button>
        </form>
      </div>
    </div>
      )}
    </div>
  );
}

export default Passwordsetting;
