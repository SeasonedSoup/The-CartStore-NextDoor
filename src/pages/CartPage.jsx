
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
                <div className="cartItem">
                <img src={item.image} alt="image of the specified item" />
                <h4>{item.title}</h4>
                <h4>Quantity: {item.quantity}</h4>
                <h4>${item.price}</h4>
                </div>
            ))}
            <div className="checkout">
                <button onClick={buyEverything}>Check Out!</button>
            </div>
        </>
    )
 }