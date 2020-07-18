import React, { Component } from 'react';
import './Search.css';

class Search extends Component{
    render(){
        return (
        <div>
            <input  
                 type="text" className="Search" placeholder="Search item" 
                 value={this.props.valueSearch}
                 onChange={(event)=>this.props.handleSearch(event.target.value)}
            ></input>
        </div>
        )
    }  
}
export default Search;