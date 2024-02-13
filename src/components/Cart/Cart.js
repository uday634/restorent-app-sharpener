import React, { useState, useContext } from "react";

import Modal from "../Model/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

import "./Cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
    console.log(item);
  };

  const cartItemRemoveHandler = (_id) => {
    // cartCtx.removeItem(id); // Pass only the id
    cartCtx.removeItem(_id)
  };

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        className="item-list"
        onAdd={cartItemAddHandler.bind(null, item)}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        id={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
      />
    );
  });

  return (
    <Modal setCartState={props.setCartState}>
      {cartItems}
      <div className="cart-details">
        <span className="total-amount-title">Total Amount</span>
        <span className="cart-total-amount">{totalAmount}</span>
      </div>
      <div className="cart-buttons">
        <button className="cart-close-btn" onClick={props.setCartState}>
          Close
        </button>
        {hasItems && <button className="cart-order-btn">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
