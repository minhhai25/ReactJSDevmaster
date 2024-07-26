import React, { Component } from 'react'

export default class ClassCompState extends Component {
    //hàm khoier tạo
    constructor(props) {
        super(props);
        //tạo đối tượng state
        this.state = {
            name: "Minh Hải",
            age:22,
            email:"asdf@gmail.com",
            list:["Toán","Văn","Anh"]
        };
    }
    //Hàm xử lý sự kiện
    ChageName=()=>{
        this.setState({
            name: "chung Trịnh",
            list:["Văn","Sử","Địa"]
        });
    }
  render() {
    return (
      <div className="alert alert-primary">
        <h1>Demo State-hiển thị và thay đổi các thành phần trong state</h1>
        <h3>Name:{this.state.name}</h3>
        <h3>Age:{this.state.age}</h3>
        <h3>Email:{this.state.email}</h3>
        <h3>Danh sách môn học:{this.state.list}</h3>

        <button onClick={this.ChageName}>Change Name</button>
      </div>
    );
  }
}
