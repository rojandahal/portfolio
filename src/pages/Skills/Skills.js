import React from "react";
import "./skills.css";
import Card from "../../components/Cards/Card";
import data from "../../assets/json/data.json";

export default function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <div className="skills-card-container">
        {data.skills.map((item, index) => {
          return (
            <Card
              key={index}
              icon={require(`../../assets/png/${item.icon}`)}
              cardClass="card-skills"
              title={item.title}
            />
          );
        })}
      </div>
    </>
  );
}
