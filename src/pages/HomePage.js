import React from "react";
import Header from "../components/Header/Header";
import Card from "../components/Cards/Card";
import "./HomePage.css";
import ProjectCard from "../components/Cards/ProjectCard";
import mobileImage from "../assets/mobile.jpg";
import laptopImage from "../assets/laptopimage.jpg";
import backgroundImage from "../assets/background.jpg";

export default function HomePage() {
  return (
    <div>
      <Header></Header>
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
    </div>
  );
}
