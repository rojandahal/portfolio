import React from "react";
import "./card.css";

export default function Card({ cardClass, icon, title, description }) {
  return (
    <div className="card-wrapper">
      <div className={cardClass}>
        <img src={icon} alt="#" />
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
}
