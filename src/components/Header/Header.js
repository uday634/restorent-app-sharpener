import React from "react";
import "./Header.css";
import { FaCartShopping } from "react-icons/fa6";
import resturentImage from "../../images/food.jpg";

const Header = (props) => {


  return (
    <>
      <header id="header" className="header">
        <h3 className="logo" id="logo">
          ReactMeals
        </h3>
        <ul className="header-list" onClick={props.setCartState}>
          <FaCartShopping className="cart-icon" />
          <li className="cart-btn">
            {" "}
            Your Cart 
          </li>
          <p className="cart-count">0</p>
        </ul>
      </header>
      <div className="restorent-img">
        <img src={resturentImage} alt="food" className="food-image" />
        
      </div>
    </>
  );
};

export default Header;
