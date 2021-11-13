import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setcategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball Super",
  ]);

  // const handleAdd = () => {
  //   const categoria = "YUGY-OH";
  //   setcategories([...categories, categoria]);
  //   // setcategories((cats) => [...categories, categoria]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category} </li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
