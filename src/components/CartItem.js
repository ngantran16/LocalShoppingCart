import React, { Component } from 'react';
import './Product.css';
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class CartItem extends Component{

    render(){
        const {onPlusClicked,onMinusClicked,onClick} = this.props;
        return (
            <tr>
                <td>
                    <img 
                    className="Image"
                    src={"img/"+this.props.item.image} 
                    alt=""/>
                </td>
                <td>{ this.props.item.title}</td>
                <td>{ this.props.item.category }</td>
                <td>{ this.props.item.price } VND</td>
                <td>
                    <button className="btn btn-primary" width={50} onClick = {onMinusClicked}>-</button>
                    <input readOnly className="InputNumber" type="text" value ={ this.props.item.quantity }/>
                    <button className="btn btn-primary" width={50} onClick = {onPlusClicked}>+</button>
                </td>
                <td>{ this.props.item.price * this.props.item.quantity } VND</td>
                <td><button className="ButtonDelete" onClick = { onClick }>Delete</button></td>
            </tr>
          
        )
    }  
}
export default CartItem;