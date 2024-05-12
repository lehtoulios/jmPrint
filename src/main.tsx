import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Globals";
import Theme from "./styles/Theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
