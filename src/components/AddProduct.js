import React, { Component } from 'react';
import './AddProduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem from './ProductItem';
class AddProduct extends Component{

    constructor(props){
        super(props);
        this.products = JSON.parse(localStorage.getItem("products")); 
        this.state = {
            products: this.products,
            selectedValue: 'Sun flower',
            status: 'add',
            item: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitAdd = this.onSubmitAdd.bind(this);
        this.onUpdateClicked = this.onUpdateClicked.bind(this);
    }

    onSubmitAdd(event) {
        event.preventDefault();
        let title = event.target['title'].value;
        let price = event.target['price'].value;
        let category = this.state.selectedValue;
        let image = event.target['photo'].files.item(0).name;

        let products = JSON.parse(localStorage.getItem("products"));
        let id = localStorage.getItem("id_product");
        if (!id){
            id = 0;
        }
        if (!products) {
            products = [];
        }
        let product = {
            id: id++,
            title: title,
            image: image,
            price: price,
            category: category
        }
        
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        localStorage.setItem("id_product",id++);
        this.setState({
            products:products
        })
       
        event.target['title'].value = "";
        event.target['price'].value = "";
    }
    handleChange(event) {
        this.setState({selectedValue: event.target.value});
    }
    onUpdateClicked(item,event){
        return (event) => {
            
            this.setState({
                status:'update',
                item: item
            })
        }
        // item.title = event.target['title'].value;
        // item.price = event.target['price'].value;
        // item.category = this.state.selectedValue;
        // item.image = event.target['photo'].files.item(0).name;
    } 
    render(){
        return (
            <div className="container">
                <div className="FormAdd">
                    <h1>Add a new product</h1>
                    <form onSubmit={ this.onSubmitAdd }>
                        Title: <input type="text" name="title" className="Title"
                        value={this.state.item.title} onChange={alert(123)}/>
                        <br></br>
                        Price: <input type="text" name="price" className="Price" 
                        value={this.state.item.price}/>
                        <br></br>
                        Category:  <select defaultValue="Sun flower"  value={this.state.selectedValue} onChange={this.handleChange}  className="Selection">
                                        <option value="Rose">Rose</option>
                                        <option value="Sun flower">Sun flower</option>
                                        <option value="Lotus">Lotus</option>
                                    </select> 
                        <br></br>
                        Image: <input type="file" name="photo" className="ImageFile" placeholder="Choose a image"/>
                        <br></br>
                        {this.state.status === "add"?<button className="ButtonAdd">Add</button>:null}
                        {this.state.status === "update"?<button className="ButtonAdd">Update</button>:null}
                    </form>
                </div>
                <br></br>
                <div className="TableProduct">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.products.map((item, index, ) =>
                               <tr>
                                   <td><img 
                                        src={"img/"+item.image} 
                                            alt=""
                                            width={200}
                                            height={80}
                                    /></td>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td><button className="btn btn-primary" onClick={this.onUpdateClicked(item)}>Update</button></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                               </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }  
}
export default AddProduct;