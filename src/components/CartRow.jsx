import PropTypes from "prop-types"

export function CartRow({item, deleteHandler}) {
    return (
        <div className="cartItem">
            <img src={item.image} alt="image of the specified item" />
            <h4>{item.title}</h4>
            <div className="rightMost">
                <h4>${item.price}</h4>
                <h4>Quantity: {item.quantity}</h4>
                <button onClick={() => deleteHandler(item.id)}>Remove Item</button>
            </div>
        </div>
    )
}

CartRow.PropTypes = {
    item: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired
}
