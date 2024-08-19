import React, { Component } from "react";

export default class WellcomeRedux extends Component {
  render() {
    return (
      <div>
        <h2>
          Xin chào ,<span className="btn btn-danger">{"Redux-Demo"}</span>
        </h2>
        <h2>Chào mừng đến với khóa học,
            <span className="btn btn-success"> { 'Redux-ReactJs'}</span> tại Devmaster Academy
        </h2>
      </div>
    );
  }
}
// export default WellcomeRedux;