import RestaurantCard from "./Restaurantcard";
import resList from "../../utils/mockData";
import { useState } from "react";
//always remind that never ever keep that hard coded data in the component folder


const Body = () => {
    //Normal JS variable is resList variable
    
    //Now we use to make the superpower of react which variable is state variable
    //useState is used for state variables
    
    //Local State variable - superPowerful variable
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    
    //Normal JS variable
    // let listOfRestaurants = [];

// a functional component js is at the end normal js function what is basically react element at the end?
// React is a normal js object at the end similarly what is hook is ? 
// A react hook is just a normal js function in the end which is given to us by react it is a prebuilt
// The only thing is the function come with some superpowers that function has some logic written inside react
// React hooks are normal js utility functions written by some awesome facebook developers
// we can run all the utilities into our code
//Two most important hooks is :- 
// 1.) useState and 2.) useEffect
//write now we are study useState hook 
// useState basically gives you superpowerful react variables

    //   let filteredList = resList;
    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick ={() => {
                    // filteredList = resList.filter( 
                    const filteredList = resList.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                    console.log("button clicked");
                    console.log(filteredList);
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
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
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