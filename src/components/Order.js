import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderItem from './OrderItem';
class Order extends Component{
    constructor(){
        super();
        let cart = JSON.parse(localStorage.getItem("cart")); 
        if (!cart){
            cart = [];
        }
        this.state = {
            order: cart
        }
    }
    onSubmitOrder(event) {
        event.preventDefault();
        let fullname = event.target['fullname'].value;
        let phoneNumber = event.target['phoneNumber'].value;
        let email = event.target['email'].value;
        let address = event.target['address'].value;

        let orders = JSON.parse(localStorage.getItem("orders"));
        let cart = JSON.stringify(localStorage.getItem("cart"));
        let id = localStorage.getItem("id_order");
        if (!id){
            id = 0;
        }
        if (!orders) {
            orders = [];
        }
        let order = {
            id: id++,
            fullname: fullname,
            phoneNumber: phoneNumber,
            email: email,
            address: address,
            products: cart
        }
        
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.setItem("id_order",id++);
        localStorage.removeItem("cart");
    }
    render(){
        return (
            <div className="container">
                <h1>Products Order</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <form onSubmit={ this.onSubmitOrder }>
                            <div className="form-group">
                               <input className="form-control" name="fullname" placeholder="Enter your fullname"/> 
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="phoneNumber" placeholder="Enter your phone number"/> 
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="email" placeholder="Enter your email"/> 
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="address" placeholder="Enter your address"/> 
                            </div>
                            <button className="btn btn-warning">Payment</button>
                        </form>
                    </div>
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-3">
                                <h6>Image</h6>
                            </div>
                            <div className="col-sm-3">
                                <h6>Name Product</h6>
                            </div>
                            <div className="col-sm-3">
                                <h6>Unit Price</h6>
                            </div>
                            <div className="col-sm-3">
                                <h6>Total</h6>
                            </div>
                        </div>
                    {
                            this.state.order.map((item, index, ) => 
                            <OrderItem 
                                key={index}
                                item={item}
                            />
                            )}
                    </div>
                </div>
               
            </div>
        )
    }  
}
export default Order;