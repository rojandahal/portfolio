import React from "react";
import me from "../assets/png/me.jpg";
import "./aboutme.css";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects.js";

export default function AboutMe() {
  return (
    <>
      <Projects />

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
      
      <Skills />
    </>
  );
}
