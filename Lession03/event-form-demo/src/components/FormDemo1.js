import React, { Component } from "react";

export default class FormDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Devmaster",
    };
  }
  handleChange = (event) => {
    //lấy tên điều khiển

    let name = event.target.name;
    //lấy giá trị của ddeieuf khiển
    let value = event.target.value;
    //cập nhật state khi tahy đổi
    this.setState({
      [name]: value,
    });
    // this.setState({
    //     studentName:event.target.name});
  };
  //hàm sử lý khi submit form
  handleSubmit=(event) => {
    event.preventDefault();
    alert(this.state.studentName)
  };
  render() {
    return (
      <div className="alert alert-info ">
        <h1>Form Controller Component</h1>
        <form>
          <div className="form-group">
            <label htmlFor="">Student name:</label>
            <input
              type="text"
              id="studentName"
              className="form-control"
              value={this.state.studentName}
              name="studentName"
              onChange={this.handleChange}
            ></input>
          </div>
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
