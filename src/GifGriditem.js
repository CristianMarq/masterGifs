import React from "react";

export const GifGriditem = ({ title, url }) => {
  return (
    <div>
      <img src={url} alt="title" />
      <p>{title}</p>
    </div>
  );
};
