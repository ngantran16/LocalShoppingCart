import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentItem from './PaymentItem';
class Payment extends Component{
    constructor(){
        super();
        let orders = JSON.parse(localStorage.getItem("orders")); 
        if (!orders){
            orders = [];
        }
        this.state = {
            orders: orders
        }
    }
    render(){
        return (
            <div>
                <h1>Payment information</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Numerical order</th>
                            <th>Customer's name</th>
                            <th>Phone number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Products order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.orders.map((item,index) =>
                                <tr>
                                    <td> {index} </td>
                                    <td> {item.fullname} </td>
                                    <td> {item.phoneNumber} </td>
                                    <td> {item.email} </td>
                                    <td> {item.address} </td>
                                    <td> 
                                        <PaymentItem key={index} item={item.products} />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }  
}
export default Payment;