import React from "react";
import Header from "../components/Header/Header";
import Card from "../components/Cards/Card";
import "./HomePage.css";
import ProjectCard from "../components/Cards/ProjectCard";
import mobileImage from "../assets/mobile.jpg";
import laptopImage from "../assets/laptopimage.jpg";
import backgroundImage from "../assets/background.jpg";
import Testimonial from "../components/Testimonial/Testimonial";
import Resume from "../assets/rojan_resume.pdf";
import Button from "../components/Buttons/Button";
import AboutMe from "./AboutMe";

export default function HomePage() {
  return (
    <div>
      <Header></Header>
      <div className="download-button">
        <a href={Resume} target="_blank" rel="noreferrer">
          <Button
            newClass={"button-download"}
            text={"Download Resume"}
          ></Button>
        </a>
      </div>
      <div className="cards-container">
        <div className="cards-list">
          <Card
            title="First One"
            description="Hello this is the descriptio of first card"
          ></Card>
          <Card
            title="First One"
            description="Hello this is the descriptio of first card"
          ></Card>
          <Card
            title="First One"
            description="Hello this is the descriptio of first card"
          ></Card>
        </div>
      </div>

      <div className="project-container">
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

      <div className="about-me-container">
        <AboutMe></AboutMe>
      </div>
      
      <div className="testimonial-container">
        <Testimonial></Testimonial>
      </div>
    </div>
  );
}
