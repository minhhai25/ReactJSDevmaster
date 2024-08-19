import React, { Component } from "react";
import WellcomeRedux from "./components/WellcomeRedux";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="mt5">Welcome ro Redux</h1>
        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3 ">
              <span
                className="input-group-text"
                id="inputGroup-sizing-default "
              >
                Change UserName
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              ></input>
            </div>
            <div className="input-group mb-3 ">
              <span
                className="input-group-text"
                id="inputGroup-sizing-default "
              >
                Change CourseName
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <WellcomeRedux/>
          </div>
        </div>
      </div>
    );
  }
}
