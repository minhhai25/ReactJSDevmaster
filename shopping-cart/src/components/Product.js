import React, { Component } from 'react'
import { connect } from "react-redux";

 export default class Product extends Component {
  render() {
    let {renderProduct} = this.props;
    return (
      <>
        <div className="media product">
          <div className="media-left">
            <a href="#">
              <img
                className="media-object"
                src="images/aplusautomation.jpg"
                alt="charmander"
              />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{renderProduct.ProductName}</h4>
            <p>
              {renderProduct.description}
            </p>
            <input
              name="quantity-product-1"
              type="number"
              defaultValue={1}
              min={1}
            />
            <button data-product={1} className="btn btn-success">
              Mua hàng
            </button>
            <a data-product={1} href="#" className="price">
              {" "}
              {renderProduct.price}{" "}
            </a>
          </div>
        </div>
        {/* PRODUCT : START */}
        <div className="media product">
          <div className="media-left">
            <a href="#">
              <img
                className="media-object"
                src="images/aplus-media.jpg"
                alt="charmander"
              />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">aplus media</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
              asperiores veniam repellat unde debitis quisquam magnam magni ut
              deleniti!
            </p>
            <span className="price"> USD</span>
          </div>
        </div>
        {/* PRODUCT : END */}
      </>
    );
  }
}
// const mapStatetoProps = (state) => {
//   return {
//     productName: state.productName,
//     describe: state.describe,

//     price: state.price,
//     quantity: state.quantity,
//   };
// };
// export default connect(mapStatetoProps,null)(Product);
