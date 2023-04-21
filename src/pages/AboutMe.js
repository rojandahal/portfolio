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
        <div className="image-about-me">
          <img src={me} alt="" />
        </div>
        <div className="about-me-description">
          <h3>Rojan Dahal</h3>
          <span>
            As a computer engineering student, I have developed a strong skill
            set in full-stack development using the MERN stack and Java. With
            proficiency in MongoDB, Express, React, and Node.js, I am able to
            create dynamic and interactive web applications. Additionally, I
            have experience in Android app development, allowing me to design
            and build applications for mobile devices. Throughout my studies, I
            have acquired a solid understanding of programming languages,
            software development, and computer hardware. This has enabled me to
            tackle complex projects with confidence and precision. With a
            passion for technology and a desire to continuously learn and
            improve, I am committed to staying up-to-date with the latest
            advancements in the field of computer engineering.
          </span>
        </div>
        <div className="background-text">
          <h1>About me</h1>
        </div>
      </div>

      <Skills />
    </>
  );
}
