import React, { useState } from "react";
import "./addproduct.css";
import Modal from "react-modal";
import { addProduct } from "../../../Redux/Actions/actions";
import { connect } from "react-redux";
import DataTables from "./dataTables";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "all 5s",
  },
};

function AddProduct({ addProduct }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    product_name: "",
    description: "",
    price: "",
    quatity: "",
  });
  const { product_name, description, price, quantity } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      addProduct(product_name, description, price, quantity);
    } catch (err) {}
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd a
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <div className="container">
        <h3 className="page-title">Store's Sell</h3>
        <h5 className="page-subtitle">Home - Sell - Add Product</h5>
        <button className="batoon" onClick={openModal}>
          <i className="fa fa-plus"></i> Add Your Product
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <button onClick={closeModal}></button> */}
          <div className="upload-product">
            <form className="row" onSubmit={(e) => onSubmit(e)}>
              <div className="col-6">
                <input
                  type="product_name"
                  name="product_name"
                  onChange={(e) => onChange(e)}
                  className="product-name"
                  id="product-name"
                  placeholder="Product Name"
                />
                <br />
                <input
                  type="description"
                  name="description"
                  onChange={(e) => onChange(e)}
                  className="description"
                  id="description"
                  placeholder="Description"
                />
                <br />
                <input
                  type="price"
                  name="price"
                  onChange={(e) => onChange(e)}
                  className="price"
                  id="price"
                  placeholder="Price"
                />
                <br />
                <input
                  type="quantity"
                  name="quantity"
                  onChange={(e) => onChange(e)}
                  className="quantity"
                  id="quantity"
                  placeholder="Quantity"
                />
                <br />

                <button type="submit" className="upload-btn">
                  Upload
                </button>
              </div>
              <div className="col-6">
                {/* <div className="icon-button"> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="currentColor"
                  class="bi bi-camera"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
                <br />
                {/* </div> */}
                <h7>Product Image</h7>
              </div>
            </form>
          </div>
        </Modal>
        <div className="card"><DataTables /></div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  // isAuthenticated: state.isAuthenticated,
  // error: state.error,
});

export default connect(mapStateToProps, { addProduct })(AddProduct);
