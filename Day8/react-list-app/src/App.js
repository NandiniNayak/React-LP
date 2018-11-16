import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: "a", name: "Allen", age: 23 },
        { id: "b", name: "Jesse", age: 23 },
        { id: "c", name: "Long", age: 25 }
      ]
    };
  }
  deleteUser(index) {
    // find the user by index and remove the user from the array
    // create a copy of the users array
    const usersCopy = [...this.state.users];
    // modifed the userCopy
    usersCopy.splice(index, 1);
    // update the state users value
    this.setState({
      users: usersCopy
    });
  }

  changeName(index, event) {
    // create a copy of users
    const usersCopy = [...this.state.users];
    // update a specific user
    const user = usersCopy[index];
    console.log(user);
    user.name = event.target.value;
    // update the modified user into the state Users
    usersCopy[index] = user;
    this.setState({
      users: usersCopy
    });
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map((user, index) => {
            console.log(index);
            return (
              <User
                key={user.id}
                name={user.name}
                age={user.age}
                changeEvent={this.changeName.bind(this, index)}
                deleteEvent={this.deleteUser.bind(this, index)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
