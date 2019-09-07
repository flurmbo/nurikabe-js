import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import green from "@material-ui/core/colors/green";
// import yellow from "@material-ui/core/colors/yellow";
import { createMuiTheme } from "@material-ui/core/styles";

import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4d647c',
      main: '#213e5c',
      dark: '#172b40',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
