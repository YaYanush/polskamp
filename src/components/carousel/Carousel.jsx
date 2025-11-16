import React, { useState } from "react";
import "./Carousel.css";

const ImageCarousel = ({products = []}) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);
  const visibleSlides = 4;


  const changeSlide = (newIndex) => {
    if (isThrottled) return; // Prevent double actions
    setIsThrottled(true);
    setTimeout(() => setIsThrottled(false), 0); // Set delay for smooth transition

    setCurrentIndex(newIndex);
  };


  const nextSlide = () => {
    changeSlide((currentIndex + 1) % products.length);
  };

  const prevSlide = () => {
    changeSlide(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

   // Handle touch events
   let touchStartX = 0;
   let touchEndX = 0;
 
   const handleTouchStart = (e) => {
     touchStartX = e.touches[0].clientX;
   };
 
   const handleTouchMove = (e) => {
     touchEndX = e.touches[0].clientX;
   };
 
   const handleTouchEnd = () => {
     if (touchStartX - touchEndX > 50) {
       nextSlide(); // Swipe left (next)
     } else if (touchStartX - touchEndX < -50) {
       prevSlide(); // Swipe right (previous)
     }
   };

  return (
    <div className="carousel-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <button className="arrow-carousel left-arrow" onClick={prevSlide} disabled={isThrottled}>
        &#10094;
      </button>

      <div className="carousel-images">
        {products
          .concat(products) // Duplicate images for infinite effect
          .slice(currentIndex, currentIndex + visibleSlides)
          .map((product, index) => (
            <div key={index} className="carousel-item">
              <img src={product.src} alt={product.name} className="carousel-img" />
              <div>
                <p className="product-name">{product.name}</p>
              </div>
            </div>
            
          ))}
      </div>

      <button className="arrow-carousel right-arrow" onClick={nextSlide} disabled={isThrottled}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
