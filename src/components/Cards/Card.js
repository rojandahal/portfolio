import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className={props.cardClass}>
        <img src={props.image} alt="#" />
        <h2>{props.title}</h2>
        <span>{props.description}</span>
      </div>
    </>
  );
}
