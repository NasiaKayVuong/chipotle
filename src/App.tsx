import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Order from "./Functions/Order";
import RandomOrder from "./Functions/RandomOrder";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="text-left text-5xl font-bold mt-0 mb-6">
          Burrito(Bowl) Maker
        </h2>
        <br />
        <RandomOrder />
        <br />
        <Order />
      </header>
    </div>
  );
}

export default App;
