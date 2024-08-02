// import logo from './logo.svg';
import './App.css';
import EventDemo1 from './components/EventDemo1';
import EventDemo2 from './components/EventDemo2';
import EventDemo3 from './components/EventDemo3';
import EventDemo4 from './components/EventDemo4';
import FormDemo1 from './components/FormDemo1';
import FormDemo2 from './components/FormDemo2';
import IfiElseCp from './components/IfiElseCp';
import Lisrender from './components/Lisrender';
import UncontrolledCp from './components/UncontrolledCp';

function App() {
  //hàm nhận dữ liệu từ eventdemo3 và xửa lý
   const handleReciver=(param)=>{
    alert('App Xin chào,'+param)
  }
  const handleSubmit = (args,val)=>{
    alert(args+"/n" + val)
  }
  const handleSubmitForm2= (param)=>{
    console.log(param)
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
      <FormDemo1></FormDemo1>
      <FormDemo2 onSubmit={handleSubmitForm2}></FormDemo2>
      <hr/>
      <Lisrender></Lisrender>
      <UncontrolledCp/>
      <IfiElseCp/>
    </div>
  );
}

export default App;
