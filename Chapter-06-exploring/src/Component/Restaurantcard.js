//How we import cdn url this is the way to import a named module
import { CDN_URL } from "../../utils/config";
const RestaurantCard = (props) => {
// const RestaurantCard = ({resName, cuisine}) =>{
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        deliveryTime,
        avgRating,
        costForTwo
    } = resData?.data;

    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
        <img 
        className="res-logo" 
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        />
            {/* <h3>{props.resName}</h3> */}
            {/* <h4>{props.cuisine.join(", ")}</h4> */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    );
}

export default RestaurantCard;