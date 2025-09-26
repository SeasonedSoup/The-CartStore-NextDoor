import cart from "../assets/golf-cart.svg";
import cartStoreImg from "../assets/cartStore.jpg"
import { NavLink } from "react-router-dom";

export function HomePage() {
    return (
        <div className="homePage">
            <h1 className="heroText">Welcome To The Cart Page Next Door!<img className="img" src={cart} alt="cart" /></h1>
            <h2>Where you can buy stuff! That just fits yours needs.</h2> 
            <img className="homeImg" src={cartStoreImg} alt="image of our location!" />
            <NavLink className="navButton "to="/shoppage">Shop Now!</NavLink>
        </div>
    )
}