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

    function deleteItem(id) {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    console.log(cart)
    return (
        <div className="cartPage">
            <h1>Cart</h1>
            {cart.map(item => (
                <CartRow key={item.id} item={item} deleteHandler={deleteItem}></CartRow>
            ))}
            {cart.length === 0 && <h1>Your cart is currently empty!</h1> }
            {cart.length > 0 &&
                <div className="checkout">
                <button onClick={buyEverything}>Check Out!</button>
                </div>
            }
        </div>
    )
 }