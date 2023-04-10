import React from "react";
import Header from "../components/Header/Header";
import Card from "../components/Cards/Card";
import "./HomePage.css";

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
    </div>
  );
}
