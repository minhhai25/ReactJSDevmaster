import React, { Component } from "react";

export default class Lisrender extends Component {
  render() {
    let array = [1, 2, 3, 4, 5, 6];
    let element = array.map((item,index)=>{
        return <>
        <li>{item}</li>
        </>;
         
      
    })
    return <div>
        <h1>Listrender</h1>
        <ul>{element}</ul>
    </div>;
  }
}
