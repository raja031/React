// import restaurants from '../utils/mockData'
import RestaurentCard from './RestaurentCard';
import {useState,useEffect} from 'react';
import Shimmer from './Shimmer';  



const Body=() => {
    const [restaurantslist,setrestaurantslist]=useState([]);
   
    console.log("Render body");

    useEffect(()=>{
    fetchData();
    },[]);

    const fetchData= async ()=>{
             const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        
             const json=await data.json();
             console.log(json);
             console.log(json.data.cards[5]);
            //  console.log("infoooo",json.data.cards[5].card.card.info.name);
            setrestaurantslist(json.data.cards);
        };

    return restaurantslist.length===0?<Shimmer />:(
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className="filetr-btn" onClick={()=>{
                    console.log(restaurantslist);
                  const filteredRestaurants = restaurantslist.filter(
    (restaurent) =>
        restaurent?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant" &&
        restaurent?.card?.card?.info?.avgRating > 4
);
                  setrestaurantslist(filteredRestaurants);
                }}>Top Rated Restaurent</button>
            </div>
            <div className="res-container">
                {restaurantslist
        .filter(
            (restaurant) =>
                restaurant?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        .map((restaurant) => (
            <RestaurentCard
                key={restaurant?.card?.card?.info?.id}
                restData={restaurant}
            />
        ))}
            </div>
        </div>
    )
};

export default Body;