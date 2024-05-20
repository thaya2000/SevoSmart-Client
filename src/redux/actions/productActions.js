import axios from "axios";

export const FETCH_ACCESSORIES_REQUEST = "FETCH_ACCESSORIES_REQUEST";
export const FETCH_ACCESSORIES_SUCCESS = "FETCH_ACCESSORIES_SUCCESS";
export const FETCH_ACCESSORIES_FAILURE = "FETCH_ACCESSORIES_FAILURE";
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

export const setETag = (etag) => ({
  type: SET_ETAG,
  payload: etag,
});

export const fetchAccessories = (etag) => {
  return (dispatch) => {
    dispatch(fetchAccessoriesRequest());
    const headers = etag ? { "If-None-Match": etag } : {};

    console.log("fetching happing");

    axios
      .get("/admin/allProduct", { headers })
      .then((response) => {
        const newETag = response.headers["etag"] || response.headers["ETag"];
        console.log("ETag from response:", newETag);

        if (response.status === 200) {
          dispatch(fetchAccessoriesSuccess(response.data));
          if (newETag) {
            dispatch(setETag(newETag));
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 304) {
            console.log("Data not modified.");
          } else {
            dispatch(
              fetchAccessoriesFailure(
                "Error: " +
                  error.response.status +
                  " " +
                  error.response.statusText
              )
            );
          }
        } else {
          dispatch(
            fetchAccessoriesFailure("Network error or server is unreachable")
          );
          console.error("Network error or server is unreachable", error);
        }
      });
  };
};
