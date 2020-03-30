import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import  Navbar from "./component/Navbar";
import Cart from "./component/Cart/Cart";
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Default  from "./component/Default";
import Modal from "./component/Modal";
import Footer from "./component/Footer/Footer";

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />  
          <Route path="/cart" component ={Cart} />
          <Route component={Default} />          
        </Switch>
        <Modal />        
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
 