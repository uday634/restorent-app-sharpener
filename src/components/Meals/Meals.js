import React, { Fragment, useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import "./Meals.css";

const Meals = (props) => {
  const [currentItemsCount, setCurrentItemsCount] = useState(0);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (id, name, price) => {
    setCurrentItemsCount((prevCount) => prevCount + 1);

    cartCtx.addItem({
      id: id,
      name: name,
      amount: 1, // Use currentItemsCount directly
      price: price,
    });
  };
  console.log(cartCtx.items)

  return (
    <Fragment>
      <div className="food-container">
        {props.foodItems.map((item) => {
          const itemCount = currentItemsCount;
          return (
            <div className="food-item" key={item.id} id={item.id}>
              <div>
                <h4>{item.item}</h4>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </div>
              <div className="item-add-container">
                <p className="item-count-title">
                  Amount <span className="item-count">{itemCount}</span>
                </p>
                <button
                  className="item-add-btn"
                  onClick={() => addToCartHandler(item.id, item.item, item.price)}
                >
                  +Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Meals;
