import React, { useEffect, useRef, useState } from "react";
import "./ImageSlider.css";

// images array
const images = [
  "images/slider1/slide1.jpg",
  "images/slider1/slide2.jpg",
  "images/slider1/slide3.jpg",
  "images/slider1/slide4.jpg",
];

const ImageSlider = () => {
  const autoSlideInterval = 5000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const isPaused = useRef(false);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseEnter = () => {
    isPaused.current = true;
    resetTimeout();
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      autoSlideInterval
    );
  };

  useEffect(() => {
    if (!isPaused.current) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        autoSlideInterval
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length, autoSlideInterval]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  

  return (
    <>
      <h1 className="subheading">Gallery 1</h1>

      <div
        className="gallery-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="background-opacity">
          <div className="text-overlay">
            <h2>Gallery Images</h2>
          </div>
        </div>
        <div
          className="image-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="arrow left-arrow" onClick={goToPrevious}>
          &#10094;
        </div>
        <div className="arrow right-arrow" onClick={goToNext}>
          &#10095;
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
