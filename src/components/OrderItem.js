import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class OrderItem extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm-3">
                    <img 
                        className="Image"
                        src={"img/"+this.props.item.image} 
                        alt=""
                        height={40}
                    />
                </div>
                <br></br>
                <br></br>
                <div className="col-sm-3">
                    {this.props.item.title}
                </div>
                <br></br>
                <div className="col-sm-3">
                    {this.props.item.price} X {this.props.item.quantity}
                </div>
                <div className="col-sm-3">
                    {this.props.item.price*this.props.item.quantity} VND
                </div>
            </div>
        )
    }
}
export default OrderItem;