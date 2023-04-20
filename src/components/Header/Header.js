import React, { useEffect, useRef } from "react";
import "./header.css";
import Typed from "typed.js";

export default function Header({ id, link, icon }) {
  const Icon = icon;
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>I am</i> a programmer.",
        "Developer",
        "Designer",
        "I am Rojan Dahal",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="header-container">
        <div className="header-grid">
          <div className="text-container">
            <div className="header-animation">
              <div className="type-animation" ref={el}></div>
            </div>

            <div className="header-text">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </span>
            </div>
          </div>

          <div className="contacts">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="contact-icon"
            >
              <Icon />
            </a>
            {/* <a
              href="www.instagram.com/mrwhoisthisguy"
              target="_blank"
              rel="noreferrer"
              className="contact-icon"
            >
              <BsInstagram />
            </a>
            <a
              href="www.facebook.com/rojan.dahal.50"
              target="_blank"
              rel="noreferrer"
              className="contact-icon"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.github.com/rojandahal"
              target="_blank"
              rel="noreferrer"
              className="contact-icon"
            >
              <BsGithub />
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
