import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://thumbs.dreamstime.com/z/print-food-logo-food-delivery-logo-vector-180672311.jpg" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
           <img
            className="res-logo" 
            alt="res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}
            />
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.cuisines.join(", ")}</h3>
            <h4>{resData.info.avgRatingString}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} Minutes</h4>
        </div>
    );
};

const resObj = {
    "info": {
        "id": "126289",
        "name": "UBQ by Barbeque Nation",
        "cloudinaryImageId": "laiyciem5yqr1qbxhfcj",
        "locality": "City Mall",
        "areaName": "Golghar",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "North Indian",
            "Barbecue",
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Desserts"
        ],
        "avgRating": 4,
        "parentId": "10804",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 1.1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-03-21 23:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
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
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-city-mall-golghar-gorakhpur-126289",
        "type": "WEBLINK"
    }
};


const Body = () => {
     return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <RestaurantCard resData = {resObj}/>
            </div>
        </div>
     )
}
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};
const  root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout  />);