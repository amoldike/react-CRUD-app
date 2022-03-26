import React from "react";
import "../Styles/CategoreCard.css";
const CategoryCards = ({ taskObj }) => {
  return (
    <div className="categoryList">
      <li>{taskObj.Name} </li>
    </div>
  );
};

export default CategoryCards;
