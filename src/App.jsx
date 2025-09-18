import { Navbar } from "./components/Navbar"
import { Outlet } from "react-router"

import "./App.css"
import { useState, useEffect } from "react"
function App() {

  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('https://fakestoreapi.com/products');
      const items = await response.json();
      
      setProducts(items)
    } 
    fetchItems()
  }, [])

  return (
    <>
      <Navbar />
      <Outlet context={{products, setCart, cart}}/>
    </>
  )
}

export default App
