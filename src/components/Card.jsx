import { useState } from "react"

//a card for each item in the store skeleton first
export function Card({item , setCart}) {

    const [quantity, setQuantity] = useState(1)

    const addToCart = (item, quantity) => {
        setCart((prev) => {
            // finding an existing item test const addedToCart = prev.find()
            return [...prev, {...item, quantity: quantity}]
        })
        console.log("Successfully Added to Cart!")
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