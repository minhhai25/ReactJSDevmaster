import React, { useState } from "react";

export default function CreatUser() {
  //state
  const [fullName, setFullName] = useState("");
    const [age, setAge] = useState(0);
      const [gender, setGender] = useState(true);
  return (
    <div>
      <form>
        <div>
          FullName:{" "}
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(ev) => setFullName(ev.target.value)}
          ></input>
        </div>
        <div>
          Age:{" "}
          <input
            type="number"
            name="age"
            value={age}
            onChange={(ev) => setFullName(ev.target.value)}
          ></input>
        </div>
        <div>
          Gender:{" "}
          <input
            type=""
            name="gender"
            value={gender}
            onChange={(ev) => setFullName(ev.target.value)}
          ></input>
        </div>
        <input type="submit" value={"Save"}></input>
      </form>
    </div>
  );
}
