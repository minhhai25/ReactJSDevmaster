import logo from './logo.svg';
import './App.css';
import EventDemo1 from './components/EventDemo1';
import EventDemo2 from './components/EventDemo2';
import EventDemo3 from './components/EventDemo3';
import EventDemo4 from './components/EventDemo4';

function App() {
  //hàm nhận dữ liệu từ eventdemo3 và xửa lý
   const handleReciver=(param)=>{
    alert('App Xin chào,'+param)
  }
  const handleSubmit = (args,val)=>{
    alert(args+"/n" + val)
  }
  return (
    <div className="container border my-3">
      <header className="">
        <img
          src="https://devmaster.edu.vn/images/logo.png"
          className=""
          alt="logo"
        />
      </header>
      <EventDemo1></EventDemo1>
      <EventDemo2></EventDemo2>
      <EventDemo3
        renderCompany="DevmasterAcademy"
        onReciver={handleReciver}
      ></EventDemo3>
      <EventDemo4 onSubmit={handleSubmit}></EventDemo4>
    </div>
  );
}

export default App;
