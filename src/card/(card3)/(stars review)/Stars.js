import React from 'react'
import "./Stars.css"

const Stars = ({ totalStarsCount }) => {
  const percentage = `${totalStarsCount}%`;

  return (
    <div className="star-rating">
      <div className="stars-outer">
        <div className="stars-inner" style={{ width: percentage }}></div>
      </div>
      <span className="rating-text">{totalStarsCount}</span>
    </div>
  );
};

export default Stars