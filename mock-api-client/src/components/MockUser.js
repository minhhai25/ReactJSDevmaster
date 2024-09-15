import React, { useEffect, useState } from "react";
import axiosMockApi from "../api/mock-api";

export default function MockUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
    // console.log("userlocal", users);
  }, []);
  //hàm call data from api
  const getAllUsers = async () => {
    //gọi api để lấy dữ liệu
    const resp = await axiosMockApi.get("user");
    console.log(resp.data);
    setUsers(resp.data);
  };

  //render data to element
  const elementUsers = users.map((item, index) => {
    return (
      <>
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fullname}</td>
          <td>{item.age}</td>
          <td>{item.gender ? "Nam" : "Nữ"}</td>
          <td>
            <a href="/#" className="btn btn-success mx-1">
              Edit
            </a>
            <a href="/#" className="btn btn-danger mx-1">
              Delete
            </a>
          </td>
        </tr>
      </>
    );
  });
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Id</td>
            <td>FullName</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{elementUsers}</tbody>
      </table>
    </div>
  );
}
