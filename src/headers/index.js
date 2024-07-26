import React from 'react'
import Header from './(header1)/Header.js'

const HomePage = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Headers</h1>
      <div className="sub-main-container">
        <Header />
      </div>
    </div>
  );
}

export default HomePage