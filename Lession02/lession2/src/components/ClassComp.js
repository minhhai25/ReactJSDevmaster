import React, { Component } from 'react'

export default class ClassComp extends Component {
  render() {
    return (
      <div className='alert alert-info '>
        <h1>Class Component Demo</h1>
        <h2>welcome, to {this.props.name}</h2>
        <p></p>
      </div>
    )
  }
}
