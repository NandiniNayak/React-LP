import React from "react";

const User = props => {
  // user function returns all the User specific UI components
  return (
    <div>
      <li>
        <span>
          name:
          {props.name} age:
          {props.age}
        </span>
        {/*input field to change name and button to delete user*/}
        <input onChange={props.changeEvent} />
        <button onClick={props.deleteEvent}>Delete</button>
      </li>
    </div>
  );
};

export default User;
