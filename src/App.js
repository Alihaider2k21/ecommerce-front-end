// import { Fragment } from "react";
import "./App.css";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";
// import Dashbord from "./pages/Dashbord/Dashbord";
import { Redirect, Route, Switch } from "react-router-dom";
import privateRoutes from "./privateRoutes";
import React from "react";
import PrivateRoutes from "./privateRoutes";
import dashboardRoutes from "./dashboardRoutes";

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Redirect exact path="/" to="/login" />
      <Route path="/dashbord" component={dashboardRoutes} />
      <PrivateRoutes exact path="/dashboard" component={privateRoutes} />
    </Switch>
  );
}

export default App;
