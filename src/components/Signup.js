import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from "react-redux";
import services from "../services";

import "./signup.css";

const mapDispatchToProps = dispatch => ({
  register: (username, email, password) =>
    dispatch({ type: "REGISTER", payload: services.User.register(username, email, password) })
});

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.register(this.state.username, this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Signup);
