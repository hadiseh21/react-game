import Product from "./Product";
import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../../context/products";
const Products = (props) => {
   const productscontext = useContext(ProductContext);
    return ( <>
      <button className='btn btn-primary' onClick={productscontext.onReset}>Reset</button>
  {productscontext.products.map((p,index) => (
    <Product id = {p.id} key ={index} 
    productName={p.productName} 
    count={p.count} 
    >
        <p>testen</p>
        </Product>
  ))}
    </>);
    
}
 
export default Products;