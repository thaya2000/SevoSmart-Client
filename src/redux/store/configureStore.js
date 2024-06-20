import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cookieStorage from "../../services/cookieStorage"; // Import the custom cookie storage engine
import authReducer from "../slices/authSlice";
import accessoriesReducer from "../reducers/accessoriesReducer";

// Persist configuration for accessories
const accessoriesPersistConfig = {
  key: "accessories",
  storage: cookieStorage, // Use cookie storage
  whitelist: ["accessories", "etag"],
};

// Persist configuration for auth
const authPersistConfig = {
  key: "auth",
  storage: cookieStorage, // Use cookie storage
  whitelist: ["token", "refreshToken", "user", "role"],
};

// Combine reducers with their respective persist configurations
const rootReducer = combineReducers({
  accessories: persistReducer(accessoriesPersistConfig, accessoriesReducer),
  auth: persistReducer(authPersistConfig, authReducer),
});

// Configure the store with the persisted reducers
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
          "FETCH_ACCESSORIES_FAILURE",
          "SET_ETAG",
        ],
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        ignoredPaths: ["accessories.someNonSerializableValue"],
      },
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
