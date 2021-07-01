import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';
import {Provider} from 'react-redux';
import Store from './Store.jsx';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
  <Provider store = {Store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
