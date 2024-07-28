import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./setting.css";
import { userAuth } from "../../../context/authContext";
import { useSelector } from "react-redux";
import RambousLoader from "../../../routes/RambousLoader";

const Setting = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = userAuth();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/v1/auth/users/${user.userId}`);
      const userData = response.data;
      setFirstname(userData.firstname);
      setLastname(userData.lastname);
      setEmail(userData.email);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Failed to fetch user details.");
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.put(`/api/v1/auth/users/${user.userId}`, {
        firstname,
        lastname,
        email,
      });
      setLoading(false);
      if (response.status === 200) {
        toast.success("Profile updated successfully.");
        setAuth((prevAuth) => {
          const updatedAuth = {
            ...prevAuth,
            user: {
              ...prevAuth.user,
              firstname: firstname,
              lastname: lastname,
              email: email,
            },
          };
          localStorage.setItem("auth", JSON.stringify(updatedAuth));
          return updatedAuth;
        });
        navigate("/");
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
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
              <div className="profilename">
                <span>
                  {auth?.user?.firstname + " " + auth?.user?.lastname}
                </span>
              </div>
            </div>
            <nav className="navigation">
              <ul className="Ul-order">
                <div className="bag-containerA">
                  <a href="">
                    <li>
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/tiny-glyph/16/737373/user-male-circle.png"
                        alt="user-male-circle"
                      />
                      Account
                    </li>
                  </a>
                </div>
                <div className="bag-containerA">
                  <a href="/my-orders">
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
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="setting-submit">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Setting;
