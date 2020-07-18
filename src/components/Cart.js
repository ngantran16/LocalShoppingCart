import React, { Component } from 'react';
import CartItem from './CartItem';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './Order';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Cart extends Component{
    constructor(){
        super();
        let oldcart = JSON.parse(localStorage.getItem("cart")); 
        if (!oldcart){
            oldcart = [];
        }
        this.state = {
            cart: oldcart,
            orderCheck: "false"
        }
        this.onDeleteCart = this.onDeleteCart.bind(this);
        this.onPlusClicked = this.onPlusClicked.bind(this);
        this.onPaymentClicked = this.onPaymentClicked(this);
    }
    onDeleteCart(item){
        return (event) => {
            let cart = this.state.cart;
            let oldItem = cart.find((element) => element.id === item.id);
            cart.splice(cart.indexOf(oldItem), 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            this.setState({
                cart:cart
            })
        }
    }

    totalPayment(cart){
        let total = 0;
        for (let i=0; i< cart.length; i++){
          total+=cart[i].quantity * cart[i].price;
        }
        return total;
      }
    onPlusClicked(item) {
        return (event) => {
           let cart = this.state.cart;
           item.quantity++;
           this.setState({
               cart:cart
           })
        }
    }
    onMinusClicked(item) {
        return (event) => {
           let cart = this.state.cart;
           if (item.quantity > 1){
            item.quantity--;
           }
           this.setState({
               cart:cart
           })
        }
    }
    onPaymentClicked(){
        return (event) => {
        console.log("hello");
        this.setState({
            orderCheck: "true" 
        })
        }
    }
    render(){
        const { cart } = this.state;
        return (
            <div className="container">
                <h1>Shopping Cart</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                            cart.map((item, index, ) =>
                                <CartItem 
                                    key = {index}
                                    item = {item} 
                                    onClick={this.onDeleteCart(item)}
                                    onPlusClicked = {this.onPlusClicked(item)}
                                    onMinusClicked = {this.onMinusClicked(item)}
                                />)
                            }
                    </tbody>
                </table>
                    <h2>Total payment: {this.totalPayment(cart)} VND </h2>
                    <button onClick={this.onPaymentClicked} className="btn btn-warning Payment" >Payment</button>
                    <br></br>
                    <br></br>
                    {this.state.orderCheck === "true" ? <Order />: null}
            </div>
        )
    }  
}
export default Cart;