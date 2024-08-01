import React, { Component } from "react";

export default class FormDemo2 extends Component {
  //bước 2
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      course: "html",
    };
  }
  //bước 3
  handleChange = (event) => {
    //lấy tên điều khiển changeform
    let name = event.target.name;
    //lấy giá trị
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // chuyển lên app 
    this.props.onSubmit(event);
    // alert(this.state.name);
  };
  render() {
    // bước 1
    return (
      <div className="alert alert-danger">
        <h1>Kết hợp nhiều thành phần</h1>
        <form>
          <label htmlFor="">Student name:</label>
          <input
            type="text"
            id="studentName"
            className="form-control"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="">Student Age</label>
          <input
            type="text"
            id="ageStudent"
            className="form-control"
            value={this.state.age}
            name="age"
            onChange={this.handleChange}
          ></input>
          <label htmlFor="">Course</label>
          <select
            id="course"
            className="form-control"
            value={this.state.course}
            name="course"
            onChange={this.handleChange}
          >
            <option value={"html"}>HTML</option>
            <option value={"css3"}>CSS3</option>
            <option value={"js"}>Javascript</option>
          </select>
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
