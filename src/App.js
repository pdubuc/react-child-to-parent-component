import React from "react";
import Menu from "./Menu.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Example of Promoting State from Child to Parent Component</h1>
      <Menu></Menu>
    </div>
  );
}
