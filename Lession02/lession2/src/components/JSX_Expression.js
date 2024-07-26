import React from "react";

export default function JSX_Expression() {
  //biến
  const name = "Devmaster Academy ";
  const person = {
    name: "Minh Hải",
    age: 22,
  };
  //hàm
  const fnInfo = (user) => {
    return (
      <h3 style={{ color: "blue" }}>
        welcome to ,{user.name}-{user.age}
      </h3>
    );
  };
  //element
  const element = (
    <div className="alert alert-danger">
      <h2>Xin chào:{person.name}</h2>
    </div>
  );
  //if-else
  const sayWelcome = (name) => {
    if (name) {
      return <h2>welcome,to{name}</h2>;
    } else {
      return <h2>welcome!</h2>;
    }
  };
  return (
    <div>
      <b> JSX_Expression</b>
      <h3>welcome to, {name}</h3>
      <br />
      <b>Name: {person.name}</b>
      <b>Age: {person.age}</b>
      {fnInfo(person)}
      {element}
      {sayWelcome(name)}
    </div>
  );
}
