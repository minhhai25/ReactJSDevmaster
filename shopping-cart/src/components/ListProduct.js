import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { LIST_PRODUCT } from "../constants/actionTypes";
class ListProduct extends Component {
  render() {
    // console.log("mockData",this.props.products)
    let { products } = this.props;
    let elementProduct = products.map((item, index) => {
      return <Product key={index} renderProduct={item} />;
    });
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {/* PRODUCT : START */}
          {elementProduct}
          {/* PRODUCT : END */}
        </div>
      </div>
    );
  }
}
//mapStatetoProps: kết nối state trong store của app với props của component
const mapStateToProps = (state) => {
  return {
    products: state.listProduct,
  };
};
export default connect(mapStateToProps, null)(ListProduct);
