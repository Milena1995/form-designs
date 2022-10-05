import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ResponsiveProvider, ThemeProvider } from "app-studio";
import { theme } from "./style/colorConfig";
// import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/form/id"> */}
    <ResponsiveProvider
      breakpoints={{
        xs: 0,
        sm: 340,
        md: 560,
        lg: 1080,
        xl: 1300,
      }}
      devices={{
        mobile: ["xs", "sm"],
        tablet: ["md", "lg"],
        desktop: ["lg", "xl"],
      }}
    >
      <ThemeProvider {...theme}>
        <App />
      </ThemeProvider>
    </ResponsiveProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
