// store.js

import { configureStore } from "@reduxjs/toolkit";
import accessoriesReducer from "./reducers/accessoriesReducer";

const rootReducer = {
  accessories: accessoriesReducer, // Make sure the key matches how you use it in useSelector
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;
