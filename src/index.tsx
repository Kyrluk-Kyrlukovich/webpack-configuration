import {createRoot} from "react-dom/client";
import App from "@/components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LazyAbout} from "@/page/about/About.lazy";
import {LazyShop} from "@/page/shop/Shop.lazy";
import {Suspense} from "react";

const root = document.getElementById('root')

if(!root) {
    throw  new Error('roott not found')
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading...'}><LazyAbout/></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}><LazyShop/></Suspense>
            }
        ]
    }
])

container.render(
    <RouterProvider router={router}/>
);