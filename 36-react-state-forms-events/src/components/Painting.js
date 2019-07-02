import React from "react";

const Painting = props => {
  const { id, title, img_src } = props;
  return (
    <div key={id} className="painting">
      <h1>{title}</h1>
      <img src={img_src} />
    </div>
  );
};

export default Painting;
