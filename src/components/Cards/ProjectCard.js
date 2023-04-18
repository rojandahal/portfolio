import React from "react";
import "./projectcard.css";

export default function ProjectCard({ cardImage, title }) {
  return (
    <div className="project-card-container">
      <img className="image" src={cardImage} alt="" />
      <div className="middle-text">
        <span className="title">{title}</span>
      </div>
    </div>
  );
}
