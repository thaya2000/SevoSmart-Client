import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  userLogin,
  userRegister,
  getUserInfo,
  refreshAccessToken,
  decodeToken,
} from "../../services/authenticationService";
import { getCookie, setCookie, deleteCookie } from "../../services/cookieUtils";

const initialState = {
  token: getCookie("USER_KEY") || null,
  refreshToken: getCookie("REFRESH_KEY") || null,
  user: null,
  role: null,
  loading: false,
  error: null,
};

// Thunk for user login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const response = await userLogin({ email, password });
      const { access_token: accessToken, refresh_token: refreshToken } =
        response;
      const decodedToken = await decodeToken(accessToken);
      setCookie("USER_KEY", accessToken, 7);
      setCookie("REFRESH_KEY", refreshToken, 7);
      const userInfo = await dispatch(fetchUserData()).unwrap();
      return {
        token: accessToken,
        refreshToken: refreshToken,
        user: userInfo,
        role: decodedToken.payloadObj.role,
      };
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Thunk for user registration
export const register = createAsyncThunk(
  "auth/register",
  async (
    { firstname, lastname, email, role, password },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await userRegister({
        firstname,
        lastname,
        email,
        role,
        password,
      });
      const { access_token: accessToken, refresh_token: refreshToken } =
        response;
      const decodedToken = await decodeToken(accessToken);
      setCookie("USER_KEY", accessToken, 7);
      setCookie("REFRESH_KEY", refreshToken, 7);
      const userInfo = await dispatch(fetchUserData()).unwrap();
      return {
        token: accessToken,
        refreshToken: refreshToken,
        user: userInfo,
        role: decodedToken.payloadObj.role,
      };
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Thunk for refreshing the token
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const { refreshToken } = state.auth;
    try {
      const response = await refreshAccessToken(refreshToken);
      const { access_token: accessToken, refresh_token: newRefreshToken } =
        response.data;
      const decodedToken = await decodeToken(accessToken);
      setCookie("USER_KEY", accessToken, 7);
      setCookie("REFRESH_KEY", newRefreshToken, 7);
      return {
        token: accessToken,
        refreshToken: newRefreshToken,
        user: state.auth.user,
        role: decodedToken.payloadObj.role,
      };
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Thunk for fetching user data
export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { rejectWithValue }) => {
    const token = getCookie("USER_KEY");
    if (!token) {
      return rejectWithValue("No token found");
    }
    try {
      console.log("Fetching user data in authSlice...");
      const response = await getUserInfo();
      console.log("User data response:", response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.refreshToken = null;
      state.user = null;
      state.role = null;
      state.loading = false;
      state.error = null;
      deleteCookie("USER_KEY");
      deleteCookie("REFRESH_KEY");
      // window.location.href = "/login";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(refreshToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.loading = false;
        state.error = null;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
        if (state.error === "No token found") {
          window.location.href = "/login";
        }
      });
  },
});

// Export actions and reducer
export const { logout } = authSlice.actions;
// console.log("Auth slice initialized");
export default authSlice.reducer;
