import React, { Component } from "react";
import { Grid, Navbar, Jumbotron, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Route } from "react-router-dom";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";

class App extends Component {
  //movies -> Movie Component
  //movies/:movieId -> MovieDetails Component
  render() {
    return (
      <div style={{ backgroundColor: "lightgray" }}>
        <Navbar inverse fixedTop>
          <Nav pullRight>
            <LinkContainer to="/movies">
              <NavItem eventKey={1}>Movies</NavItem>
            </LinkContainer>
            <LinkContainer to="/">
              <NavItem eventKey={2}>Search</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Hip Hop Movies</h1>
          </Grid>
        </Jumbotron>
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies/:movieId" component={MovieDetails} />
      </div>
    );
  }
}

export default App;
