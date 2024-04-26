import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    return listOfRestaurants.length === 0 ? (<Shimmer /> ) : (
       <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
                 const filteredData = resList.filter(
                    (res)=>res.info.avgRatingString>4.3
                );
                setListOfRestaurants(filteredData);
                console.log(resList);
            }}>
                Top Rated Restaurants
            </button>
            </div>
           <div className="res-container">

           {listOfRestaurants.map((restaurant) => (
                   <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
               ))}
           </div>
       </div>
    )
}
export default Body;