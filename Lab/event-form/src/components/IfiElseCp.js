import React, { Component } from "react";
import LoginControl from "./LoginControl";

export default class IfiElseCp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <LoginControl isLoggedIn={this.state.isLoggedIn} />
        {
          //toán tử điều kiện
          isLoggedIn ? (
            <input
              type="button"
              value="Logout"
              onClick={this.handleLogoutClick}
            />
          ) : (
            <input
              type="button"
              value="Login"
              onClick={this.handleLoginClick}
            />
          )
        }
      </div>
    );
  }
}
