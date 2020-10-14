import React from "react";
import Accodiion from "./components/Accordion";

const items = [
  { title: "What is React?", content: "React is a front end JS framework" },
  { title: "why use react", content: "React is a favoritwe library " },
  {
    title: "Howe do you use React",
    content: "You use React by creating components",
  },
];

export default () => {
  return (
    <div>
      <Accodiion items={items} />
    </div>
  );
};
