import React, { useEffect, useState } from "react";
import { GifGriditem } from "./GifGriditem";
import { getGif } from "./helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setimages] = useState([]);

  useEffect(() => {
    getGif(category).then((cat) => setimages(cat));
  }, [category]);

  return (
    <>
      <h3>{category}</h3>{" "}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGriditem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
