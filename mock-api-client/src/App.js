// import logo from "./logo.svg";
import "./App.css";
import CreatUser from "./components/CreatUser";
import LocalUsers from "./components/LocalUsers";
import MockUser from "./components/MockUser";

function App() {
  return (
    <div className="container my-3 border">
      <h1>call API sử dụng axios</h1>
      <hr />
      <div className="alert alert-danger">
        <h2>call API với server local</h2>
        <LocalUsers />
      </div>
      <div className="alert alert-info">
        <h2>Call API - Mock API</h2>
        <MockUser></MockUser>
      </div>
      <hr/>
      <CreatUser/>
    </div>
  );
}
export default App;
