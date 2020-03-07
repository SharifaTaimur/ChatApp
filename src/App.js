import React, { Component } from "react";
import UsernameForm from "./components/UsernameForm";
import ChatRoom from "./components/ChatRoom";
import Test from "./components/Test";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentScreen: "WhatIsYourUsernameScreen",
      currentUsername: ""
    };

    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
  }

  onUsernameSubmitted(username) {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: "ChatRoom"
        });
      })
      .catch(error => console.error("error", error));
  }

  render() {
    if (this.state.currentScreen === "WhatIsYourUsernameScreen") {
      return (
        <div>
          <UsernameForm onSubmit={this.onUsernameSubmitted} />
          {/* <Test onSubmit={this.onUsernameSubmitted} />*/}
        </div>
      );
    } else if (this.state.currentScreen === "ChatRoom") {
      return <ChatRoom currentUsername={this.state.currentUsername} />;
    }
  }
}

export default App;
