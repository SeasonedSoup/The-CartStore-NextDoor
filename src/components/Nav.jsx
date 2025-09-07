import { NavLink } from "react-router";

export function Nav() {
    return (
        <nav>
            <NavLink to="/homepage">Home</NavLink>
            <NavLink to="/shoppage">Shop</NavLink>
            <NavLink to="/cartpage">Cart</NavLink>
        </nav>
    )
}