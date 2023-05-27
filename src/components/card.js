import React from 'react';
import '../App.css';

export default function Card(props) {
  return (
    <div className="card">
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
  )
}
