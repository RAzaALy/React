import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./Store.jsx";
import App from "./App.jsx";
import "./index.css";

Store.subscribe(() => console.log(Store.getState()));
ReactDOM.render(
    <Provider store={Store}>
      <App />
    </Provider>,
  document.getElementById("root")
);
