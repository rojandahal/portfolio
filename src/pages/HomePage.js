import React from "react";
import Header from "../components/Header/Header";
import Card from "../components/Cards/Card";
import "./HomePage.css";
import Testimonial from "../components/Testimonial/Testimonial";
import Resume from "../assets/pdf/rojan_resume.pdf";
import Button from "../components/Buttons/Button";
import AboutMe from "./AboutMe";

function HomePage() {
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
            cardClass="card"
            title="First One"
            description="Hello this is the descriptio of first card"
          ></Card>
          <Card
            cardClass="card"
            title="First One"
            description="Hello this is the descriptio of first card"
          ></Card>
          <Card
            cardClass="card"
            title="First One"
            description="Hello this is the descriptio of first card"
          ></Card>
        </div>
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

export default HomePage;
