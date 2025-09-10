import { Navbar } from "./components/Navbar"
import { Outlet } from "react-router"

import "./App.css"
import { useState, useEffect } from "react"
function App() {

  const [cart, setCart] = useState([])
  
  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('https://fakestoreapi.com/products');
      const items = await response.json();
      
      setCart(items)
    } 
    fetchItems()
  }, [])

  console.log(cart)

  return (
    <>
      <Navbar />
      <Outlet context={[cart, setCart]}/>
    </>
  )
}

export default App
