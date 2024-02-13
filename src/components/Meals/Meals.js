import React, { Fragment, useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import "./Meals.css";

const Meals = React.memo((props) => {
  const [itemsCount, setItemsCount] = useState({});
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (id, name, price) => {
    setItemsCount((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));

    cartCtx.addItem({
      id: id,
      name: name,
      amount:  1,
      price: price,
    });
  };

  console.log(cartCtx.items);

  return (
    <Fragment>
      <div className="food-container">
        {props.foodItems.map((item) => {
          const itemCount = itemsCount[item.id] || 0;
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
});

export default Meals;
