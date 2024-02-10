import React, { Fragment } from "react";
import "./Meals.css";

const Meals = (props) => {
  return (
    <Fragment>
      <div className="food-container">
        <div className="food-item">
          <h4>Sushi</h4>
          <p>Finest Fish and veggies</p>
          <p>$22.99</p>
        </div>
        {props.foodItems.map((item) => {
          return (
            <div className="food-item">
              <h4>{item.item}</h4>
              <p>{item.discription}</p>
              <p>${item.price}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Meals;
