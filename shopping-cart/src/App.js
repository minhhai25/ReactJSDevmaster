// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Cart from './components/Cart';
import ListProduct from './components/ListProduct';
import Title from './components/Title';
import cart from './reducers/cart';
function App() {
  return (
    // console.log("Store",cart),
    <div className="container">
      {/* TITLE : START */}
     <Title/>
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
         <ListProduct/>
        </div>
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
       <Cart/>
        {/* CART : END */}
      </div>
    </div>
  );
}

export default App;
