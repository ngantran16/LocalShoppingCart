import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class PaymentItem extends Component{
    render(){
        let products = JSON.parse(this.props.item);
        for(let i=0; i<products.length; i++){
            return (
                <p>{products}</p>
                );
        }
    }  
}
export default PaymentItem;