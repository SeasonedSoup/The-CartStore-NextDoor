import cart from "../assets/golf-cart.svg";
import cartStoreImg from "../assets/cartStore.jpg"

export function HomePage() {
    return (
        <div className="homePage">
            <h2>Welcome To The Cart Page Next Door!  <img src={cart} style={{width: "36px", display: "inline"}} alt="cart" /></h2>
            <h2>Where you can buy stuff!</h2> 
            <img className="homeImg" src={cartStoreImg} alt="image of our location!" />
        </div>
    )
}