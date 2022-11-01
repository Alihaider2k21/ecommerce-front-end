import React from "react";

const handleClick = (title) => {
  console.log(`You clicked me! ${title}`);
};

export const columns = [
  {
    name: "Product Name",
    selector: "product_name",
    sortable: true,
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
  },
  {
    name: "Price",
    selector: "price",
    sortable: true,
  },
  {
    name: "Quantity",
    selector: "quantity",
    sortable: true,
  },
  // {
  //   name: "Action",
  //   sortable: false,
  //   selector: "null",
  //   cell: (d) => [
  //     <i
  //       key={d.title}
  //       onClick={handleClick.bind(this, d.title)}
  //       className="first fas fa-pen"
  //     ></i>,
  //     <i
  //       onClick={handleClick.bind(this, d.title)}
  //       className="fas fa-trash-alt"
  //     ></i>,
  //   ],
  // },
];
