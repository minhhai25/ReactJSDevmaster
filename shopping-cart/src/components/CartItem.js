import React, { Component } from "react";

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  // cập nhậ quantity trong state
  componentWillMount=(props)=>{
this.setState({quantity:props.renderCart.quantity});
  }
componentWillReceiveProps=(nextProps) => {
this.setState({
  quantity: nextProps.renderCart.quantity
})
}
  render() {
    let { renderCart, stt } = this.props;
    return (
      <tr>
        <th scope="row">{stt}</th>
        <td>{renderCart.product.productName}</td>
        <td>{renderCart.product.price} USD</td>
        <td>
          <input
            name="quantity"
            type="number"
            value={this.state.quantity}
            min={1}
          />
        </td>
        <td>
          <strong>{renderCart.product.price * renderCart.quantity} USD</strong>
        </td>
        <td>
          <a
            className="label label-info update-cart-item"
            href="#"
            data-product=""
            onChange={(ev) => {
              this.setState({ quantity: ev.target.value });
            }}
          >
            Update
          </a>
          <a
            className="label label-danger delete-cart-item"
            href="#"
            data-product=""
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
