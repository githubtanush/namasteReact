//try to write the filename as same as the component name
//some people write extension file name as jsx and if we use type script we write tsx
//i personally write to use .js extension but if you can use .jsx you can use as this is hardly 
//matter it does not affect anything
import { CDN_URL,LOGO_URL } from "../../utils/config";
import { useState } from "react";
//header component in header.js file
const Header = () => {

    //In this local variable it cannot update the ui It does re render the ui until it prints on console 
    // properly but cannot update it on ui
    // let btnName = "Login";

    //It is a special local variable 
    //Whenever we will do setBtnNameReact whenever will the state variable will change react will re render 
    //the header component react will re - render this component and setBtnName again 
    //because as soon as the the react will press the login button and then react will re - render the header 
    //component and again reconcilation and all things are happening so this is the super powerful of react
    //React is refreshing the whole header component

    //Is react re - render only the login button or react full header component?
    //it will re - render the whole header component
    const [btnNameReact,setBtnNameReact] = useState("Login");

    //What do you mean by rendering a component?
    //Rendering a component it simply means that it will call the header function or call the header 
    //component and it will trigger it once again but this time now it will update with new value in the 
    //btnName
    //but how this const variable updating how can we modify the constant variable ?
    //why is setbtnNameReact and how this is update?
    //whenever you update the value react update the btnNameReact and it is calling the header once again 
    //calling this header is equal to rendering this header once again but this time when u invoke this function
    //this btnName variable is a new variable then u keeping it before 
    //means it will create the new instance 

    //it will find the diff between the older and newer version this is happen in the diff algo 
    //this is what happen in reconcilation

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src= {LOGO_URL}/>
                <h3>FoodieMint</h3>
            </div>
            <div className="nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={() => {
                        btnNameReact === "Login" ?
                        setBtnNameReact("Logout") : 
                        setBtnNameReact("Login");
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>

    );
};
export default Header;