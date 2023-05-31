import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { AuthProvider } from "./Context/Auth-Context";
import { BrowserRouter } from "react-router-dom";
import { LangProvider } from "./Context/Lang-Context";
import { ThemeProvider } from "./Context/Theme-Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LangProvider>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </LangProvider>
  </BrowserRouter>
);
