import React, { useState, useRef, useMemo } from "react";

function ExUseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef();
  const handleSubmit = () => {
    setProducts(...products, {
      name: name,
      price: +price,
    });
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("tính toán lại");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div>
      <input
        type="text"
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
       
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add</button>
      Total:{total}
      <ul>{products.map((prod,index)=>(
        <li key={index}>{prod.name}-{prod.price}</li>
      ))}</ul>
    </div>
  );
}

export default ExUseMemo;
