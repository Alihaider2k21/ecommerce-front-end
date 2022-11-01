import "./sidebar.css";
import React from "react";
import { dropActive } from "./drop";
import { NavLink } from "react-router-dom";
import AddProduct from "../../../pages/Subpages/AddProduct/AddProduct";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { getKeyThenIncreaseKey } from "antd/lib/message";

export default function sidebar() {
  // function fun() {

  // }
  // useEffect(() => {
  //   axios.get('/addproduct')
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {console.log(err)})
  // }, [])

  return (
    <div className="asidebar">
      <div className="container">
        <div className="estore">
          <h5>
            ECOMMERCE <br />
            STORE
          </h5>
        </div>
        <div className="dashboard-nav dropdown">
          <h5
            id="dashboard"
            onClick={(e) => dropActive(e.target.id, `${e.target.id}-drop-menu`)}
          >
            Dashboard
          </h5>
          <i className="fa-solid fa-table-cells-large"></i>
          <div className="drop-menu" id="dashboard-drop-menu">
            <ul>
              <li>
                <NavLink id="dashboardorders" to="/dashbord/dashboardorders">Orders</NavLink >
              </li>
              <li>
                <NavLink id="dashboardearnings" to="/dashbord/dashboardearnings">Earnings</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="sell-nav dropdown">
          <h5
            id="sell"
            onClick={(e) => dropActive(e.target.id, `${e.target.id}-drop-menu`)}
          >
            Sell
          </h5>
          <div className="drop-menu" id="sell-drop-menu">
            <ul>
              <li>
                <NavLink id="button" to="/dashbord/addproduct">
                  {" "}
                  Add Products{" "}
                </NavLink>
              </li>
              <li>
                <button
                  id="order"
                  onClick={(e) =>
                    dropActive(e.target.id, `${e.target.id}-drop-menu`)
                  }
                >
                  Orders
                </button>
              </li>
            </ul>
            <div className="drop-menu" id="order-drop-menu">
              <ul>
                <NavLink id="activeorder" to="/dashbord/activeorder">
                  Active Order
                </NavLink>
                <br />
                <NavLink id="historyoforder" to="/dashbord/historyoforder">
                  History of Order
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        <div className="luckydraw">
          <NavLink id="luckydraw" to="/dashbord/luckydraw">Luckydraw</NavLink>
        </div>
      </div>
    </div>
  );
}
