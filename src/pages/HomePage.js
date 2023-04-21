import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Card from "../components/Cards/Card";
import "./HomePage.css";
import Testimonial from "./Testimonial/Testimonial";
import Resume from "../assets/pdf/rojan_resume.pdf";
import Button from "../components/Buttons/Button";
import AboutMe from "./AboutMe";
import data from "../assets/json/data.json";

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
    <>
      {/* {data.contacts.map((item, index) => {
        // const Icon = lazy(() => import(`react-icons/${item.icons}`).then(icons => icons[props.icon]))
        return (
          <Header key={index} id={item.id} link={item.link} icon={item.icon} />
        );
      })} */}
      <Header />
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
        <Testimonial />
      </div>
    </>
  );
}

export default HomePage;
