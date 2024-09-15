import React, { Component } from "react";
import { connect } from "react-redux";
import {act_buy_item} from "../actions"
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  //hàm xử lý sự kiện khi mua hàng
  handleBy = (product) => {
    //thực hiện hành động mua hàng -.phát sinh sự kiện action=>chuyển đến reducers và cập nhật state trong store
    this.props.byItem(product, this.state.quantity);
  };
  render() {
    let { renderProduct } = this.props;
    //lấy dữ liệu quantity từ renderProduct => hiển thị nút mua hàng
    let elementBy = <span className="price">{renderProduct.price} USD</span>;
    if (renderProduct.quantity > 0) {
      elementBy = (
        <>
          <input
            name="quantity"
            type="number"
            defaultValue={this.state.quantity}
            min={1}
            onChange={(ev) => {
              this.setState({ quantity: ev.target.value });
            }}
          />
          <button
            data-product={1}
            className="btn btn-success"
            onClick={this.handleBy}
          >
            Mua hàng
          </button>
          <a data-product={1} href="#" className="price">
            {" "}
            {renderProduct.price}{" "}
          </a>
        </>
      );
    }

    return (
      <>
        <div className="media product">
          <div className="media-left">
            <a href="#">
              <img
                className="media-object"
                src={`images/${renderProduct.image}`}
                alt="charmander"
              />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{renderProduct.ProductName}</h4>
            <p>{renderProduct.descriptions}</p>
            {elementBy}
            {/* <input
              name="quantity"
              type="number"
              defaultValue={this.state.quantity}
              min={1}
              onChange={(ev) => {
                this.setState({ quantity: ev.target.value });
              }}
            />
            <button data-product={1} className="btn btn-success">
              Mua hàng
            </button>
            <a data-product={1} href="#" className="price">
              {" "}
              {renderProduct.price}{" "}
            </a> */}
          </div>
        </div>
      </>
    );
  }
}
//thực hiện bắt sự kiến (action=>store
const mapDispatchToProps = (dispatch) => {
  return {
    //bắn action mua hàng vào sotre (đến reducer)
    buyItem: (product, quantity) => {
      dispatch(act_buy_item(product, quantity));
    },
    //
  };
};
export default connect(null, mapDispatchToProps)(Product);
