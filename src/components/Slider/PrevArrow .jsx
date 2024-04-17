import React from "react";
import { FcPrevious } from "react-icons/fa";
import "../../asset/css/home.css";
const PrevArrow = ({ onClick }) => {
  return (
    <div className="slider-prev" onClick={onClick}>
      <FcPrevious />
    </div>
  );
};

export default PrevArrow;
