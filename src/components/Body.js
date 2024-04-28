import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    const [filteredRestaurant, setFilteredRestaurant] = useState(resList);

    const [searchText, setSearchText] = useState("");

    return listOfRestaurants.length === 0 ? (<Shimmer /> ) : (
       <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box"
                     value={searchText}
                     onChange={(e)=> {
                        setSearchText(e.target.value);
                     }} 
                    />
                    <button className="search-btn" onClick={
                        () => {
                            //filter the restaurant cart and update thr UI
                            //searchText
                            console.log(searchText);

                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }
                    }>
                        Search
                    </button>
                </div>
            <button className="filter-btn"
            onClick={()=>{
                 const filteredList = resList.filter(
                    (res)=>res.info.avgRatingString>4.3
                );
                setFilteredRestaurant(filteredList);
            }}>
                Top Rated Restaurants
            </button>
            </div>
           <div className="res-container">

           {filteredRestaurant.map((restaurant) => (
                   <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
               ))}
           </div>
       </div>
    )
}
export default Body;