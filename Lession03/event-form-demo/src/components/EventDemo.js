import React from 'react'

export default function EventDemo() {
    const eventHandlerClick1=()=>{
        alert("eventHandlerClick1-button");
    }
     const eventHandlerClick2 = () => {
       alert("eventHandlerClick1-button");
     };
       const eventHandlerClick3 = (param) => {
         alert("Xin chào " + param);
       };
  return (
    <div className="alert alert-info ">
      <h2>EventDemo</h2>
      {/* hầm được gọi 1 lần duy nhất khi trang được render */}
      <button onClick={eventHandlerClick1()}>button1</button>
      {/* hàm được gọi tới khi ngươi fdunfg click  */}
      <button onClick={eventHandlerClick2}>button2</button>
      {/* gọi hàm->arowfunction */}
      <button onClick={() => eventHandlerClick2()}>button 3</button>
      {/* gọi hmaf có tham số  */}
      <button onClick={() => eventHandlerClick3("devmasterAcademy")}>button 4</button>
    </div>
  );
}
