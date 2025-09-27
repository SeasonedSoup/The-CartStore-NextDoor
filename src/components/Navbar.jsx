import "../styles/styles.css"
import { NavLink } from "react-router-dom";
import {PropTypes} from "prop-types"
export function Navbar({cart}) {

    const cartAmount = cart.length
    
    return (
        <nav>
            <h1 className="logo">The-Cart-Store-NextDoor</h1>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/shoppage">Shop</NavLink>
            <NavLink to="/cartpage">Cart 
                <span className="indicator">{cartAmount}</span>
            </NavLink>
        </nav>
    )
}

Navbar.PropTypes = {
    cart: PropTypes.object.isRequired
}