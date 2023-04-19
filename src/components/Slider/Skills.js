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
        <Card icon={imgJs} cardClass="card-skills" title={"JavaScript"}></Card>
        <Card icon={imgReact} cardClass="card-skills" title={"React"}></Card>
        <Card icon={imgJava} cardClass="card-skills" title={"Java"}></Card>
        <Card icon={imgNode} cardClass="card-skills" title={"Node"}></Card>
      </div>
    </>
  );
}
