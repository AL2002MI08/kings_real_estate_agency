import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-qwoff0hkndmodgcr.us.auth0.com"
     clientId="N2ZDUjwWsm4QlO63atGYbRSy88dfI7TC"
     authorizationParams={{
      redirect_uri: "https://kings-real-estate-agency.vercel.app/"
     }}
     audience: "https://kings-real-estate-agency/"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
