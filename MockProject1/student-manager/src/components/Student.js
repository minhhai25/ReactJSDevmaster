import React, { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // handleEdit=()=>{

  // }
  //cử lý chức năng xem thông tin
  handleViewOrEdit = (student, actionName) => {
    // console.log("Student view click:");
    this.props.onHandleViewOrEdit(true, student, actionName);
  };

  //hàm xử lý sự kiện sửa thông tin
  //hàm xử lý xóa
  handleDelete= (studentId) => {
    if(window.confirm("Are you sure you want to delete")){
      this.props.onHandleDelete(studentId);
    }
  }
  render() {
    let { key, renderStudent, stt } = this.props;
    return (
      <tr>
        <td>{stt}</td>
        <td>{renderStudent.studentId}</td>
        <td>{renderStudent.studentName}</td>
        <td>{renderStudent.age}</td>
        <td>{renderStudent.sex === true ? "Nam" : "Nữ"}</td>
        <td>
          <div className="template-demo">
            <button
              type="button"
              className="btn btn-danger btn-icon-text"
              onClick={() => this.handleViewOrEdit(renderStudent, "Close")}
            >
              Xem
            </button>
            <button
              type="button"
              className="btn btn-warning btn-icon-text"
              onClick={() => this.handleViewOrEdit(renderStudent, "Update")}
            >
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
              onClick={() => this.handleDelete(renderStudent.studentId)}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
