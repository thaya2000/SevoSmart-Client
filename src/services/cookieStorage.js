import Cookies from "js-cookie";

const cookieStorage = {
  getItem: (key) => {
    return Promise.resolve(Cookies.get(key));
  },
  setItem: (key, value) => {
    Cookies.set(key, value, { expires: 7, secure: true });
    return Promise.resolve();
  },
  removeItem: (key) => {
    Cookies.remove(key);
    return Promise.resolve();
  },
};

export default cookieStorage;
