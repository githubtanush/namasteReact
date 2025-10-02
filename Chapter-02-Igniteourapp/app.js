// const heading = React.createElement("h1",{id:"heading"},"Hello world from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
 <div id = "parent">
    <div id = "child">
    <h1> I'm h1 tag </h1>
    </div>
</div>
*/
import React from "react";
import ReactDOM from "react-dom/client";

//Browser scripts cannot have imports or exports

//more complex if we do insert one more child
const parent = React.createElement("div",{id:"parent"},[
    React.createElement(
        "div",
        {id : "child"},[
            React.createElement("h1",{},"This is Namaste React🚀"),
            React.createElement("h2",{},"I'm an h2 tag"),
    ]),
    React.createElement(
        "div",
        {id : "child"},[
            React.createElement("h1",{},"I'm an h1 tag"),
            React.createElement("h2",{},"I'm an h2 tag"),
    ]),
]);

//JSX

console.log("parent") // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);