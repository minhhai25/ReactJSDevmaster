import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleViewOrEdit = (product) => {
    this.props.onHandleViewOrEdit(true,product);
  };

  render() {
    let { renderProduct, stt } = this.props;

    return (
      <tr>
        <td>{stt}</td>
        <td>{renderProduct.productId}</td>
        <td>{renderProduct.productName}</td>
        <td>{renderProduct.quantity}</td>
        <td>{renderProduct.price}</td>
        <td>Nam</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={() => this.handleViewOrEdit(renderProduct, "Close")}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={() => this.handleViewOrEdit(renderProduct, "Update")}
            >
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text">
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
