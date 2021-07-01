import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Comp/About.jsx";
import Contact from "./Comp/Contact.jsx";
import Error from "./Comp/Error.jsx";
import Home from "./Comp/Home.jsx";
import Menu from "./Comp/Menu.jsx";
import Services from './Comp/Services.jsx';
import Search from './Comp/Search.jsx';

const Router = () => {

  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services/:service/:id" component={Services} />
        <Route exact path="/search" component={Search} />
        <Route component={Error} />
      </Switch>
    </>
  );
};
export default Router;
