import App from "./App";
//This is where routes will be located
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
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
    },
]

export default routes;