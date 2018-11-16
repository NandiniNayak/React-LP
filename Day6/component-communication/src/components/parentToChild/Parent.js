import React from "react";
import Child from "./Child";

const Parent = props => {
  // the spread operator({...props}) is used to pass all the props from grandParent (App) to the Parent
  // also parent can pass their own properties
  // return <Child {...props} parentData="data coming from parent" />;
  // sibling communication
  return (
    <div>
      <Child
        changeTitle={props.changeTitle}
        keepTitle={props.keepTitle}
        title={props.title}
      />
    </div>
  );
};

export default Parent;
