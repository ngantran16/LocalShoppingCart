import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './Product.css';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';

class Product extends Component{
    constructor(){
        super();
        this.products = JSON.parse(localStorage.getItem("products")); 
        if (!this.products){
            this.products = [];
        }
        this.state = {
            products: this.products,
            valueSearch: ''
        }
       this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
       this.sortByPriceDes = this.sortByPriceDes.bind(this);
       this.handleSearch = this.handleSearch.bind(this);
    }
    sortByPriceAsc() {
        this.setState((prevState) => ({
          products: this.state.products.sort((a, b) => (a.price - b.price))
      }));
      }
    sortByPriceDes() {
        this.setState((prevState) => ({
            products: this.state.products.sort((a, b) => (b.price - a.price))
        }));
    }

    onItemClicked(item){
        return (event) => {
            let newCart = JSON.parse(localStorage.getItem("cart")); 
            if (!newCart){
                newCart = [];
            } 
            let check = newCart.find((element) => element.id === item.id);
            if (check){
                check.quantity +=1;
            } 
            else 
            {
                item.quantity = 1;
                newCart.push(item);
            }
            localStorage.setItem("cart",JSON.stringify(newCart));
        };
      }

    handleSearch = (search) => {
        // console.log('search = ' + search);
        let oldProducts = this.state.products;
        let newArr = [];
        if (search.length <=0 || search ==='') {
            newArr = oldProducts;
            window.location.reload();
        } else {
           let searchValue = search.toLowerCase();
            for (let item of oldProducts) {
                if (item.title.toLowerCase().indexOf(searchValue) > -1) {
                    newArr.push(item);
                } 
            }
        }
        this.setState({
            products: newArr,
            valueSearch: search
        });
    }
    render(){
        return (
            <div className="container">
                <div className="Search">
                    <Search 
                        valueSearch={this.state.valueSearch}
                        handleSearch={this.handleSearch}
                    />
                </div>
               
                <button className = "SortAsc" onClick={this.sortByPriceAsc}>Ascending</button>
                <button className = "SortDes" onClick={this.sortByPriceDes}>Descending</button>
                <div className="grid-container">
                    {
                        this.state.products.map((item,index) =>
                        <ProductItem 
                            key = {index}
                            item = {item} 
                            onClick={this.onItemClicked(item)}
                        />
                        )
                    }
                </div>
            </div>
        )
    }  
}
export default Product;