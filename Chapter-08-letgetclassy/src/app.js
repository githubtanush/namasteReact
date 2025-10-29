import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header";
import Body from "./Component/body";
import RestaurantCard from "./Component/Restaurantcard";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';
import RestaurantMenu from "./Component/RestaurantMenu";

//debate in this that if we header.js or header.jsx or header so it by default take js as extension
// so i make it simple i make js file extension and make that 

//some react developers destructing on the fly 
//react is not doing any magic it is all about js 


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            {/* if path = / */}
            {/* <Body/> */}
            {/* if path = /about */}
            {/* <About/> */}
            {/* if path = /contact */}
            {/* <Contact/> */}

            <Outlet /> 
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />,
            },
            {
                path : "/contact",
                element : <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element : <RestaurantMenu />,
            }
        ],
        errorElement : <Error />,
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);