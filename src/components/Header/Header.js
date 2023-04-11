import React, { useEffect, useRef } from "react";
import Menu from "../Menu/Menu";
import "./header.css";
import Typed from "typed.js";

export default function Header() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>I am</i> a programmer.", "Developer", "Designer", "I am Rojan Dahal"],
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
        <Menu />
        <div className="type-animation" ref={el}></div>
      </div>
    </>
  );
}
