import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./components/common/userContext/UserContext";
import setUpAxiosInterceptor from "./api/config/setUpAxiosInterceptor";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
setUpAxiosInterceptor();

reportWebVitals();
