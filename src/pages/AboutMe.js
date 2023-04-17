import React from "react";
import me from "../assets/me.jpg";
import "./aboutme.css";
import Skills from "../components/Slider/Skills";
import ProjectCard from "../components/Cards/ProjectCard";
import mobileImage from "../assets/mobile.jpg";
import laptopImage from "../assets/laptopimage.jpg";
import backgroundImage from "../assets/background.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="project-container">
        <div className="project-wrapper">
          <div className="project-text">
            <span>Projects</span>
            <h3>Some of my awesome stuff</h3>
          </div>
        </div>

        <div className="project-cards-container">
          <ProjectCard
            title="First Project"
            cardImage={mobileImage}
          ></ProjectCard>
          <ProjectCard
            title="Second Project"
            cardImage={laptopImage}
          ></ProjectCard>
          <ProjectCard
            title="Third Project"
            cardImage={backgroundImage}
          ></ProjectCard>
        </div>
      </div>

      <div className="about-me">
        <div className="container-about-me">
          <img src={me} alt="" />
          <div className="about-me-description">
            <h3>Title</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <Skills />
      </div>
    </>
  );
}
