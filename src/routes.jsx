import App from "./App";
//This is where routes will be located
import { CartPage } from "./components/CartPage";
import { HomePage } from "./components/HomePage";
import { ShopPage } from "./components/ShopPage";

const routes = [
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "homepage",
        element: <HomePage />
    },
    {
        path: "shoppage",
        element: <ShopPage />
    },
    {
        path: "cartpage",
        element: <CartPage />
    },
]

export default routes;