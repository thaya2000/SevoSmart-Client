// src/services/accessoryServices.js
import axiosInstance from "./axiosInstance";

const fetchAccessoriesFromApi = (etag) => {
  const headers = etag ? { "If-None-Match": etag } : {};
  return axiosInstance.get("/admin/allProduct", { headers });
};

export { fetchAccessoriesFromApi };
