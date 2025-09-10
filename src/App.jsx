import { Navbar } from "./components/Navbar"
import { Outlet } from "react-router"

import "./App.css"
import { useState } from "react"
function App() {

  const [cart, setCart] = useState(3)

  return (
    <>
      <Navbar cart={cart}/>
      <Outlet />
    </>
  )
}

export default App
