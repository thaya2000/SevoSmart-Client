import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./setting.css";
import { userAuth } from "../../../context/authContext";

const Setting = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = userAuth();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (auth && auth.user && auth.user.id) {
      setFirstname(auth.user.firstname);
      setLastname(auth.user.lastname);
      setEmail(auth.user.email);
    }
  }, [auth]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/auth/users/${auth.user.id}`,
        {
          firstname,
          lastname,
          email,
        }
      );
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
    }
  };

  return (
    <div className="setting-container">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="sidebar">
        <div className="profileMain">
          <div className="profilename">
            <span>{auth?.user?.firstname + " " + auth?.user?.lastname}</span>
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
  );
};

export default Setting;
