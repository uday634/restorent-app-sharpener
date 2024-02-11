import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    

  let mealsArr = [
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id: Math.floor(Math.random() * 1000) },
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id: Math.floor(Math.random() * 1000) },
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id: Math.floor(Math.random() * 1000) },
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id: Math.floor(Math.random() * 1000) },
  ];

  return (
    <div id="root">
      <Cart/>
      <Header className="Header" />
      <Summary className="Summary-card" />
      <Meals foodItems={mealsArr} />
    </div>
  );
}

export default App;
