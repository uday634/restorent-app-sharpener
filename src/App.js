import React, { useState, useContext } from "react";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

  let mealsArr = [
    { item: "sushi", discription: "finset fish and veggies", price: 22.99, id: 1 },
    { item: "Biryani", discription: "finset fish and veggies", price: 22.99, id: 2 },
    { item: "ice cream", discription: "finset fish and veggies", price: 22.99, id: 3 },
    { item: "Nodiles", discription: "finset fish and veggies", price: 22.99, id: 4 },
  ];

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCarthandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart  setCartState ={hideCarthandler} />}
      <Header setCartState ={showCartHandler} />
      <Summary className="Summary-card" />
      <Meals foodItems={mealsArr} />
    </CartProvider>
  );
}

export default App;
