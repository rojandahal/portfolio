import React from "react";
import "./projectcard.css";

export default function ProjectCard({ cardImage, title, url }) {
  return (
    <>
      <figure>
        <img
          className="image"
          src={require(`../../assets/png/${cardImage}`)}
          alt="img"
        />
        <div className="card-body">
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
      </figure>
    </>
  );
}
