import {
  FETCH_ACCESSORIES_REQUEST,
  FETCH_ACCESSORIES_SUCCESS,
  FETCH_ACCESSORIES_FAILURE,
  FETCH_ACCESSORIES_NOT_MODIFIED,
  SET_ETAG,
} from "../actions/accessoriesActions";

const initialState = {
  loading: false,
  accessories: [],
  error: null,
  etag: null,
};

const accessoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCESSORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_ACCESSORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        accessories: action.payload,
        error: "",
      };
    case FETCH_ACCESSORIES_FAILURE:
      return {
        ...state,
        loading: false,
        accessories: [],
        etag: null,
        error: action.payload,
      };
    case FETCH_ACCESSORIES_NOT_MODIFIED:
      return {
        ...state,
        loading: false,
      };
    case SET_ETAG:
      return {
        ...state,
        etag: action.payload,
      };
    default:
      return state;
  }
};

export default accessoriesReducer;
