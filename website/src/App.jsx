import React from "react";
import { Switch, Route ,Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./Menu/Home.jsx";
import Service from "./Menu/Service.jsx";
import About from "./Menu/About.jsx";
import Contact from "./Menu/Contact.jsx";
import Navbar from "./Menu/Navbar.jsx";
import Footer from "./Menu/Footer.jsx";
const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/"/>
      </Switch>
      <Footer />
    </>
  );
};
export default App;
