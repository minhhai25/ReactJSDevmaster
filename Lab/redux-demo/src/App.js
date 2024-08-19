import React, { Component } from "react";
import WellcomeRedux from "./components/WellcomeRedux";
import { connect } from "react-redux";
import { actChangeCourseName,actChangeUserName } from "./actions";
 class App extends Component {
  handleChangeUserName = (e) => {
    this.props.changeUserName(e.target.value);
  };
  handleChangeCourseName = (e) => {
    this.props.changeCourseName(e.target.value);
  };
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
                onChange={this.handleChangeUserName}
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
                onChange={this.handleChangeCourseName}
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <WellcomeRedux />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
return{
  changeUserName:(value)=>{
    dispatch(actChangeUserName(value));
  },
  changeCourseName:(value)=>{
    dispatch(actChangeCourseName(value))  ;
  }
}
}
export default connect(null,mapDispatchToProps)(App);