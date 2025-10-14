//try to write the filename as same as the component name
//some people write extension file name as jsx and if we use type script we write tsx
//i personally write to use .js extension but if you can use .jsx you can use as this is hardly 
//matter it does not affect anything
import { LOGO_URL } from "../../utils/config";

//header component in header.js file
const Header = () => {
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
                </ul>
            </div>
        </div>

    );
};
export default Header;