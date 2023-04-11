import React from "react";
import "./menu.css";
import Button from "../Buttons/Button";

export default function Menu() {
  return (
    <>
      <div class="navbar">
        <h2>Rojan Dahal</h2>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="#service">Service</a>
        <a href="#blog">Blogs</a>
        <Button newClass={"button-contact"} text={"Contact Me"}></Button>
      </div>
    </>
  );
}
