import React from 'react';
import ReactDOM from 'react-dom/client';


/**
 * 
 * App layout
 *    Header
 *    Body 
 *    Footer
 */
const AppLayout=()=>{
    return(
        <div className="app">
            <HeaderComponent />
            <Body/>
        </div>
    )
};

const HeaderComponent=()=>{
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://static.vecteezy.com/system/resources/previews/055/128/169/non_2x/modern-restaurant-logo-design-incorporating-stylish-typography-and-food-themed-graphics-for-business-identity-free-vector.jpg" alt="logo"/>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}

const restaurants= [
									{
										"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										"info": {
											"id": "10070",
											"name": "Bikanervala",
											"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/3975e9eb-ceb0-4d8b-8264-c05810e8386d_10070.jpg",
											"locality": "Hyderguda - Basheerbagh road",
											"areaName": "Basheer Bagh",
											"costForTwo": "₹500 for two",
											"cuisines": [
												"Sweets",
												"North Indian",
												"Chinese",
												"South Indian"
											],
											"avgRating": 4.5,
											"veg": true,
											"parentId": "45936",
											"avgRatingString": "4.5",
											"totalRatingsString": "40K+",
											"sla": {
												"deliveryTime": 38,
												"lastMileTravel": 4,
												"serviceability": "SERVICEABLE",
												"slaString": "35-40 mins",
												"lastMileTravelString": "4.0 km",
												"iconType": "ICON_TYPE_EMPTY"
											},
											"availability": {
												"nextCloseTime": "2026-10-15 23:00:00",
												"opened": true
											},
											"badges": {},
											"isOpen": true,
											"aggregatedDiscountInfoV2": {},
											"type": "F",
											"badgesV2": {
												"entityBadges": {
													"imageBased": {},
													"textBased": {},
													"textExtendedBadges": {}
												}
											},
											"orderabilityCommunication": {
												"title": {},
												"subTitle": {},
												"message": {},
												"customIcon": {},
												"commsStyling": {}
											},
											"differentiatedUi": {
												"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												"differentiatedUiMediaDetails": {
													"mediaType": "ADS_MEDIA_ENUM_IMAGE",
													"lottie": {},
													"video": {}
												}
											},
											"reviewsSummary": {},
											"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											"restaurantOfferPresentationInfo": {},
											"externalRatings": {
												"aggregatedRating": {
													"rating": "--"
												}
											},
											"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
											"priceComparisonComms": {}
										},
										"analytics": {
											"context": "seo-data-18a691b5-952c-47e5-80bf-b4ebf2b1d7fd"
										},
										"cta": {
											"link": "https://www.swiggy.com/city/hyderabad/bikanervala-hyderguda-basheerbagh-road-basheer-bagh-rest10070",
											"text": "RESTAURANT_MENU",
											"type": "WEBLINK"
										},
										"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
									},
									{
										"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										"info": {
											"id": "100942",
											"name": "Lucky Multicuisine Restaurant",
											"cloudinaryImageId": "yeyiqeakfhjj6cmeocsc",
											"locality": "Somajiguda",
											"areaName": "Somajiguda",
											"costForTwo": "₹350 for two",
											"cuisines": [
												"Biryani",
												"Tandoor",
												"South Indian"
											],
											"avgRating": 3.8,
											"parentId": "18963",
											"avgRatingString": "3.8",
											"totalRatingsString": "80K+",
											"sla": {
												"deliveryTime": 51,
												"lastMileTravel": 6.4,
												"serviceability": "SERVICEABLE",
												"slaString": "45-55 mins",
												"lastMileTravelString": "6.4 km",
												"iconType": "ICON_TYPE_EMPTY"
											},
											"availability": {
												"nextCloseTime": "2026-10-16 02:30:00",
												"opened": true
											},
											"badges": {},
											"isOpen": true,
											"aggregatedDiscountInfoV2": {},
											"type": "F",
											"badgesV2": {
												"entityBadges": {
													"imageBased": {},
													"textBased": {},
													"textExtendedBadges": {}
												}
											},
											"orderabilityCommunication": {
												"title": {},
												"subTitle": {},
												"message": {},
												"customIcon": {},
												"commsStyling": {}
											},
											"differentiatedUi": {
												"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												"differentiatedUiMediaDetails": {
													"mediaType": "ADS_MEDIA_ENUM_IMAGE",
													"lottie": {},
													"video": {}
												}
											},
											"reviewsSummary": {},
											"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											"restaurantOfferPresentationInfo": {},
											"externalRatings": {
												"aggregatedRating": {
													"rating": "3.8",
													"ratingCount": "4.8K+"
												},
												"source": "GOOGLE",
												"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
											},
											"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
											"priceComparisonComms": {}
										},
										"analytics": {
											"context": "seo-data-18a691b5-952c-47e5-80bf-b4ebf2b1d7fd"
										},
										"cta": {
											"link": "https://www.swiggy.com/city/hyderabad/lucky-multicuisine-restaurant-somajiguda-rest100942",
											"text": "RESTAURANT_MENU",
											"type": "WEBLINK"
										},
										"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
									},
									{
										"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										"info": {
											"id": "23734",
											"name": "McDonald's",
											"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/e8242dd7-1fc9-4d39-bdc4-44fc72fa7ed8_23734.JPG",
											"locality": "Mehdipatnam",
											"areaName": "Humayun Nagar",
											"costForTwo": "₹400 for two",
											"cuisines": [
												"Burgers",
												"Beverages",
												"Cafe",
												"Desserts"
											],
											"avgRating": 4.2,
											"parentId": "630",
											"avgRatingString": "4.2",
											"totalRatingsString": "54K+",
											"sla": {
												"deliveryTime": 33,
												"lastMileTravel": 3,
												"serviceability": "SERVICEABLE",
												"slaString": "30-35 mins",
												"lastMileTravelString": "3.0 km",
												"iconType": "ICON_TYPE_EMPTY"
											},
											"availability": {
												"nextCloseTime": "2026-10-16 05:45:00",
												"opened": true
											},
											"badges": {
												"imageBadges": [
													{
														"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
														"description": "Top-rated for Burger, based on user votes."
													},
													{
														"imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
														"description": "Top-rated for Corporate, based on user votes."
													}
												]
											},
											"isOpen": true,
											"aggregatedDiscountInfoV2": {},
											"type": "F",
											"badgesV2": {
												"entityBadges": {
													"imageBased": {
														"badgeObject": [
															{
																"attributes": {
																	"description": "Top-rated for Burger, based on user votes.",
																	"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
																	"theme": ""
																}
															},
															{
																"attributes": {
																	"description": "Top-rated for Corporate, based on user votes.",
																	"imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
																	"theme": ""
																}
															}
														]
													},
													"textBased": {},
													"textExtendedBadges": {}
												}
											},
											"orderabilityCommunication": {
												"title": {},
												"subTitle": {},
												"message": {},
												"customIcon": {},
												"commsStyling": {}
											},
											"differentiatedUi": {
												"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												"differentiatedUiMediaDetails": {
													"mediaType": "ADS_MEDIA_ENUM_IMAGE",
													"lottie": {},
													"video": {}
												}
											},
											"reviewsSummary": {},
											"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											"restaurantOfferPresentationInfo": {},
											"externalRatings": {
												"aggregatedRating": {
													"rating": "--"
												}
											},
											"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
											"priceComparisonComms": {}
										},
										"analytics": {
											"context": "seo-data-18a691b5-952c-47e5-80bf-b4ebf2b1d7fd"
										},
										"cta": {
											"link": "https://www.swiggy.com/city/hyderabad/mcdonalds-mehdipatnam-humayun-nagar-rest23734",
											"text": "RESTAURANT_MENU",
											"type": "WEBLINK"
										},
										"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
									},
									{
										"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										"info": {
											"id": "185544",
											"name": "NIC Ice Creams",
											"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/16/1194e34e-f36f-43b7-829e-0588f1d879b1_185544.JPG",
											"locality": "Khairatabad",
											"areaName": "Banjara Hills",
											"costForTwo": "₹120 for two",
											"cuisines": [
												"Desserts",
												"Ice Cream"
											],
											"avgRating": 4.6,
											"veg": true,
											"parentId": "6249",
											"avgRatingString": "4.6",
											"totalRatingsString": "7.7K+",
											"sla": {
												"deliveryTime": 37,
												"lastMileTravel": 5,
												"serviceability": "SERVICEABLE",
												"slaString": "30-35 mins",
												"lastMileTravelString": "5.0 km",
												"iconType": "ICON_TYPE_EMPTY"
											},
											"availability": {
												"nextCloseTime": "2026-10-16 00:00:00",
												"opened": true
											},
											"badges": {},
											"isOpen": true,
											"aggregatedDiscountInfoV2": {},
											"type": "F",
											"badgesV2": {
												"entityBadges": {
													"imageBased": {},
													"textBased": {},
													"textExtendedBadges": {}
												}
											},
											"orderabilityCommunication": {
												"title": {},
												"subTitle": {},
												"message": {},
												"customIcon": {},
												"commsStyling": {}
											},
											"differentiatedUi": {
												"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												"differentiatedUiMediaDetails": {
													"mediaType": "ADS_MEDIA_ENUM_IMAGE",
													"lottie": {},
													"video": {}
												}
											},
											"reviewsSummary": {},
											"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											"restaurantOfferPresentationInfo": {},
											"externalRatings": {
												"aggregatedRating": {
													"rating": "--"
												}
											},
											"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
											"priceComparisonComms": {}
										},
										"analytics": {
											"context": "seo-data-18a691b5-952c-47e5-80bf-b4ebf2b1d7fd"
										},
										"cta": {
											"link": "https://www.swiggy.com/city/hyderabad/nic-ice-creams-khairatabad-banjara-hills-rest185544",
											"text": "RESTAURANT_MENU",
											"type": "WEBLINK"
										},
										"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
									},
									{
										"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										"info": {
											"id": "1310370",
											"name": "Jalapenos Mexican Kitchen",
											"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/6/9ce1556e-872d-43f0-a710-1687aa147c0b_1310370 (1).jpg",
											"locality": "Banjara Hills",
											"areaName": "Banjara Hills",
											"costForTwo": "₹400 for two",
											"cuisines": [
												"Italian-American"
											],
											"avgRating": 4.3,
											"parentId": "666289",
											"avgRatingString": "4.3",
											"totalRatingsString": "236",
											"sla": {
												"deliveryTime": 50,
												"lastMileTravel": 6.1,
												"serviceability": "SERVICEABLE",
												"slaString": "45-55 mins",
												"lastMileTravelString": "6.1 km",
												"iconType": "ICON_TYPE_EMPTY"
											},
											"availability": {
												"nextCloseTime": "2026-10-15 23:00:00",
												"opened": true
											},
											"badges": {},
											"isOpen": true,
											"aggregatedDiscountInfoV2": {},
											"type": "F",
											"badgesV2": {
												"entityBadges": {
													"imageBased": {},
													"textBased": {},
													"textExtendedBadges": {}
												}
											},
											"orderabilityCommunication": {
												"title": {},
												"subTitle": {},
												"message": {},
												"customIcon": {},
												"commsStyling": {}
											},
											"differentiatedUi": {
												"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												"differentiatedUiMediaDetails": {
													"mediaType": "ADS_MEDIA_ENUM_IMAGE",
													"lottie": {},
													"video": {}
												}
											},
											"reviewsSummary": {},
											"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											"restaurantOfferPresentationInfo": {},
											"externalRatings": {
												"aggregatedRating": {
													"rating": "--"
												}
											},
											"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
											"priceComparisonComms": {}
										},
										"analytics": {
											"context": "seo-data-18a691b5-952c-47e5-80bf-b4ebf2b1d7fd"
										},
										"cta": {
											"link": "https://www.swiggy.com/city/hyderabad/jalapenos-mexican-kitchen-banjara-hills-rest1310370",
											"text": "RESTAURANT_MENU",
											"type": "WEBLINK"
										},
										"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
									},
									{
										"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										"info": {
											"id": "5862",
											"name": "Megha City",
											"cloudinaryImageId": "mbneffq2lc2nneo9pu0s",
											"locality": "Basheerbagh",
											"areaName": "Basheerbagh",
											"costForTwo": "₹500 for two",
											"cuisines": [
												"South Indian",
												"Biryani",
												"Chinese",
												"Seafood",
												"Beverages"
											],
											"avgRating": 4.5,
											"parentId": "488865",
											"avgRatingString": "4.5",
											"totalRatingsString": "69K+",
											"sla": {
												"deliveryTime": 39,
												"lastMileTravel": 3.9,
												"serviceability": "SERVICEABLE",
												"slaString": "35-45 mins",
												"lastMileTravelString": "3.9 km",
												"iconType": "ICON_TYPE_EMPTY"
											},
											"availability": {
												"nextCloseTime": "2026-10-15 23:45:00",
												"opened": true
											},
											"badges": {},
											"isOpen": true,
											"aggregatedDiscountInfoV2": {},
											"type": "F",
											"badgesV2": {
												"entityBadges": {
													"imageBased": {},
													"textBased": {},
													"textExtendedBadges": {}
												}
											},
											"orderabilityCommunication": {
												"title": {},
												"subTitle": {},
												"message": {},
												"customIcon": {},
												"commsStyling": {}
											},
											"differentiatedUi": {
												"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												"differentiatedUiMediaDetails": {
													"mediaType": "ADS_MEDIA_ENUM_IMAGE",
													"lottie": {},
													"video": {}
												}
											},
											"reviewsSummary": {},
											"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											"restaurantOfferPresentationInfo": {},
											"externalRatings": {
												"aggregatedRating": {
													"rating": "4.3",
													"ratingCount": "6.8K+"
												},
												"source": "GOOGLE",
												"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
											},
											"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
											"priceComparisonComms": {}
										},
										"analytics": {
											"context": "seo-data-18a691b5-952c-47e5-80bf-b4ebf2b1d7fd"
										},
										"cta": {
											"link": "https://www.swiggy.com/city/hyderabad/megha-city-basheerbagh-rest5862",
											"text": "RESTAURANT_MENU",
											"type": "WEBLINK"
										},
										"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
									},
									{
										"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										"info": {
											"id": "1218089",
											"name": "Venkateshwara Fast Food Pure Veg",
											"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/26/a4088436-cc84-4e5f-b042-421066c039f7_1218089.jpg",
											"locality": "Himayath Nagar",
											"areaName": "Himayath Nagar",
											"costForTwo": "₹300 for two",
											"cuisines": [
												"Chinese",
												"South Indian",
												"Indian",
												"Fast Food"
											],
											"avgRating": 3.9,
											"veg": true,
											"parentId": "695703",
											"avgRatingString": "3.9",
											"totalRatingsString": "207",
											"sla": {
												"deliveryTime": 38,
												"lastMileTravel": 4.9,
												"serviceability": "SERVICEABLE",
												"slaString": "35-45 mins",
												"lastMileTravelString": "4.9 km",
												"iconType": "ICON_TYPE_EMPTY"
											},
											"availability": {
												"nextCloseTime": "2026-10-15 23:00:00",
												"opened": true
											},
											"badges": {},
											"isOpen": true,
											"aggregatedDiscountInfoV2": {},
											"type": "F",
											"badgesV2": {
												"entityBadges": {
													"imageBased": {},
													"textBased": {},
													"textExtendedBadges": {}
												}
											},
											"orderabilityCommunication": {
												"title": {},
												"subTitle": {},
												"message": {},
												"customIcon": {},
												"commsStyling": {}
											},
											"differentiatedUi": {
												"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												"differentiatedUiMediaDetails": {
													"mediaType": "ADS_MEDIA_ENUM_IMAGE",
													"lottie": {},
													"video": {}
												}
											},
											"reviewsSummary": {},
											"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											"restaurantOfferPresentationInfo": {},
											"externalRatings": {
												"aggregatedRating": {
													"rating": "--"
												}
											},
											"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
											"priceComparisonComms": {}
										},
										"analytics": {
											"context": "seo-data-18a691b5-952c-47e5-80bf-b4ebf2b1d7fd"
										},
										"cta": {
											"link": "https://www.swiggy.com/city/hyderabad/venkateshwara-fast-food-pure-veg-himayath-nagar-rest1218089",
											"text": "RESTAURANT_MENU",
											"type": "WEBLINK"
										},
										"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
									},
									{
										"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
										"info": {
											"id": "743166",
											"name": "Al Taza",
											"cloudinaryImageId": "b9896358058a0b743f4983ad2c045ace",
											"locality": "Mehdipatnam",
											"areaName": "Mehdipatnam",
											"costForTwo": "₹399 for two",
											"cuisines": [
												"Arabian",
												"Juices",
												"Beverages"
											],
											"avgRating": 4.3,
											"parentId": "405299",
											"avgRatingString": "4.3",
											"totalRatingsString": "974",
											"sla": {
												"deliveryTime": 30,
												"lastMileTravel": 2.6,
												"serviceability": "SERVICEABLE",
												"slaString": "25-30 mins",
												"lastMileTravelString": "2.6 km",
												"iconType": "ICON_TYPE_EMPTY"
											},
											"availability": {
												"nextCloseTime": "2026-10-16 04:00:00",
												"opened": true
											},
											"badges": {},
											"isOpen": true,
											"aggregatedDiscountInfoV2": {},
											"type": "F",
											"badgesV2": {
												"entityBadges": {
													"imageBased": {},
													"textBased": {},
													"textExtendedBadges": {}
												}
											},
											"orderabilityCommunication": {
												"title": {},
												"subTitle": {},
												"message": {},
												"customIcon": {},
												"commsStyling": {}
											},
											"differentiatedUi": {
												"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
												"differentiatedUiMediaDetails": {
													"mediaType": "ADS_MEDIA_ENUM_IMAGE",
													"lottie": {},
													"video": {}
												}
											},
											"reviewsSummary": {},
											"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
											"restaurantOfferPresentationInfo": {},
											"externalRatings": {
												"aggregatedRating": {
													"rating": "--"
												}
											},
											"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
											"priceComparisonComms": {}
										},
										"analytics": {
											"context": "seo-data-18a691b5-952c-47e5-80bf-b4ebf2b1d7fd"
										},
										"cta": {
											"link": "https://www.swiggy.com/city/hyderabad/al-taza-mehdipatnam-rest743166",
											"text": "RESTAURANT_MENU",
											"type": "WEBLINK"
										},
										"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
									}
								];
const Body=() => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restaurants.map((restaurent)=>(
                        <RestaurentCard key={restaurent?.info?.id} restData={restaurent} />
                    ))
                }
            </div>
        </div>
    )
};

const RestaurentCard=(props)=>{

    const {restData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=restData?.info;
    return(
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} star</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}

const jsxHeading=(
<h1 className="header" tabIndex="5">Hello React!</h1>
)
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />);


