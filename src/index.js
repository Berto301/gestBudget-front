
import React from "react";
import ReactDOM from "react-dom";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "assets/css/app/global.css";
import Route from "./routes"
import { Provider } from "react-redux";
import store from "./store";

window.store = store;
ReactDOM.render(
  <Provider store={store}>
      <Route/>
  </Provider>,
  document.getElementById("root")
);
