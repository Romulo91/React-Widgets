import React, { useState } from "react";
import Accodiion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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
  return (
    <div>
      <Translate />
    </div>
  );
};
