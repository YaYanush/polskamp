import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LanguageProvider } from "./LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter basename="">
          <App />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);
