import React, { Component } from "react";
import Student from "./Student";

export default class Liststudent extends Component {
  constructor(props) {
    super(props);
  }
  //hàm xử lý sự kiệm xem
  handleViewOrEdit = (toggle, student, actionName) => {
    this.props.onHandleViewOrEdit(toggle, student, actionName);
  };
  //xử lý xóa
  handleDelete=(studentId)=>{
    this.props.onHandleDelete(studentId);
  }
  render() {
    let { renderStudents } = this.props;
    console.log(renderStudents);
    let elementStudent = renderStudents.map((student, index) => {
      return (
        <Student
          key={index}
          renderStudent={student}
          stt={index + 1}
          onHandleViewOrEdit={this.handleViewOrEdit}
          onHandleDelete={this.handleDelete}
        />
      );
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{elementStudent}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
