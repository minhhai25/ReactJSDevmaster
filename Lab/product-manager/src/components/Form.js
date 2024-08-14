import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      productId: "",
      productName: "",
      quantity: 0,
      price: 0,
      actionName: "",
    };
  }
  componentWillMount = () => {
    let { renderProduct, renderActionName } = this.props;
    this.setState({
      productId: renderProduct.productId,
      productName: renderProduct.productName,
      quantity: renderProduct.quantity,
      price: renderProduct.price,
      // productName: renderProduct.name,
      actionName: renderActionName,
    });
    // console.log(this.state.productId);
  };

  componentWillReceiveProps = (nextProps) => {
    let { renderProduct, renderActionName } = nextProps;
    this.setState({
      productId: renderProduct.productId,
      productName: renderProduct.productName,
      quantity: renderProduct.quantity,
      price: renderProduct.price,
      actionName: renderActionName,
    });
  };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let product = {
      productId: this.state.productId,
      productName: this.state.productName,
      quantity: this.state.quantity,
      price: this.state.price,
    };
    this.props.onHandleSubmit(false,product,this.state.actionName)
  };
  render() {
    let { renderActionName } = this.props;
    // console.log(renderActionName);
    return (
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Thông tin sản phẩm</h3>
          </div>
          <div className="card-body">
            {/* <h3 className="card-title">Thông tin sản phẩm</h3> */}
            <form className="form-sample">
              <div className="form-group row">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    ID
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product ID"
                    aria-label="ProductID"
                    aria-describedby="basic-addon1"
                    name="productID"
                    value={this.state.productId}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Name
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    aria-label="ProductName"
                    aria-describedby="basic-addon1"
                    name="productName"
                    value={this.state.productName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Quantity
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0"
                    aria-label="Quantity"
                    aria-describedby="basic-addon1"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Price
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0"
                    aria-label="Price"
                    aria-describedby="basic-addon1"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={(event) => this.handleSubmit(event)}
              >
                {renderActionName}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
