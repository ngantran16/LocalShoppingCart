import React, {Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class ProductItem extends Component{
    render(){
        const {onClick} = this.props;
        return(
            <Router>
                <div className="grid-item">
                    <img 
                    src={"img/"+this.props.item.image} 
                        alt=""
                        width={250}
                    />
                    <h1>{ this.props.item.title }</h1>
                    <h1>{ this.props.item.price }</h1> 
                    <button className="btn btn-primary Buy" onClick = { onClick } >Buy</button>
                    <Link className="btn btn-primary" to={"product/" + this.props.item.id}>Detail</Link>
                </div>
            </Router>
        )
    }
}
export default ProductItem;