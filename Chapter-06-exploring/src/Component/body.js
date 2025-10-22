import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";


const Body = () => {
    //special state variable of react setvariable
    //why do we even need state variable ? or can we use the local variable instead of this state variable?
    //
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    //Whenever you changing the local variable the whole body component is re - render and refreshed
    //at every word even a single typing of character re - render the react so you how fast react is re-render

    const[filteredRestaurant,setFilteredRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("");

    console.log("component Rendered")

    //State React variable - whenever state variable updates , react re - render or triggers a reconcilation cycle
    // (re - renders the component)

    //react will re - rendering the whole body component again and again but it will only update the input box value 
    //inside the dom
    
    //useEffect will render the component till the body function will render 
    //and as soon as the render cycle is finished it will just quickly call this callback function
    //and then the useEffect call will printed into the console

    //why we study useEffect when the page loads body component is rendered and now we will fetch the data 
    //inside our useEffect 
    useEffect(() => {
        // console.log("useEffect callback function");
        fetchData();
    },[]);

        // console.log("body rendered");
    const fetchData = async () => {
        const data = await fetch(
    "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1"
        );
        const json = await data.json();

        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // if(listOfRestaurants.length === 0) return <h1>Loading....</h1>
    //conditional rendering 
    return (listOfRestaurants.length === 0) ? ( < Shimmer/> )
    :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button 
                    onClick={() => {
                        //Filter the restaurant card and update the UI
                        //searchText 
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>search</button>
                </div>
                <button 
                className="filter-btn" 
                onClick ={() => {
                    // filteredList = resList.filter( 
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setFilteredRestaurant(filteredList);
                    // console.log("button clicked");
                    // console.log(filteredList);
                    }
                }
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* if we have superpowerful react variable called which keeps 
                the sync of ui component and this is called as render
                Whenever a state variable updates react will rerender the component
                basically what it is doing is react in the behind scene is doing 
                when there is anywhere setListOfRestaurants called react will remove it body 
                and update the component very very fast it will very quickly update your ui
                
                So in the end we can say that whenever the state variable updates react will rerender
                it components so this is a superpowerful state variable
                useState gives you powerful state variables
                
                if you have to do with js you have tons of codes react made it supereasy as soon as 
                my react variable update it will re - render the component
                
                React made this dom operations superfast and powerful
                it keeps their data layer with the sync of ui layer
                */}
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                ))
                }
            </div>
        </div>
    );
}

//one way is to export data is using this default export 
//one more way is there which is named export 
//by default export we have export only one time not multiple times
export default Body;