import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

  let mealsArr = [
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id: Math.floor(Math.random() * 1000) },
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id: Math.floor(Math.random() * 1000) },
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id: Math.floor(Math.random() * 1000) },
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id: Math.floor(Math.random() * 1000) },
  ];

  const showCartHandler = () => {
    setCartIsShown(true);
    console.log('hi')
  }

  const hideCarthandler = () => {
    setCartIsShown(false);
  }

  return (
    <div id="root">
      {cartIsShown && <Cart  setCartState ={hideCarthandler} />}
      <Header setCartState ={showCartHandler} />
      <Summary className="Summary-card" />
      <Meals foodItems={mealsArr} />
    </div>
  );
}

export default App;
