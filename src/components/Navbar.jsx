import "../styles/styles.css"
import { NavLink } from "react-router-dom";

export function Navbar({cart}) {
    return (
        <nav>
            <h1 className="logo">The-Cart-Store-NextDoor</h1>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/shoppage">Shop</NavLink>
            <NavLink to="/cartpage">Cart 
                <span className="indicator">{cart}</span>
            </NavLink>
        </nav>
    )
}