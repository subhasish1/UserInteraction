import React, { Component } from "react";
import logo from "./logo.svg";
import "./UserOutput/UserOutput.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

// function App() {
class App extends Component {
  state = {
    username: "Mr. Subhasish",
  };
  usernameChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div>
        <ol>
          <li>Create Two new component UserInput and UserOutput</li>
          <li>Userinout should hold an input element</li>
        </ol>
        <UserInput
          changed={this.usernameChangeHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName={this.state.username}></UserOutput>
        <UserOutput userName={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;