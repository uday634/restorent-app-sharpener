import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../store/cart-context";
import restaurantImage from "../../images/food.jpg";
import "./Header.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <>
      <header id="header" className="header">
        <h3 className="logo" id="logo">
          ReactMeals
        </h3>
        <ul className="header-list" onClick={props.setCartState}>
          <FaShoppingCart className="cart-icon" />
          <li className="cart-btn">Your Cart</li>
          {numberOfCartItems > 0 && (
            <p className="cart-count">{numberOfCartItems}</p>
          )}
        </ul>
      </header>
      <div className="restaurant-img">
        <img src={restaurantImage} alt="food" className="food-image" />
      </div>
    </>
  );
};

export default Header;
