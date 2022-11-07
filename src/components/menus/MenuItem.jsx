import React from "react";
import MainContent from "./MainContent";

function MenuItem({ imageUrl, title, description, id }) {
  return (
    <MainContent
      id={id}
      imageUrl={imageUrl}
      title={title}
      description={description}
    />
  );
}

export default MenuItem;
