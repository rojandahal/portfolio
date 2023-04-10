import React from "react";
import "./button.css";

export default function Button(props) {
  let clickHandler = () => {
    //Do some action when click
  };

  return (
    <>
      <button
        className="button"
        style={{ backgroundColor: props.background }}
        onClick={clickHandler}
      >
        {props.text}
      </button>
    </>
  );
}
