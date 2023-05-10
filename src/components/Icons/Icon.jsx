import React from "react";

const Icon = ({ width, height, id, rest }) => {
  return (
    <svg width={width} height={height} {...rest}>
      <use xlinkHref={`${process.env.PUBLIC_URL}/svgs/icon-sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
