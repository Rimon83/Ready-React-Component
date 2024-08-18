import React from 'react'
import {Header1, Header2} from "./components.js"

const HomePage = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Headers</h1>
      <div className="sub-main-container">
        <Header1 />
        <Header2/>
        <h1> header 3</h1>
      </div>
    </div>
  );
}

export default HomePage