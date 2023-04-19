import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Card from "../components/Cards/Card";
import "./HomePage.css";
import Testimonial from "../components/Testimonial/Testimonial";
import Resume from "../assets/pdf/rojan_resume.pdf";
import Button from "../components/Buttons/Button";
import AboutMe from "./AboutMe";
import data from "../assets/pdf/data.json";

function HomePage() {
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    const dataItems = data.services.map((item, index) => {
      const icon = require(`../assets/svg/${item.icon}.svg`);
      return { ...item, icon };
    });
    setDataItems(dataItems);
  }, []);

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
          {dataItems.map((item, index) => {
            return (
              <Card
                key={index}
                cardClass="card"
                title={item.title}
                description={item.description}
                icon={item.icon}
              ></Card>
            );
          })}
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
