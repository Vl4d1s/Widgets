import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript freamwork",
  },
  {
    title: "What use React?",
    content: "React is a favirite JS libary among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  return <Accordion items={items} />;
};