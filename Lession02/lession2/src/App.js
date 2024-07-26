//import logo from './logo.svg';
import './App.css';
import JSX_Expression from '../src/components/JSX_Expression.js';
import FuncComp from './components/FuncComp.js';
import FuncComp1 from './components/FuncComp1.js';
import ClassComp from './components/ClassComp.js';
import ClassCompState from './components/ClassCompState.js';
function App() {
  
  return (
    <div className=" container border my-3">
      <header className="">
        <img src=""></img>
      </header>
      <h2>Biểu thức jsx</h2>
      <JSX_Expression />
      <hr />
      <FuncComp
        renderfullName="Trung trịnh văn"
        renderCompany="Devmaster Academy "
      ></FuncComp>
      <FuncComp1
        renderData="dữ liêu của thuộc tính renderDate"
        renderStudents="Student List"
      ></FuncComp1>
      <ClassComp name="Minhhai website" />
      <ClassCompState></ClassCompState>
    </div>
  );
  
}

export default App;
