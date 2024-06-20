//authenticationService.js

import axios from "axios";

const getToken = () => {
  return localStorage.getItem("USER_KEY");
};

export const userLogin = (loginData) => {
  return axios({
    method: "POST",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/api/v1/auth/login`,
    data: loginData,
  });
};
export const createNewAccount = (signupData) => {
  return axios({
    method: "POST",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/api/v1/signup`,
    data: signupData,
  });
};

export const getUserInfo = () => {
  return axios({
    method: "GET",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/api/v1/auth/userinfo`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const addProduct = (newProductData, sellerId) => {
  return axios({
    method: "POST",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/admin/addProduct/${sellerId}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
    data: newProductData,
  });
};
export const getAllProduct = () => {
  return axios({
    method: "GET",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/admin/allProduct`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getAllProductBySeller = (sellerId) => {
  return axios({
    method: "GET",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/admin/getAllProductBySeller/${sellerId}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const getProductById = (productId, sellerId) => {
  return axios({
    method: "GET",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/admin/product/${productId}/${sellerId}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const deleteProductById = (productId, sellerId) => {
  return axios({
    method: "DELETE",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/admin/deleteProduct/${productId}/${sellerId}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};
export const removeProductFromCartById = (productId, buyerId) => {
  return axios({
    method: "DELETE",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/api/v1/user/removeProductFromCartById/${productId}/${buyerId}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const deleteProductFromCartById = (productId, sellerId) => {
  return axios({
    method: "DELETE",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/api/v1/user/deleteProductFromCartById/${productId}/${sellerId}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const addProductToCart = (productId, buyerId) => {
  return axios({
    method: "POST",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/api/v1/user/addProductToCart/${productId}/${buyerId}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};

export const cartItems = (buyerId) => {
  return axios({
    method: "GET",
    url: `${
      process.env.hostUrl || "https://sevosmarttech-efce83f08cbb.herokuapp.com"
    }/api/v1/user/cart_products/${buyerId}`,
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });
};
