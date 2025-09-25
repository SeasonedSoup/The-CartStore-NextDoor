
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
                <h1 key={item.id}>{item.title}{item.quantity}</h1>
                <h2 key={item.id}>${item.price}</h2>
                </div>
            ))}
            <div className="checkout">
                <button onClick={buyEverything}>Check Out!</button>
            </div>
        </>
    )
 }