import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";

import theme from "./theme";

import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
