import React from 'react';
import ReactDOM from 'react-dom/client';
const Header = () => {
    return (
        <div className="Header">
            <div className="logo-contain">
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
    console.log(props);
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
           <img
            className="res-logo" 
            alt="res-logo" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c99751d54e4e1847186c62b3309c1327"
           />
            <h3>{props.resName}</h3>
            <h4>*4</h4>
            <h4>25-30 mins</h4>
            <p>{props.cuisine}</p>
        </div>
    );
};
const Body = () => {
     return (
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                <RestaurantCard
                    resName="Big Bowl"
                    cuisine="Chinese, Tibetan, Desserts Moti Jheel"
                />
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
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