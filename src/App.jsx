import { Navbar } from "./components/Navbar"
import { Outlet } from "react-router"

import { useState } from "react"
function App() {

  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar cart={cart}/>
      <Outlet />
    </>
  )
}

export default App
