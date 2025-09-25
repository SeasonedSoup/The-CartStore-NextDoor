import { CartRow } from "../components/CartRow";
 import { useOutletContext } from "react-router"
 
 export function CartPage() {

    const {cart, setCart} = useOutletContext();

    function buyEverything() {
        if (cart.length === 0) {
            alert("Your cart is empty!")
            return
        }
        
        alert("Thanks for buying everything!")
        setCart([])
    }
    console.log(cart)
    return (
        <>
            <h1>Cart</h1>
            <div className="items">
                <h1> Item: Quantity Increase and Decrease Quantity Price</h1>
            </div>
            {cart.map(item => (
                <CartRow key={item.id} item={item}></CartRow>
            ))}
            {cart.length === 0 && <h1>Your cart is currently empty!</h1> }
            {cart.length > 0 &&
                <div className="checkout">
                <button onClick={buyEverything}>Check Out!</button>
                </div>
            }
        </>
    )
 }