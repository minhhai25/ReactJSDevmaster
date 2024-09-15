import React, { useReducer } from "react";

function Reducer() {
    // const [counts,]
  const reducer = (state, action) => {
    switch (action) {
      case "UP_ACTION":
        return state + 1;
      case "DOWN_ACTION":
        return state - 1;

      default:
        return new Error("Invalid action");
    }
  };
  const [count, dispatch] = useReducer(reducer,0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("DOWN_ACTION")}>down</button>
      <button onClick={() => dispatch("UP_ACTION")}>up</button>
    </div>
  );
}

export default Reducer;
