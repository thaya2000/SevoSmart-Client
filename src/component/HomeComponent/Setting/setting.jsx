import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './setting.css'; 
import { userAuth } from '../../../context/authContext';

const Setting = () => {
  const { auth, setAuth } = userAuth

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const { firstname, lastname, email } = user;

  useEffect(() => {
    if (auth && auth.user && auth.user.id) {
      console.log(auth.user.id);
      loadUser();
    }
  }, [auth]);

  const loadUser = async () => {
    try {
      console.log(auth.user.id);
      const response = await axios.get(`https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/auth/users/${auth.user.id}`);
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error loading user data:', error);
      toast.error('Failed to load user data.');
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/auth/users/${auth.user.id}`, {
        firstname,
        lastname,
        email,
      });

      if (response.status === 200) {
        toast.success('Profile updated successfully.');
      } else {
        toast.error('Failed to update profile.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile.');
    }
  };

  return (
    <div className="setting-container">
      <div className="sidebar">
        <div className="profileMain">
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
              <a href="/passwordsetting">
                <li>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/737373/settings.png"
                    alt="settings"
                  />
                  PasswordSettings
                </li>
              </a>
            </div>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <h2 className="profile">Reset Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstname" value={firstname} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastname" value={lastname} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" name="email" value={email} onChange={handleChange} />
          </div>
          <button type="submit" className='setting-submit'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
