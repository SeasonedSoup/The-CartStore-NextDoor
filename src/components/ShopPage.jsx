
import { Nav } from "./Nav"
import { Card } from "./Card"
export function ShopPage() {
    return (
        <>
            <Nav />
            <h1>Hello Shop Page is Currently a WORK IN PROGRESS!</h1>
            <h2> This is where to browse items and add them to your cart!</h2>
            <label htmlFor="search">Search: </label>
            <input type="search" id="search" name="search" />
            <Card></Card>
        </>
    )
}