import React, { Component } from "react";
import Product from "./Product";

export default class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleViewOrEdit=(toggle,product)=>{
    this.props.onHandleViewOrEdit(toggle,product);
  }
  render() {
    let { renderProducts } = this.props;
    let elementProduct = renderProducts.map((product, index) => {
      return (
        <Product
          onHandleViewOrEdit={this.handleViewOrEdit}
          key={index}
          renderProduct={product}
          stt={index + 1}
        />
      );
    });
    return (
      <div>
        <div className="card-body">
          {/* <h3 className="card-title">Danh sách sản phẩm</h3> */}
          <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{elementProduct}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
