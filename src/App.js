import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductList from "./components/ProductList";
import Cart from "./components/cart/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from "../src/style.scss";
function App(props) {
 
  return (
      
        <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
             <Route exact path="/" component={ProductList} />
             <Route path="/my-cart" component={Cart} />
          </Switch>
           <Footer />
           </BrowserRouter>
        </div>
     
  );
}
 
export default App;

