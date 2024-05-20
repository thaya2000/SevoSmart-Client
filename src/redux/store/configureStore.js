import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import accessoriesReducer from "../reducers/accessoriesReducer";

const accessoriesPersistConfig = {
  key: "accessories",
  storage,
  whitelist: ["accessories", "etag"], // Ensure to persist both accessories and etag
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
        ignoredActions: ["FETCH_ACCESSORIES_FAILURE", "SET_ETAG"],
      },
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
