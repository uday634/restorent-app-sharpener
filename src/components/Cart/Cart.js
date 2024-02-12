import React, { useState } from "react";
import Modal from "../Model/Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartItems = [{ id: 333, name: "Sushi", amount: 2, price: 12.33 }].map(
    (item) => {
      return <li className="item-list">{item.name}</li>;
    }
  );

  return (
    <Modal setCartState = {props.setCartState}>
      {cartItems}
      <div className="cart-details">
        <span className="total-amount-title">Total Amount</span>
        <span className="cart-total-amount">$35.62</span>
      </div>
      <div className="cart-buttons">
        <button className="cart-close-btn" onClick={props.setCartState}>
          Close
        </button>
        <button className="cart-order-btn">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
