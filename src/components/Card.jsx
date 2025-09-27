import { useState } from "react"
import { PropTypes } from "prop-types"
//a card for each item in the store skeleton first
export function Card({item , setCart}) {

    const [quantity, setQuantity] = useState(1)
    // sets cart if it finds an item equal to the item map over again where quantity will be 
    const addToCart = (item, quantity) => {
        setCart((prev) => {
            const exists = prev.find(curItem => curItem.id === item.id);

            //if item exists just adds to the quantity of that item removing repeats
            if (exists) {
                return prev.map(curItem => {
                    return curItem.id === item.id ? 
                    {...curItem, quantity: curItem.quantity + quantity} : curItem
                })
            }
            //returns the new item with the quantity added
            return [...prev, {...item, quantity: quantity}]
        })
    }
    return (
        <div className="card">
            <div className="innerCard">
                <img src={item.image} alt="CoolStuff" className="itemImgs" />
                <h3>{item.title}</h3>
                <h3>Product Description</h3>
                <div className="price&amount">
                    <h2>Price ${item.price}</h2>
                    <h2>Product Amount {quantity} </h2>
                    <input value={quantity} className="productAmount" type="number" onChange={(e) => setQuantity(Number(e.target.value))}/>
                </div>
                <button className="addToCart" onClick={() => addToCart(item, quantity)}>Add To Cart</button>
            </div>
        </div>
    )
}

Card.PropTypes = {
    item: PropTypes.object.isRequired,
    setCart: PropTypes.func.isRequired
}