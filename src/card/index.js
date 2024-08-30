import React from 'react'
import Card1 from './(card1)/Card1';
import Card2 from './(card2)/Card2';

const CardPage = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Card</h1>
      <div className="sub-main-container">
        <Card1 />
        <div>
          <h1 className="subheading">Card 2</h1>
          <Card2 />
        </div>
      </div>
    </div>
  );
}

export default CardPage