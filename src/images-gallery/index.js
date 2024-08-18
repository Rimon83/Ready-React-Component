import React from 'react'
import { ImageSlider } from './components';

const SliderPage = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Images slider</h1>
      <div className="sub-main-container">
        <ImageSlider/>
      </div>
    </div>
  );
}

export default SliderPage