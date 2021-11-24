import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setcategories] = useState("Transformers");

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
