import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PurrfectProvider } from "./PurrfectProvider";
import { themeOptions } from "./Styles/themeOptions";
import { ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={themeOptions}>
    <PurrfectProvider>
      <HashRouter basename="/public/index.html">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HashRouter>
    </PurrfectProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
