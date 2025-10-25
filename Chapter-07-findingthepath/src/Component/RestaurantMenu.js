import { useEffect, useState } from "react";
import { MENU_API_URL } from "../../utils/config";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);
    
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        try{
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        }catch(err){
            console.log("Error fetching menu : ", err);
        }
    };

    if(resInfo === null) return <Shimmer/>

    const { name, cuisines, costForTwoMessage } = 
    resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage} 
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =>( 
                    <li key={item.card.info.id}>
                    {item.card.info.name}- {"Rs."}
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </li>
            ))}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> */}
            </ul>
        </div>
    );
}
export default RestaurantMenu;