import React from "react";

const Child = props => {
  return (
    <div>
      <button onClick={props.changeTitle}>{props.title}</button>
      <button onClick={props.keepTitle}>{props.title}</button>
    </div>
  );
};

export default Child;
