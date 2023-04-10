import React from "react";

export default function Button(props) {
  let clickHandler = () => {
    //Do some action when click
  };
  return (
    <>
      <button onClick={clickHandler}>{props.text}</button>
    </>
  );
}
