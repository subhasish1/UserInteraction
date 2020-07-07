import React from "react";

const userInput = (props) => {
  const InStyle = {
    border: "2px solid red",
  };
  return (
    <input
      type="text"
      style={InStyle}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};
export default userInput;
