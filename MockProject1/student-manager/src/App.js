import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import ListStudent from "./components/ListStudent";
import Control from "./components/Control";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStudent: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          age: 20,
          sex: true,
          birthDate: "2002-04-23",
          birthPlace: "HN",
          address: "25, Vũ Ngọc Phan",
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Văn B",
          age: 21,
          sex: false,
          birthDate: "2001-09-09",
          birthPlace: "ĐN",
          address: "1, Ngô Quyền",
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Văn C",
          age: 19,
          sex: true,
          birthDate: "2003-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
        {
          studentId: "SV004",
          studentName: "Nguyễn Văn D",
          age: 29,
          sex: false,
          birthDate: "2005-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
      ],
      isToggle: false, //ẩn hiện form;false->ẩn form
      student: "", //đối tượng sinh viên trong trường hợp thêm,sửa
      actionName: "", //trạng thái cảu form cho trường hợp thêm sửa xóa:Save:Thêm;Update:Sửa,Close:Xem
      keyword: "", //xử lý tìm kiếm
    };
  }
  //hàm xử lý chức năng ẩn hiện form(thêm,sửa,xem)
  handleAdd = (args, actionName) => {
    this.setState({
      isToggle: args,
      actionName: actionName,
    });
  };
  //Submit form
  handleSubmit = (toggle, student, actionName) => {
    console.log("formSubmit", toggle, student);
    console.log("formSubmit", actionName);
    let lstStudent = this.state.listStudent;
    //sửa
    if (actionName === "Update") {
      for (let i = 0; i < lstStudent.length; i++) {
        if (lstStudent[i].studentId === student.studentId) {
          lstStudent[i] = student;
          break;
        }
      }
      this.setState({ listStudent: lstStudent });
    }
    //thêm
    if (actionName === "Save") {
      lstStudent.push(student);
      this.setState({ listStudent: lstStudent });
    }
    this.setState({
      isToggle: toggle,
    });
  };
  //view
  handleViewOrEdit = (toggle, student, actionName) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
    });
    //cập nhât đối dyuowngj student
    this.setState({
      student: student,
    });
  };
  //xóa
  handleDelete = (studentId) => {
    let { listStudent } = this.state;
    listStudent = listStudent.filter((x) => x.studentId !== studentId);
    this.setState({
      listStudent: listStudent,
    });
  };
  //search
  handleSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };
  render() {
    //lấy dữ liệu từ state
    // let { listStudent } = this.state;
    let lstStudent = this.state.listStudent;
    if (this.state.keyword !== "") {
      lstStudent = lstStudent.filter((x) =>
        x.studentName.includes(this.state.keyword)
      );
    }
    //render form
    let elementForm =
      this.state.isToggle === true ? (
        <Form
          renderActionName={this.state.actionName}
          onHandleSubmit={this.handleSubmit}
          renderStudent={this.state.student}
        />
      ) : (
        ""
      );
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Control
              onHandleAdd={this.handleAdd}
              onHandleSearch={this.handleSearch}
            ></Control>
            <ListStudent
              // renderStudents={this.state.listStudent}
              renderStudents={lstStudent}
              onHandleViewOrEdit={this.handleViewOrEdit}
              onHandleDelete={this.handleDelete}
            />
          </div>
        </div>
        <div className="col-5 grid-margin">{elementForm}</div>
      </div>
    );
  }
}
