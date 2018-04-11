import React, { Component } from "react";
import { Grid, Navbar, Jumbotron, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = ({ isAuth, user }) => {
  return (
    <Navbar inverse style={{ marginBottom: "0px" }}>
      <Nav pullRight>
        <LinkContainer to="/movies">
          <NavItem eventKey={1}>Movies</NavItem>
        </LinkContainer>
        <LinkContainer to="/">
          <NavItem eventKey={2}>Search</NavItem>
        </LinkContainer>
        {isAuth ? (
          <NavItem>{user.username}</NavItem>
        ) : (
          <LinkContainer to="/login">
            <NavItem eventKey={3}>Login</NavItem>
          </LinkContainer>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
