import axios from "axios";
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
    const headers = etag ? { "If-None-Match": etag } : {};
    axios
      .get("/admin/allProduct", { headers })
      .then(({ status, data, headers }) => {
        const newETag = headers["etag"] || headers["ETag"];
        if (status === 200) {
          console.log("data : ", data);
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
