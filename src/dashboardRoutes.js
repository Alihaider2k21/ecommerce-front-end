import React from "react";
import AddProduct from "./pages/Subpages/AddProduct/AddProduct";
import activeOrder from "./pages/Orders/ActiveOrders/activeOrder";
import histroyOfOrder from "./pages/Orders/HistoryOfOrders/histroyOfOrder";
import LuckyDraw from "./pages/luckydraw/luckydraw";
import DashboardEarnings from "./pages/earnings/dashboardearnings";

import DashboardOrders from "./pages/dashboardorders/dashboardOrders";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashbord from "./pages/Dashbord/Dashbord";

export default function dashboardRoutes() {
  return (
    <Switch>
      <Dashbord>
        <Route path="/dashbord/dashboardorders" component={DashboardOrders} />
        <Route path="/dashbord/dashboardearnings" component={DashboardEarnings} />
        <Route path="/dashbord/addproduct" component={AddProduct} />
        <Route path="/dashbord/activeorder" component={activeOrder} />
        <Route path="/dashbord/historyoforder" component={histroyOfOrder} />
        <Route path="/dashbord/luckydraw" component={LuckyDraw} />
      </Dashbord>
      {/* <Redirect exact path="/dashbord" to="/dashboardorders" /> */}
    </Switch>
  );
}
