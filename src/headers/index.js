import React from 'react'
import {Header1, Header2, Header3, Header4} from "./components.js"

const HomePage = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Headers</h1>
      <div className="sub-main-container">
        <Header1 />
        <Header2 />
        <Header3 />
        <div>
          <h1 className="subheading">Header 4</h1>
          <Header4/>
        </div>
      </div>
    </div>
  );
}

export default HomePage