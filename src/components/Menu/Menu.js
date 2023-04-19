import React, { useEffect, useState } from "react";
import "./menu.css";
import Button from "../Buttons/Button";
import { Link, NavLink } from "react-router-dom";
import menuIcon from "../../assets/svg/menu-hamburger.svg";
import data from "../../assets/json/data.json";

export default function Menu() {
  const [toggle, setToggle] = useState("close");
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 500) {
        setToggle("close");
        setScroll("scrolled");
      }
      if (window.scrollY < 500) {
        setScroll("");
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
  }

  return (
    <>
      <div className={`nav-container ${scroll}`}>
        <div className="navbar">
          <div className="logo">
            <Link to="/">Rojan Dahal </Link>
          </div>

          <div className="nav-contents">
            <ul>
              {data.links.map((item, index) => {
                return (
                  <li>
                    <NavLink key={index} to={item.url}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
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
            {data.links.map((i, index) => {
              return (
                <li>
                  <Link key={index} to={i.url}>
                    {i.title}
                  </Link>
                </li>
              );
            })}
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
