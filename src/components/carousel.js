import React, { useState, useEffect } from 'react';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const handleNext = () => {
    console.log(currentIndex,(currentIndex + 1) % cards.length);
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="carousel">
      <div className="cards-wrapper">
        {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
          <div className="card" key={index}>
            <img width={"100%"} src={card}/>
          </div>
        ))}
      </div>
      <button className="arrow prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="arrow next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
