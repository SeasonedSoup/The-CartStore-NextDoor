
export function CartRow({item}) {
    return (
        <div className="cartItem">
            <img src={item.image} alt="image of the specified item" />
            <h4>{item.title}</h4>
            <div className="rightMost">
                <h4>${item.price}</h4>
                <h4>Quantity: {item.quantity}</h4>
                <button>Remove Item</button>
            </div>
        </div>
    )
}
