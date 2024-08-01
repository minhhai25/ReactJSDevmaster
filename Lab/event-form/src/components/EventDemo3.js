import React, { Component } from "react";

export default class EventDemo3 extends Component {
  constructor(props) {
    super(props);
    //khoiwri tạo state
    this.state = {
      name: "minh hải",
      email: "minhai@gmail.com",
    };
  }
  //hàm xử lý sự kiện lấy dữ liệu trong state , chuyển lên component thông qua props
  eventHandlerClick=()=>{
    this.props.onReciver(this.state.name)
  }
  render() {
    let {renderCompany}=this.props;
    return (
      <div className="alert alert-danger">
        <h2> Event : sử dụng dữ liệu state,props</h2>
        <hr />
        <p>Xin chào, {this.state.name}</p>
        <button onClick={this.eventHandlerClick}>
          chuyển dữu liệu name lên app thông qua props
        </button>
        <hr />
        <h3>{this.props.renderCompany}</h3>
        <h3>{renderCompany}</h3>
      </div>
    );
  }
}
