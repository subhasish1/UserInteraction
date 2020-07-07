import React from "react";
import "./UserOutput.css";
const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Welcome {props.userName}</p>
      <p>Some Radom Text 122222222</p>
    </div>
  );
};

export default userOutput;
