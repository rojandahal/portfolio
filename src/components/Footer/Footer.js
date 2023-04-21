import React from "react";
import "./footer.css";
import Button from "../Buttons/Button";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-contents">
        <div className="footer-text">
          <h1>Let's discuss for a project</h1>
          <h3>
            Lets get connected to discuss for a project. The project can be
            carried out by myself or my team{" "}
          </h3>
        </div>
        <Button text={"Start Talking"} newClass={"button-footer"}></Button>
      </div>

      <div className="footer-container">
        <h5>Copyright&copy;RojanDahal</h5>
      </div>
    </div>
  );
}
