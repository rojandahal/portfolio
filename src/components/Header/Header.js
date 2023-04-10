import React from "react";
import Button from "../Buttons/Button";
import Menu from "../Menu/Menu";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <Menu />
        <Button background="#d465ef" text={"Contact Me"}></Button>
      </div>
    </>
  );
}
