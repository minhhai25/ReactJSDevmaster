// import logo from './logo.svg';
import './App.css';
import Evendemo4 from './components/Evendemo4';
import EventDemo from './components/EventDemo';
import FormDemo1 from './components/FormDemo1';
import FormDemo2 from './components/FormDemo2';
import ListRender from './components/ListRender';

function App() {
  const handleSubmit=(ages,val)=>{
    alert(ages+ "\n"+val)
  }
  const handleSubmitForm2=(param)=>{
    console.log(param)
  }
  return (
    <div className="container border my-3">
      
        <img src="https://devmaster.edu.vn/images/logo.png" className="App-logo" alt="logo" />
       <EventDemo></EventDemo>
       <Evendemo4 onSubmit={handleSubmit}></Evendemo4>
     <FormDemo1></FormDemo1>
     <FormDemo2 onSubmit={handleSubmitForm2}></FormDemo2>
     <ListRender></ListRender>
    </div>
  );
}

export default App;
