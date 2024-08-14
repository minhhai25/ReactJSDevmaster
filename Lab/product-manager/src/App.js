import React, { Component } from "react";
import ListProduct from "./components/ListProduct";
import Form from "./components/Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [
        {
          productId: "P001",
          productName: "Iphone 11",
          quantity: 15,
          price: 1000,
        },
        {
          productId: "P002",
          productName: "Iphone 12",
          quantity: 25,
          price: 1250,
        },
        {
          productId: "P003",
          productName: "Iphone 13",
          quantity: 10,
          price: 1500,
        },
        {
          productId: "P004",
          productName: "Iphone 14",
          quantity: 15,
          price: 2000,
        },
      ],
      isToggle: false,
      product: "",
      actionName: "",
    };
    // console.log(this.state.product);
  }
  handleViewOrEdit = (toggle, product, actionName) => {
    this.setState({
      isToggle: toggle,
      product: product,
      actionName: actionName,
    });
    // console.log(actionName);
  };
  handleSubmit = (toggle, product, actionName) => {
    console.log("Submit", toggle, product, actionName);
    let lstProduct = this.state.listProduct;
    if (actionName === "Update") {
      for (let i = 0; i < lstProduct.length; i++) {
        if (lstProduct[i].productId === product.productId) {
          lstProduct[i] = product;
          break;
        }
      }
    }
    this.setState({
      listProduct: lstProduct,
      isToggle: toggle,
    });
  };
  handleDelete = (productId) => {
    let { listProduct } = this.state;
    listProduct = listProduct.filter((x) => x.productId !== productId);
    this.setState({ listProduct: listProduct });
  };
  render() {
    let lstProduct = this.state.listProduct;
    let elementForm =
      this.state.isToggle === true ? (
        <Form
          renderProduct={this.state.product}
          renderActionName={this.state.actionName}
          onHandleSubmit={this.handleSubmit}
        />
      ) : (
        ""
      );
    return (
      <div>
        <div className="title">
          <img src="https://devmaster.edu.vn/images/logo.png" />
          <h2>Quản lý sản phẩm </h2>
        </div>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Danh sách sản phẩm</h3>
              </div>
              <ListProduct
                renderProducts={lstProduct}
                onHandleViewOrEdit={this.handleViewOrEdit}
                onHandleDelete={this.handleDelete}
              />
            </div>
          </div>
          {elementForm}
        </div>
      </div>
    );
  }
}
