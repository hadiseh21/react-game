import Products from "../functional/Products";
import { useState } from "react";
import { useContext } from "react";
import ProductContext from '../../context/products'
const Product = ({productName,id}) => {
   const productscontext = useContext(ProductContext)
    return ( 
          <div>
            <span className='m-2 text-info'>{id}</span>
            <span className='m-2 badge bg-primary'>{productName}</span>
    
            <button className='m-2 btn btn-sm btn-success' onClick={handelIncrement}>+</button>
            <button className='m-2 btn btn-sm btn-warning' onClick={handelDecrement}>-</button>
            <button className='m-2 btn btn-sm btn-danger' onClick={onDelete}>Delete</button>
    
            <ul></ul>
            <p></p>
          </div>
        );
        function handelIncrement() {
          productscontext.onIncriment(id);
        }
        function handelDecrement() {
          productscontext.onDecriment(id);
        }
        function onDelete() {
          productscontext.onDelete(id);
        }
    
}
 
export default Product;