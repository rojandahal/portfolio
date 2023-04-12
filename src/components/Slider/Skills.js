import React from "react";
import "./skills.css";
import Card from "../Cards/Card";
import imgJs from "../../assets/java-script.png"
import imgReact from "../../assets/atom.png"
import imgJava from "../../assets/java.png"
import imgNode from "../../assets/node-js.png"

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
