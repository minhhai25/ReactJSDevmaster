import React, { Component } from "react";

export default class EventDemo2 extends Component {
  // hàm xử lý sự kiện
  eventHandlerClick1 = (param) => {
    alert( param);
  };
  eventHandlerClick2 = () => {
    alert("Devmaster Academy ");
  };
  render() {
    return (
      <div>
        <h2>Event Demo</h2>
        {/* gọi hàm có tham số */}
        <button onClick={() => this.eventHandlerClick1("minh hải")}>
          Button 01
        </button>
        {/* họi không có tham số */}
        <button onClick={() => this.eventHandlerClick2()}>Button 02</button>
        <button onClick={this.eventHandlerClick2}>Button 03</button>
      </div>
    );
  }
}
