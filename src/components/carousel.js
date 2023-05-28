import React, { useState, useEffect } from 'react';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Carousel = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
  
      return () => {
        clearInterval(interval);
      };
    }, [currentIndex]);
  
    const handleNext = () => {
      setCurrentIndex((currentIndex + 1) % cards.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
    };
  
    const getCardIndex = (index) => {
      if (cards.length === 4) {
        return index >= cards.length ? index - cards.length : index;
      } else if (cards.length === 3) {
        return index >= cards.length ? index % cards.length : index;
      }
      return index;
    };
  
    return (
      <div className="carousel">
        <div className="cards-wrapper">
          {[...Array(cards.length)].map((_, index) => {
            const cardIndex = getCardIndex(currentIndex + index);
            return (
              <div className="cards" key={index}>
                <img width="100%" height="100%" src={cards[cardIndex]} alt={`Card ${cardIndex + 1}`} />
              </div>
            );
          })}
        </div>
        <FaAngleLeft className="arrow prev" onClick={handlePrev} />
        <FaAngleRight className="arrow next" onClick={handleNext} />
      </div>
    );
  };
  
  export default Carousel;
