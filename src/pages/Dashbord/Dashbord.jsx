import "./dashboard.css";
import React from "react";
import SideBar from "../../components/common/sidebar/SideBar";
import PrimaryNavBar from "../../components/common/NavBars/PrimaryNavBar";

export default function Dashbord(props) {
  return (
    <div className="row">
      <div className="col-3 sidenav">
        <SideBar />
      </div>
      <div className="col">
        <PrimaryNavBar />
        {props.children}
      </div>
    </div>
  );
}
