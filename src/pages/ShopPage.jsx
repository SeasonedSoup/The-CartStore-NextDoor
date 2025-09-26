import { Card } from "../components/Card"
import { useOutletContext } from "react-router-dom"

export function ShopPage() {
    const {products, setCart} = useOutletContext();
    //Currently unused set cart might need two products which are untouched and cart which is the actual persons stuff that has been added to cart
    function filterProducts(e) {

    }
    return (
        <div className="shopPage">
            <h1>Shop</h1>
            <h2>This is where to browse items and add them to your cart!</h2>
            <label htmlFor="search">Search: </label>
            <input onChange={(e) => filterProducts(e)} type="search" id="search" name="search" />
            <div className="itemGrid">
                {products.map((item) => {
                    return <Card key={item.id} item={item} setCart={setCart}></Card>
                })}
            </div>
        </div>
    )
}