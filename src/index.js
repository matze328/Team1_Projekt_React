import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./components/common/userContext/UserContext";
import setUpAxiosInterceptor from "./api/config/setUpAxiosInterceptor";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
setUpAxiosInterceptor();

reportWebVitals();
