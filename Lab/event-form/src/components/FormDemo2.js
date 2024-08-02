import React, { Component } from "react";

export default class FormDemo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Minh Hải",
      email: "ntmhai@gmail.com",
      course: "",
    };
  }
  handleChange = (event) => {
    let name = event.target.studentName;
    //let email = event.target.email;
    let value = event.target.value;
    this.setState({
        [name]: value});
  };
  //xử lý khi submit form
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div className="alert alert-danger">
        <h1>Kết hợp nhiều thành phần</h1>
        <form>
          <label> Student Name</label>
          <input
            type="text"
            id="studentName"
            className="form-control"
            value={this.state.studentName}
            name="studentName"
            onChange={this.handleChange}
          ></input>

          <label> Email</label>
          <input
            type="text"
            id="email"
            className="form-control"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          ></input>
          <label>Course</label>
          <select
            id="course"
            className="form-control"
            value={this.state.course}
            onChange={this.handleChange}
          >
            <option value={"html"}>Html</option>
            <option value={"css3"}>Css3</option>
            <option value={"js"}>Javascript</option>
            <option value={"react"}>ReactJs</option>
          </select>
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
