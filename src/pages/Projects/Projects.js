import React from "react";
import data from "../../assets/json/data.json";
import ProjectCard from "../../components/Cards/ProjectCard";
import "./projects.css";

export default function Projects() {
  return (
    <>
      <div className="project-wrapper">
        <div className="project-text">
          <span>Projects</span>
          <h3>Some of my awesome stuff</h3>
        </div>

        <div className="project-cards">
          {data.projects.map((i, index) => {
            return (
              <ProjectCard
                key={index}
                title={i.projectTitle}
                cardImage={i.image}
                url={i.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
