import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {injectStore} from "./services/axiosInstance.js"
import { Provider } from "react-redux";
import { AuthProvider } from "./context/authContext.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/redux/store/configureStore";
import RambousLoader from "./routes/RambousLoader.jsx";
injectStore(store);

// console.log("Store and persistor imported");

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthProvider>
    <Provider store={store}>
      <PersistGate loading={<RambousLoader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </AuthProvider>
  // </React.StrictMode>
);
