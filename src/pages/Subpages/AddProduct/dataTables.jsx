import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
// import SortIcon from "@material-ui/icons/ArrowDownward";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "./data";

import "./style.css";
import { loadProducts } from "../../../Redux/Actions/actions";

export default function DataTables() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  
  let data = useSelector((state) => state.productsList);
  
  const tableData = {
    columns,
    data,
  };

  return (
    <DataTableExtensions {...tableData}>
      <DataTable
        columns={columns}
        data={data}
        noHeader
        defaultSortField="id"
        defaultSortAsc={true}
        pagination
        highlightOnHover
        dense
      />
    </DataTableExtensions>
  );
}
