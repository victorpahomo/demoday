import React, { useState, useEffect } from 'react';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-all duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 flex items-center justify-center text-white text-4xl font-bold"
            style={{ backgroundColor: slide.color }}
          >
            {slide.title}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <button
          className="p-2 text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:outline-none"
          onClick={handlePrevSlide}
        >
          &#10094;
        </button>
        <button
          className="p-2 text-white rounded-full bg-gray-800 hover:bg-gray-900 focus:outline-none"
          onClick={handleNextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
