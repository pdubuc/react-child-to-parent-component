import React, { useState } from "react";
import "./Menu.css";
import YearFilter from "./YearFilter.js";

const Menu = (props) => {
  const [pickedYear, setPickedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setPickedYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <YearFilter selected={pickedYear} onChangeFilter={filterChangeHandler} />
    </div>
  );
};

export default Menu;
