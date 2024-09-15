import { useState, useEffect, useContext, createContext, useCallback } from "react";
import React from "react";
import Effect from "./components/Effect";
import Content from "./components/Content";
import Ref from "./components/Ref";
import Reducer from "./components/Reducer";
import Callback from "./components/Callback";
import ExUseMemo from "./components/ExUseMemo";
export const ThemeContext = createContext();

function App(props) {
  const lists = ["arr1", "arr2"];
  const [count, setCount] = useState(0);
  const [list, setList] = useState(lists);
  function handleList() {
    setList([...list, parseInt(Math.random * 1000)]);
  }
  useEffect(() => {
    console.log("render lại trang");
  });
  //context
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme ( theme === "dark " ? "light" : "dark");
  };
  //callback
  const handleIscrease=useCallback(()=>{
    setCount(prevCount=>prevCount+1);
  })
  return (
    <div>
      <h2>tìm hiểu về state</h2>
      <p>you click {count} time</p>
      <p>List:{list.toString}</p>
      <button onClick={() => setCount(count + 1)}></button>
      <button onClick={handleList}></button>
      {/* <Effect /> */}
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 50 }}>
          <button onClick={toggleTheme}> Toggle Themme</button>
          <Content />
        </div>
      </ThemeContext.Provider>
      <Ref />
      <Reducer />
      <Callback onIncrease={handleIscrease} />
      <ExUseMemo/>
    </div>
  );
}

export default App;
