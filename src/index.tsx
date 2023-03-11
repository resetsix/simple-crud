// import './wdyr'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { loadDevTools } from "jira-dev-tool";
import { AuthProviders } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
loadDevTools(() =>
  root.render(
    <React.StrictMode>
      <AuthProviders>
        <App />
      </AuthProviders>
    </React.StrictMode>
  )
);
