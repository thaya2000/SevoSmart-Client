import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "./cookieUtils";
import { refreshAccessToken } from "./authenticationService";
import { logout } from "../redux/slices/authSlice";

let store;

export const injectStore = (_store) => {
  store = _store;
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie("USER_KEY");

    if (
      token &&
      !config.url.includes("/api/v1/auth/authenticate") &&
      !config.url.includes("/api/v1/auth/register") &&
      !config.url.includes("/api/v1/auth/refresh-token")
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response) {
      console.error("Response error status:", error.response.status);
      console.error("Response error data:", error.response.data);

      if (
        (error.response.status === 403 || error.response.status === 401) &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        try {
          const refreshToken = getCookie("REFRESH_KEY");
          console.log("Refresh token:", refreshToken);

          if (!refreshToken) {
            console.error("No refresh token found. Redirecting to login.");
            store.dispatch(logout());
            deleteCookie("USER_KEY");
            deleteCookie("REFRESH_KEY");
            window.location.href = "/login";
            return Promise.reject(error);
          }

          console.log("Attempting to refresh token...");
          const response = await refreshAccessToken(refreshToken);
          console.log("Refresh token response:", response);

          if (response.status === 401) {
            console.error("Refresh token expired. Redirecting to login.");
            store.dispatch(logout());
            deleteCookie("USER_KEY");
            deleteCookie("REFRESH_KEY");
            window.location.href = "/login";
            return Promise.reject(error);
          }

          const { access_token: accessToken, refresh_token: newRefreshToken } =
            response.data;

          setCookie("USER_KEY", accessToken, 7);
          setCookie("REFRESH_KEY", newRefreshToken, 7);

          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("Failed to refresh access token", refreshError);
          store.dispatch(logout());
          deleteCookie("USER_KEY");
          deleteCookie("REFRESH_KEY");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      } else if (
        error.response.status === 403 ||
        error.response.status === 401
      ) {
        console.error(
          `${error.response.status} Unauthorized. Redirecting to login.`
        );
        store.dispatch(logout());
        deleteCookie("USER_KEY");
        deleteCookie("REFRESH_KEY");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
