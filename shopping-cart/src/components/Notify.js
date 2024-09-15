import React, { Component } from "react";
// import notify from "../reducers/notify";
import { connect } from "react-redux";
import notify from "../reducers/notify";
 class Notify extends Component {
  render() {
    return (
      <div className="alert alert-success" role="alert" id="notification">
        Updated <b>{notify}</b>
      </div>
    );
  }
}
const mapStateToProps= (state)=>{
  return{
    notify:state.notify
  }
}
export default connect(mapStateToProps,null)(Notify)