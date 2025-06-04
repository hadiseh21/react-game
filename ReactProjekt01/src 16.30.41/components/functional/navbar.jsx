import { useContext } from "react";
import {productcontext} from 'react';
const Navbar = (props) => {
    const productscontext = useContext(productcontext);
    return (
        <nav className='navbar navbar-light bg-light'>
            <div className='container-fluid'>
                <a href="#" className="navbar-brand">
                    Navbar {this.calculateSum()}
                </a>
            </div>
        </nav>
    );
    function calculateSum() {
        let sum = 0;
        productscontext.products.forEach(p => {
            sum +=p.count;
        });
        return sum;
    }
}
 
export default Navbar;