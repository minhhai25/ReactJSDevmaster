import React, { useState } from 'react'
import { useEffect } from 'react'
export default function Effect(props) {
    const [count,setCount]= useState(this.props.count+1)
    useEffect(() => {
      console.log("render lại trang");

    },[]);
    useEffect(() => {
      console.log("render lại trang dungf count");
    }, [count]);
  return (
    <div>
      
    </div>
  )
}
