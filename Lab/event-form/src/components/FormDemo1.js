import React, { Component } from "react";

export default class FormDemo1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            studentName:"Minh Hải"
        };
    }
    handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        alert(this.state.studentName);
    };
  render() {
    return (
      <div className="alert alert-info ">
        <h1>Form Controller Component</h1>
        <form>
          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              id="studentName"
              className="form-control"
              name="studentName"
              value={this.state.studentName}
              onChange={this.handleChange}
            ></input>
          </div>
          <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
