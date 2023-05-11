import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PurrfectProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
