import React, { Fragment } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
