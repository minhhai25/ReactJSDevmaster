import React, { Component } from "react";
import CartItem from "./CartItem";
import CartInfo from "./CartInfo";
import Notify from "./Notify";
import { connect } from "react-redux";
import cart from "../reducers/cart";
class Cart extends Component {
  render() {
    let { carts } = this.props;
    let p_cout = carts.length;
    let tongthanhtien = 0;
    for (let i = 0; i < carts.length; i++) {
      tongthanhtien = carts[i].product.price*carts[i].product.quantity;
    }
    let elementCartItem = carts.map((item, index) => {
      return <CartItem key={index} renderCart={item} />;
    });
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">#</th>
                  <th>Pokemon</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="20%">Subtotal</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {/* CART BODY */}
                {elementCartItem}
              </tbody>
              <tfoot id="my-cart-footer">
                {/* CART FOOTER */}

                <CartInfo renderCount={p_cout} renderTotal={tongthanhtien} />
              </tfoot>
            </table>
          </div>
        </div>
        <Notify />
      </div>
    );
  }
}
//mapStateToProps : kết nối dữ liệustate từ store đến component
const mapStateToProps = (state) => {
  return {
    carts: state.cart,
  };
};
export default connect(mapStateToProps, null)(Cart);
