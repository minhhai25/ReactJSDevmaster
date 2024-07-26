import React from 'react'

export default function FuncComp(props) {
  return (
    <div className="alert alert-success">
      <h1>Function Component Demo</h1>
      <p>welcome, to {props.renderfullName}</p>
      <h5>company: {props.renderCompany}</h5>
    </div>
  );
}
