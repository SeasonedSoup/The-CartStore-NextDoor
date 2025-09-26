import { Card } from "../components/Card"
import { useOutletContext } from "react-router-dom"
import { useState } from "react";
export function ShopPage() {
    const {products, setCart} = useOutletContext();
    const [search, setSearch] = useState("");

   const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase())
   })
    
    return (
        <div className="shopPage">
            <h1>Shop</h1>
            <h2>This is where to browse items and add them to your cart!</h2>
            <label htmlFor="search">Search: </label>
            <input onChange={(e) => setSearch(e.target.value)} type="search" id="search" name="search" />
            <div className="itemGrid">
                {(search ? filteredProducts : products).map((item) => {
                    return <Card key={item.id} item={item} setCart={setCart}></Card>
                })}
            </div>
        </div>
    )
}