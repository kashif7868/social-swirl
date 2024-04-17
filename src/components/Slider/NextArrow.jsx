import React from "react";
import { FcNext } from "react-icons/fc";
import "../../asset/css/home.css";
const NextArrow = ({ onClick }) => {
  return (
    <div className="slider-next" onClick={onClick}>
      <FcNext />
    </div>
  );
};

export default NextArrow;
