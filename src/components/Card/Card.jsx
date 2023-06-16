import React, { useEffect, useState } from "react";
import './Card.css';

const Card = ({
  value,
  index,
  onClick,
  animateflipp,
}) => {
  return (
    <div
      key={value.id}
      className="memo-block"
      onClick={() => (animateflipp && onClick(value, index))}
    >
      <div
        className={` memo-block-inner ${value.status} ${
          value.status == "selected" && "memo-block-flipped"
        }`}
      >
        <div className={`card memo-block-front`}></div>
        <div className={`card memo-block-back`}>{value.content}</div>
      </div>
    </div>
  );
};

export default Card;
