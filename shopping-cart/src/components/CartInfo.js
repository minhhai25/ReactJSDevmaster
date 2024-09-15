import React, { Component } from "react";

export default class CartInfo extends Component {
  render() {
    let { renderCount, renderTotal } = this.props;
    let elementInfo = (
      <tr>
        <th colSpan={6}>Empty product in your cart</th>
      </tr>
    );
    if (renderCount > 0) {
      elementInfo = (
        <tr>
          <td colSpan={4}>
            There are <b>{renderCount}</b> items in your shopping cart.
          </td>
          <td colSpan={2} className="total-price text-left">
            {renderTotal} USD
          </td>
        </tr>
      );
    }
    return <> {elementInfo}</>;
  }
}
