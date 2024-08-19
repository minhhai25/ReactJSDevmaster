import React, { Component } from 'react'
import Product from './Product';

export default class ListProduct extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {/* PRODUCT : START */}
          <Product/>
          {/* PRODUCT : END */}
       
        </div>
      </div>
    );
  }
}
