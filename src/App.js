import React from "react";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Summary className="Summary-card" />
    </React.Fragment>
  );
}

export default App;
