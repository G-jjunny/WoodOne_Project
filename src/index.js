import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

Modal.setAppElement("#root");

root.render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);

reportWebVitals();
