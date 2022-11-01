import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import login from "./pages/Auth/login";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect from="*" to="/login" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});
export default connect(mapStateToProps, {})(PrivateRoute);
