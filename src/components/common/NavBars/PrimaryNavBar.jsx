import "./PrimaryNavbar.css";
import React, { Component } from "react";

export default class PrimaryNavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="left">
            <div id="dash">Dashboard</div>
          </div>
          <div className="right">
            <div className="notification-container">
              <span className="notification">1</span>
              <i className="fa fa-bell"></i>
            </div>
            <div className="avatar">
              <img
                src="https://i.pinimg.com/736x/b5/b7/06/b5b706db1d649ffcb51438b5c93eef11.jpg"
                alt=""
                className="avatar-image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
