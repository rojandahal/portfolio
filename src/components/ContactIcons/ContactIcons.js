import React from "react";
import "./contacticons.css";
import * as BS from "react-icons/bs";

export default function ContactIcons({ id, link, icon }) {
  return (
    <div className="contacts">
      <a href={link} target="_blank" rel="noreferrer" className="contact-icon">
        {React.createElement(BS[`${icon}`])}
      </a>
    </div>
  );
}
