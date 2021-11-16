import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GifGriditem } from "./GifGriditem";

export const GifGrid = ({ category }) => {
  const [images, setimages] = useState([]);

  useEffect(() => {
    getGif();
  }, []);

  const getGif = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Dragon Ball Super&limit=10&api_key=PpE7mVViDjMLYfStwlEziP4HMUDIMOlz";

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
    setimages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>

      {images.map((img) => {
        return <GifGriditem key={img.id} {...img} />;
      })}
    </div>
  );
};
