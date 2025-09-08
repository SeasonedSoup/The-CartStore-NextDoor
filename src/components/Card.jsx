//a card for each item in the store skeleton first
export function Card() {
    return (
        <div className="card">
            <div className="innerCard">
                <img src="#" alt="CoolStuff" />
                <h3>Product Name</h3>
                <h3>Product Description</h3>
                <div className="price&amount">
                    <h2>Price</h2>
                    <h2>Product Amount</h2>
                    <input className="productAmount" type="number" />
                </div>
                <button className="addToCart">Add To Cart</button>
            </div>
        </div>
    )
}