import React from "react";
import "./skills.css";
import Card from "../Cards/Card";
import imgJs from "../../assets/png/java-script.png";
import imgReact from "../../assets/png/atom.png";
import imgJava from "../../assets/png/java.png";
import imgNode from "../../assets/png/node-js.png";

export default function Skills() {
  return (
    <>
      <div className="skills-card-container">
        <Card image={imgJs} cardClass="card-skills" title={"JavaScript"}></Card>
        <Card image={imgReact} cardClass="card-skills" title={"React"}></Card>
        <Card image={imgJava} cardClass="card-skills" title={"Java"}></Card>
        <Card image={imgNode} cardClass="card-skills" title={"Node"}></Card>
      </div>
    </>
  );
}
