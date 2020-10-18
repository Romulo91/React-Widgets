import React, { useState } from "react";
import Accodiion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  { title: "What is React?", content: "React is a front end JS framework" },
  { title: "why use react", content: "React is a favoritwe library " },
  {
    title: "Howe do you use React",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Troggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          options={options}
          onSelectedChage={setSelected}
        />
      ) : null}
    </div>
  );
};
