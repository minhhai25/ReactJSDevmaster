import React from 'react'

export default function FuncComp1(props) {
  const { renderData, renderStudents } = props;
  return (
    <div className="alert alert-danger">
      <p>Danh sách thuộc tính</p>
      <p>Data:{renderData}</p>
      <p>Student:{renderStudents}</p>
    </div>
  );
}
