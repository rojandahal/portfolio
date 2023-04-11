import React from "react";
import "./menu.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div class="navbar">
        <h2>Rojan Dahal</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#service">Service</a>
        <a href="#blog">Blogs</a>
        <Link to="/contact" className="button">
          <Button newClass={"button-contact"} text={"Contact Me"}></Button>
        </Link>
      </div>
    </>
  );
}

export default Menu;
