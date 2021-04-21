import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Home";
import Login from "./Login";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
