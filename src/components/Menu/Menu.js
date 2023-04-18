import React, { useEffect, useState } from "react";
import "./menu.css";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/svg/menu-hamburger.svg";

export default function Menu() {
  const [toggle, setToggle] = useState("close");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setToggle("close");
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function onClickHandler() {
    toggle === "close" ? setToggle("open") : setToggle("close");
    console.log(toggle);
  }
  
  return (
    <>
      <div className="nav-container">
        <div className="navbar">
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

          <div className="nav-menu">
            <img
              src={menuIcon}
              alt=""
              className="hamburger"
              onClick={onClickHandler}
            />
          </div>

          <div className="nav-button">
            <Link to="/contact">
              <Button newClass={"button-contact"} text={"Contact Me"}></Button>
            </Link>
          </div>
        </div>
      </div>

      <div className={`mobile-navigation ${toggle}`}>
        <div className="mobile-nav-contents">
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
          <div className="mobile-nav-btn">
            <Link to="/contact">
              <Button newClass={"button-contact"} text={"Contact Me"}></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
