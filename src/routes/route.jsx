import { createBrowserRouter } from "react-router";
import { About } from "../pages/About";
import Root from "../pages/Root"
// import App from "../App";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Cart } from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";

export const rootRouter =  createBrowserRouter([
    {path: '/', 
    element: <Root/>, 
    children: [
        {path: "/", index:true, element: <Home/>},
        {path: "/about", element: <About/>},
        {path: "/product/:id", element: <ProductDetails/>},
        {path: "/register", element: <Register/>},
        {path: "/cart", element: <Cart/>},

        ]
    },
])