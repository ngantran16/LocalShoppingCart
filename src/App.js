import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from './components/AddProduct';
import Product from './components/Product';
import Cart from './components/Cart';
import Payment from './components/Payment';
class App extends Component {
  constructor(){
    super();
    this.state = {
      menu: "products",
    }
    this.onProductsClicked = this.onProductsClicked.bind(this);
    this.onAddProductClicked = this.onAddProductClicked.bind(this);
    this.onCartClicked = this.onCartClicked.bind(this);
    this.onPaymentClicked  = this.onPaymentClicked.bind(this);
  }
  onProductsClicked(){
    this.setState({
      menu: "products"
    })
  }
  onAddProductClicked(){
    this.setState({
      menu: "add-product"
    })
  }
  onCartClicked(){
    this.setState({
      menu: "cart"
    })
  }
  onPaymentClicked(){
    this.setState({
      menu: "payment"
    })
  }

  render(){
    return (
      // <div className="App">
      //   <div className="Menu">
      //     <button className = "menu" onClick={this.onProductsClicked}>Products</button>
      //     <button className = "menu" onClick={this.onAddProductClicked}>Add Product</button>
      //     <button className = "menu" onClick={this.onCartClicked}>Cart</button>
      //     <button className = "menu" onClick={this.onPaymentClicked}>Payment</button>
      //   </div>
      
      //   {this.state.menu === "add-product" ?  <AddProduct/>: null}
      //   {this.state.menu === "products" ?  <Product value = "this.state.products" />: null}
      //   {this.state.menu === "cart" ?  <Cart />: null}
      //   {this.state.menu === "payment" ? <Payment />:null}
        
      // </div>
      <Router>
        <div className="Menu">
          <ul>
              <li><Link to="/"><span className = "MenuText">Home</span></Link></li>
              <li><Link to="/addproduct"><span className = "MenuText">Add product</span></Link></li>
              <li><Link to="/cart"><span className = "MenuText">Cart</span></Link></li>
              <li><Link to="/payment"><span className = "MenuText">Payment</span></Link></li>
          </ul>
        </div>
        <switch>
          <Route path="/" exact>
              <Product />
          </Route>
          <Route path="/addproduct">
              <AddProduct/>
          </Route>
          <Route path="/cart">
              <Cart />
          </Route>
          <Route path="/payment" exact>
              <Payment />
          </Route>
        </switch>
      </Router>
    );
  }
  
}

export default App;
