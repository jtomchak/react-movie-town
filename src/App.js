import React, { Component } from "react";
import { Grid, Navbar, Jumbotron, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
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
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Movie Town App</a>
              </Navbar.Brand>

              <Navbar.Toggle />
            </Navbar.Header>
            <Nav>
              <NavItem>
                <Link to="/movies">Moives</Link>
              </NavItem>
            </Nav>
          </Grid>
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
