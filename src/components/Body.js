import restaurants from '../utils/mockData'
import RestaurentCard from './RestaurentCard';
import {useState} from 'react';



const Body=() => {
    const [restaurantslist,setrestaurantslist]=useState(restaurants);
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className="filetr-btn" onClick={()=>{
                   const resturents=restaurantslist.filter(restaurent=>restaurent?.info.avgRating>4);
                  setrestaurantslist(resturents);
                }}>Top Rated Restaurent</button>
            </div>
            <div className="res-container">
                {
                    restaurantslist.map((restaurent)=>(
                        <RestaurentCard key={restaurent?.info?.id} restData={restaurent} />
                    ))
                }
            </div>
        </div>
    )
};

export default Body;