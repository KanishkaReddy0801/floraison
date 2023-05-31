import React, { useRef, useEffect } from 'react';
import '../App.css';
import './Css/card.css'


export default function Card(props) {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardElement = cardRef.current;
        const rect = cardElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;

        if (isVisible) {
          const index = Array.from(cardElement.parentNode.children).indexOf(cardElement);
          const delay = 200 * index; // Delay calculation based on index (1 second per index)
          setTimeout(() => {
            cardElement.classList.add('animate');
          }, delay);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <a className='link' href={props.link}></a>
      <div>
        <img className="card-image" src={props.image} alt="" />
      </div>
      <div className="card-content">
        <h3 className="card-heading">
          {props.heading}
        </h3>
        <p className="card-para">
          {props.para}
        </p>
      </div>
    </div>
  );
}
