import React from 'react'

export default function EventDemo1() {
    //hàm xử lý sự kiện
    const eventHandleClick1=()=>{
        alert('eventHandleClick- button 1')
    }
    const eventHandleClick2=()=>{
         alert("eventHandleClick2- button 2");
    }
    const eventHandleClick3=(param)=>{
        alert('Xin chào'+param);
    }
  return (
    <div className="alert alert-info ">
      <h1>EventDemo1</h1>
      {/* <button onClick={eventHandleClick1()}>Button01</button> */}
      {/* hàm được gọi khi người dùng click vào button 02 */}
      <button onClick={eventHandleClick2}>Button02</button>
      {/* gọi hàm arrow function  */}
      <button onClick={() => eventHandleClick2()}>Button02</button>
      {/* gọi hàm có tham số  */}
      <button onClick={(eventHandleClick3("devmaster Academy "))}>Button03</button>
      <button onClick={eventHandleClick2}>Button04</button>
    </div>
  );
}
