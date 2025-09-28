import PropTypes from "prop-types"
import "../styles/styles.css";

export function CartRow({item, deleteHandler, increaseHandler, decreaseHandler}) {
    return (
        <div className="cartItem">
            <img src={item.image} alt="image of the specified item" />
            <h4>{item.title}</h4>
            <div className="rightMost">
                <h4>${item.price * item.quantity}</h4>
                <div style={{display: "flex", alignItems: "center", gap: "12px", margin: ".5rem 0"}}>
                    <h4>Quantity: {item.quantity}</h4>
                    <button className="increment" onClick={() => increaseHandler(item.id)}>↑</button>
                    <button className="decrement" onClick={() => decreaseHandler(item.id)}>↓</button>
                </div>
                <button className="removeButton"onClick={() => deleteHandler(item.id)}>Remove Item</button>
            </div>
        </div>
    )
}

CartRow.PropTypes = {
    item: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired
}
