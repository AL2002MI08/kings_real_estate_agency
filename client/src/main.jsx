import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-omjwupug7w2kbo8z.us.auth0.com"
     clientId=""
     authorizationParams={{
      redirect_uri: ""
     }}
     audience="https://kings_real_estate_agency/"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
