import React, { Component } from 'react'

export default class ListRender extends Component {
  render() {
    let arr=[1,2,3,4,5,6,7];
    let element = arr.map(item,index)=>{
        return(
            <>
            <li>{item}</li>
            </>
        )
    }
    return (
      <div>
        <h1>ListRender</h1>
        <ul>{element}</ul>
      </div>
    )
  }
}
