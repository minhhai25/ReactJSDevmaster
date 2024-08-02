import React, { Component } from 'react'

export default class UncontrolledCp extends Component {
    constructor(props) {
        super(props);
        this.fileUpload=React.createRef();
    }
    handleSubmit=(event) => {
        alert('Selected file' +this.fileUpload.current.file[0].name);
        event.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload File: <input type="file" ref={this.fileUpload}></input>
          </label>
          <input type="submit" value="Upload"></input>
        </form>
      </div>
    );
  }
}
