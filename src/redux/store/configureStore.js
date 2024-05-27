import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import accessoriesReducer from "../reducers/accessoriesReducer";

const accessoriesPersistConfig = {
  key: "accessories",
  storage: sessionStorage,
  whitelist: ["accessories", "etag"],
};

const persistedReducer = persistReducer(
  accessoriesPersistConfig,
  accessoriesReducer
);

const store = configureStore({
  reducer: {
    accessories: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
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
