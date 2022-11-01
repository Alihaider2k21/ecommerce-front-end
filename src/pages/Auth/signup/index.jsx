import image from "./image.png";
import React, { useState } from "react";
import "./signup.css";
import { signup } from "../../../Redux/Actions/actions";
import { connect } from "react-redux";

const Signup = ({ signup }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      signup(username, email, password);
    } catch (er) {}
  };

  return (
    <React.Fragment>
      {/* <h2>Weekly Coding Challenge #1: n in/up Form</h2> */}
      <div className="container" id="signup-container">
        <div className="wrap-container">
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <img src={image} />
              </div>
            </div>
          </div>
          <div className="signup-form-container sign-in-container">
            <form className="signup-form" onSubmit={(e) => onSubmit(e)}>
              <input
                name="username"
                onChange={(e) => onChange(e)}
                value={username}
                type="username"
                placeholder="Username"
                id="user"
              />
              <input
                name="email"
                onChange={(e) => onChange(e)}
                value={email}
                type="email"
                placeholder="Email"
                id="email"
              />
              <input
                name="password"
                onChange={(e) => onChange(e)}
                value={password}
                type="password"
                placeholder="Password"
                id="pass"
              />
              <button id="signup-button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  // isAuthenticated: state.isAuthenticated,
  // error: state.error,
});

export default connect(mapStateToProps, { signup })(Signup);
