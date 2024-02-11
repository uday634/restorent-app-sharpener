import React, { Fragment } from "react";
import "./Meals.css";

const Meals = (props) => {
  return (
    <Fragment>
      <div className="food-container">
        {props.foodItems.map((item) => {
          return (
            <div className="food-item" key={item.id} id={item.id}>
              <div>
                <h4>{item.item}</h4>
                <p>{item.discription}</p>
                <p>${item.price}</p>
              </div>
              <div className="item-add-container">
                <p className="item-count-title">Amount <span className="item-count">0</span></p>
                <button className="item-add-btn">+Add</button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Meals;
