import React from "react";
import "./projectcard.css";

export default function ProjectCard(props) {
  return (
    <div className="project-card-container">
      <img className="image" src={props.cardImage} alt="" />
      <div className="middle-text">
        <props className="title">{props.title}</props>
      </div>
    </div>
  );
}
