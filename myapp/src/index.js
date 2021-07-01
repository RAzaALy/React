import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import App from './App.jsx';
// import Calculator from './calculator/Calculator.jsx';
// import App from './App';
// import Event from './Event.jsx';
// import Forms from './Forms.jsx';
// import BootStrap from './BootStrap.jsx';
// import './index.css';
import './menu.css';
// import Context from './Context.jsx';
// import Effect from './Effect.jsx';
// import Pokemon from './Pokemon.jsx';
import Router from "./Router.jsx";

ReactDOM.render(
  <>
    {/* <App /> 
     <Calculator />
     <Event /> 
     <Forms />
     <BootStrap />  
     <Context />
    <Effect />
    <Pokemon />
      */}
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
