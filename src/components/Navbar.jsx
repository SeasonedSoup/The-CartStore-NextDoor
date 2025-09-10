import "../styles/styles.css"
import { NavLink } from "react-router-dom";

export function Navbar({}) {
    return (
        <nav>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/shoppage">Shop</NavLink>
            <NavLink to="/cartpage">Cart</NavLink>
        </nav>
    )
}