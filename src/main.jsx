import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/authContext.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/redux/store/configureStore";
// import store from "./redux/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
