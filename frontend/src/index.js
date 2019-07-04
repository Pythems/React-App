import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Get from "./Components/Get";
import Update from "./Components/Update";
import Delete from "./Components/Delete";
import Create from "./Components/Create";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/View" component={Get} />
      <Route exact path="/Delete" component={Delete} />
      <Route exact path="/Create" component={Create} />
      <Route exact path="/Update" component={Update} />
    </Switch>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
