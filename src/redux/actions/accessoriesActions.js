// src/redux/actions/accessoriesActions.js
import { fetchAccessoriesFromApi } from "../../services/accessoryServices";

export const FETCH_ACCESSORIES_REQUEST = "FETCH_ACCESSORIES_REQUEST";
export const FETCH_ACCESSORIES_SUCCESS = "FETCH_ACCESSORIES_SUCCESS";
export const FETCH_ACCESSORIES_FAILURE = "FETCH_ACCESSORIES_FAILURE";
export const FETCH_ACCESSORIES_NOT_MODIFIED = "FETCH_ACCESSORIES_NOT_MODIFIED";
export const SET_ETAG = "SET_ETAG";

export const fetchAccessoriesRequest = () => ({
  type: FETCH_ACCESSORIES_REQUEST,
});

export const fetchAccessoriesSuccess = (accessories) => ({
  type: FETCH_ACCESSORIES_SUCCESS,
  payload: accessories,
});

export const fetchAccessoriesFailure = (error) => ({
  type: FETCH_ACCESSORIES_FAILURE,
  payload: error,
});

export const fetchAccessoriesNotModified = () => ({
  type: FETCH_ACCESSORIES_NOT_MODIFIED,
});

export const setETag = (etag) => ({
  type: SET_ETAG,
  payload: etag,
});

export const fetchAccessories = (etag) => {
  return (dispatch) => {
    console.log("Fetching accessories...");
    dispatch(fetchAccessoriesRequest());
    fetchAccessoriesFromApi(etag)
      .then(({ status, data, headers }) => {
        const newETag = headers["etag"] || headers["ETag"];
        if (status === 200) {
          dispatch(fetchAccessoriesSuccess(data));
          dispatch(setETag(newETag));
        } else if (status === 304) {
          console.log("Data not modified.");
          dispatch(fetchAccessoriesNotModified());
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 304) {
          console.log("Data not modified.");
          dispatch(fetchAccessoriesNotModified());
        } else {
          const errorMsg = error.response
            ? `${error.response.status} ${error.response.statusText}`
            : "Network error or server is unreachable";
          dispatch(fetchAccessoriesFailure(errorMsg));
          console.log("Error: " + errorMsg);
        }
      });
  };
};

// export const fetchAccessories = (etag) => {
// return async (dispatch) => {
// dispatch(fetchAccessoriesRequest());
// try {
// const headers = etag ? { "If-None-Match": etag } : {};
// const response = await axiosInstance.get("/admin/allProduct", {
// headers,
// });
// const newETag = response.headers["etag"] || response.headers["ETag"];
// if (response.status === 200) {
// dispatch(fetchAccessoriesSuccess(response.data));
// dispatch(setETag(newETag));
// } else if (response.status === 304) {
// dispatch(fetchAccessoriesNotModified());
// }
// } catch (error) {
// const errorMsg = error.response
// ? ${error.response.status} ${error.response.statusText}
// : "Network error or server is unreachable";
// dispatch(fetchAccessoriesFailure(errorMsg));
// }
// };
// };
