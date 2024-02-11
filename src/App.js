import React from "react";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Meals from "./components/Meals/Meals";

function App() {
  let mealsArr = [
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id:Math.floor(Math.random()*1000) },
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id:Math.floor(Math.random()*1000) },
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id:Math.floor(Math.random()*1000) },
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id:Math.floor(Math.random()*1000) },
  ];
  return (
    <div id="root">
      <Header className="Header" />
      <Summary className="Summary-card" />
      <Meals foodItems={mealsArr} />
    </div>
  );
}

export default App;
