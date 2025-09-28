import { CartRow } from "../components/CartRow";
 import { useOutletContext } from "react-router-dom"
 
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

    function increaseItem(id) {
        const newCart = cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item
        );
        setCart(newCart)
    }

    function decreaseItem(id) {
        const newCart = cart.map(item => item.id === id ? {...item, quantity: Math.max(0, item.quantity - 1)} : item)
        setCart(newCart)
    }

    return (
        <div className="cartPage">
            <h1>Cart</h1>
            {cart.map(item => (
                <CartRow key={item.id} item={item} deleteHandler={deleteItem} increaseHandler={increaseItem} decreaseHandler={decreaseItem}></CartRow>
            ))}
            {cart.length === 0 && <h1>Your cart is currently empty!</h1> }
            {cart.length > 0 &&
                <>
                    <h1>Total Price: $ {cart.reduce((acc, cartItem) => { return acc + cartItem.price * cartItem.quantity} ,0 )} </h1>
                    <div className="checkout">
                        <button onClick={buyEverything}>Check Out!</button>
                    </div>
                </>
            }
        </div>
    )
 }