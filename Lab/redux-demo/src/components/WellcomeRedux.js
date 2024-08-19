import React, { Component } from "react";
import { connect } from "react-redux";
//connect dùng để kết nối giữa state trong store với props trong component
class WellcomeRedux extends Component {
 
  render() {
    return (
      <div>
        <h2>
          Xin chào ,
          <span className="btn btn-danger">{this.props.userName}</span>
        </h2>
        <h2>
          Chào mừng đến với khóa học,
          <span className="btn btn-success"> {this.props.courseName}</span> tại
          Devmaster Academy
        </h2>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    userName: state.userName,
    courseName: state.courseName,
  };
};
export default connect(mapStatetoProps, null)(WellcomeRedux);
