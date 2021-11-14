import React, { useEffect } from "react";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
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
  };

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
