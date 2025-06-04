import React, { Component } from 'react';
import Product from './Product';
import ProductContext from '../context/products';

class Products extends Component {
static contextType = ProductContext;

    render() { 
    
        return (<>
         <button className='btn btn-primary' onClick={this.context.onReset}>Reset</button> 
        {this.context.products.map((p,index) => (
           <Product 
           id={p.id}
           key={p.id}
           productName={p.productName}
         >
        <p>test text</p>
            </Product>
        ))} 
    
        </>);
    }
   
}
 
export default Products;