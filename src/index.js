import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import green from "@material-ui/core/colors/green";
// import yellow from "@material-ui/core/colors/yellow";
import { createMuiTheme } from "@material-ui/core/styles";

import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  // palette: {
  //   primary: green,
  //   secondary: yellow
  // }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
