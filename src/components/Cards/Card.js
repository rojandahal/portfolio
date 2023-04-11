import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img src="#" alt="#" />
        <h2>{props.title}</h2>
        <span>{props.description}</span>
      </div>
    </>
  );
}
