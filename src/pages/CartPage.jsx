
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
            <h1>greetings! this is where the items you added to cart will be located although theyre not here yet!(not working)</h1>
            <div className="items">
                <h1> Item: Quantity Increase and Decrease Quantity Price</h1>
            </div>
            {cart.map(item => (
                <h1 key={item.id}>{item.title}{item.quantity}</h1>
            ))}
            <div className="checkout">
                <button onClick={buyEverything}>Check Out!</button>
            </div>
        </>
    )
 }