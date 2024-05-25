// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import accessoriesReducer from "../reducers/accessoriesReducer";

// const accessoriesPersistConfig = {
//   key: "accessories",
//   storage,
//   whitelist: ["accessories", "etag"], // Ensure to persist both accessories and etag
// };

// const persistedReducer = persistReducer(
//   accessoriesPersistConfig,
//   accessoriesReducer
// );

// const store = configureStore({
//   reducer: {
//     accessories: persistedReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ["FETCH_ACCESSORIES_FAILURE", "SET_ETAG"],
//       },
//       immutableCheck: false,
//     }),
// });

// const persistor = persistStore(store);

// export { store, persistor };

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import accessoriesReducer from "../reducers/accessoriesReducer";

// Configuration for persisting the accessories reducer
const accessoriesPersistConfig = {
  key: "accessories",
  storage,
  whitelist: ["accessories", "etag"],
};

// Persisted reducer using the configuration
const persistedReducer = persistReducer(
  accessoriesPersistConfig,
  accessoriesReducer
);

// Configure the store
const store = configureStore({
  reducer: {
    accessories: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore specific actions that might contain non-serializable values
        ignoredActions: [
          "persist/PERSIST",
          "FETCH_ACCESSORIES_FAILURE",
          "SET_ETAG",
        ],
        // Ignore specific paths in actions that might contain non-serializable values
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore specific paths in the state that might contain non-serializable values
        ignoredPaths: ["accessories.someNonSerializableValue"],
      },
      immutableCheck: false,
    }),
});

// Create persistor for the store
const persistor = persistStore(store);

export { store, persistor };
