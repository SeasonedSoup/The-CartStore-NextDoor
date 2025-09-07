import "../styles/styles.css"
import { NavLink } from "react-router";

export function Nav() {
    return (
        <nav>
            <NavLink to="/homepage">Home</NavLink>
            <NavLink to="/shoppage">Shop</NavLink>
            <NavLink to="/cartpage">Cart <span className="cartIndicator">1</span></NavLink>
        </nav>
    )
}