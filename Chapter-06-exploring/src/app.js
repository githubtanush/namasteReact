import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/header";
import Body from "./Component/body";
import RestaurantCard from "./Component/Restaurantcard";

//debate in this that if we header.js or header.jsx or header so it by default take js as extension
// so i make it simple i make js file extension and make that 

//some react developers destructing on the fly 
//react is not doing any magic it is all about js 


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);