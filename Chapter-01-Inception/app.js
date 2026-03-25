{   
    /* if there is nested structure then we do like this div under div under div
    <div id="parent">
        we will do nesting like this in div 
        <div id="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
        <div id="child2">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div> 
    React.createElement(object) = HTML(browser understand)
    */
}




const heading = React.createElement(
    "div",
    {id : "parent"},
    [
        React.createElement("div",{id : "child"},[
            React.createElement("h1",{},"I'm on h1 tag"),
            React.createElement("h2",{},"I'm on h2 tag")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"I'm on h1 tag"),
            React.createElement("h2",{},"I'm on h2 tag"),
        ])
    ]
);
console.log(heading); //This heading is just a JavaScript object, not HTML.
//  React will convert it to HTML when rendering.
const root = ReactDOM.createRoot(document.getElementById("root"));// here we are creating a root using ReactDOM.createRoot() method 
// and passing the DOM element with id "root" as an argument.
root.render(heading);//in these render method, we are passing the heading object 
// which is created by React.createElement() method. 
// React will convert this object to HTML and render it on the DOM.