import cart from "../assets/golf-cart.svg";
import cartStoreImg from "../assets/cartStore.jpg"

export function HomePage() {
    return (
        <>
            <h1>The CartStore-NextDoor <img src={cart} style={{width: "36px"}} alt="cart" /></h1> 
            <h2>Welcome To The Cart Page Next Door!</h2>
            <h3>Where you can buy stuff!</h3>
            <img src={cartStoreImg} alt="View Location Of Our Establishment" />   
        </>
    )
}