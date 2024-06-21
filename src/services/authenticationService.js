import axiosInstance from "./axiosInstance";
import { KJUR } from "jsrsasign";
import axios from "axios";

export const userLogin = async (loginData) => {
  const response = await axiosInstance.post(
    "/api/v1/auth/authenticate",
    loginData
  );
  return response.data;
};

export const userRegister = async (registerData) => {
  const response = await axiosInstance.post(
    "/api/v1/auth/register",
    registerData
  );
  return response.data;
};

export const getUserInfo = async () => {
  const response = await axiosInstance.post("/api/v1/auth/user-info");
  return response;
};

export const refreshAccessToken = async (refreshToken) => {
  const response = await axios.post(
    `${import.meta.env.VITE_APP_API}/api/v1/auth/refresh-token`,
    {},
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );
  return response;
};

export const decodeToken = async (token) => {
  if (typeof token !== "string") {
    throw new Error("Token must be a string");
  }
  return KJUR.jws.JWS.parse(token);
};
