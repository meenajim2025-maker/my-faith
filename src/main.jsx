import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CalmPreferencesProvider } from "./context/CalmPreferencesContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalmPreferencesProvider>
      <App />
    </CalmPreferencesProvider>
  </React.StrictMode>,
);
