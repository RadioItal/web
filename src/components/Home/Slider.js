import React, { useState, useEffect, useCallback } from 'react';
import './Slider.css';

const Slider = ({ slides, autoSlideDelay = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    // Start auto slide timer
    const timer = setInterval(() => {
      nextSlide();
    }, autoSlideDelay);

    // Clean up the timer on component unmount
    return () => {
      clearInterval(timer);
    };
  }, [autoSlideDelay, nextSlide]);

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={slide.alt} className="slide-image" />
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="slider-overlay"></div>
    </div>
  );
};

export default Slider;
