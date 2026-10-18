import {IMG_URL} from '../utils/constant'

const RestaurentCard=(props)=>{

    const {restData}=props;

    const {cloudinaryImageId,name,cuisines,avgRating,sla}=restData?.card?.card?.info;
    return(
        <div className="res-card">
            <img className="res-logo" src={IMG_URL+cloudinaryImageId} alt="logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} star</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}

export default RestaurentCard;