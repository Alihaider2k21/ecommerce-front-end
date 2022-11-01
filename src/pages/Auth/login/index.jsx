// import {Input, Button, Form, Space, Spin} from 'antd'
import "./login.css";
import image from "./image.png";
import React, { useEffect, useState } from "react";
import Signup from "../signup/index.jsx";
import { Link, NavLink, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../../../Redux/Actions/actions";
import { connect } from "react-redux";

const Login = ({ login, state, error }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(login(email, password));
  // }, [dispatch]);
  // const handleLogin = () => {
  //   try {
  //     dispatch(login(email, password));
  //   } catch (er) {
  //     console.log(er);
  //   }
  // };
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
    } catch (er) {}
  };
  // console.log(state);
  if (state.isAuthenticated === true) {
    return <Redirect to="/dashbord"/>
  }
  return (
    <React.Fragment>
      {/* <h2>Weekly Coding Challenge #1: n in/up Form</h2> */}
      <div className="container" id="login-container">
        <div className="wrap-container">
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <img src={image} />
              </div>
            </div>
          </div>
          <div className="login-form-container sign-in-container">
            <form className="login-form" onSubmit={(e) => onSubmit(e)}>
              <input
                type="email"
                onChange={(e) => onChange(e)}
                placeholder="Email"
                id="email"
                name="email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => onChange(e)}
                placeholder="Password"
                id="pass"
                name="password"
              />
              <button id="login-button">Sign In</button>
              <NavLink id="login-button2" className="btn btn-primary" to="/signup">
                Create New Account
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  state: state,
  // error: state.error,
});
export default connect(mapStateToProps, { login })(Login);
