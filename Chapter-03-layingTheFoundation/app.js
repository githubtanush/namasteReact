import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",{id:"parent"},[
    React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"Namaste from the React 🚀"),
    React.createElement("h2",{},"Namaste from Tanush")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Hnji ki haal hai!!!"),
        React.createElement("h2",{},"Vadia paaji tusi dso!!!")
    ]),  
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);