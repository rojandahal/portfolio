import React from "react";
import "./menu.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="nav-container">
        <div class="navbar">
          <div className="logo">
            <Link to="/">Rojan Dahal </Link>
          </div>

          <div className="nav-contents">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Blogs</Link>
              </li>
            </ul>
          </div>

          <div className="button">
            <Link to="/contact">
              <Button newClass={"button-contact"} text={"Contact Me"}></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
