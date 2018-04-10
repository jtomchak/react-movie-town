import React, { Component } from "react";
import { Grid, Navbar, Jumbotron, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Movies from "./Movies";
import MovieSearch from "./MovieSearch";
import MovieDetails from "./MovieDetails";
import Login from "./Login";

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm: term => dispatch({ type: "CREATE_SEARCH_TERM", payload: term })
});

class App extends Component {
  //movies -> Movie Component
  //movies/:movieId -> MovieDetails Component

  componentWillReceiveProps(nextProps) {
    //reset search term for a new clean search
    if (nextProps.location.pathname === "/") {
      this.props.setSearchTerm("");
    }
  }

  movieSearchTerm = searchTerm => {
    this.props.setSearchTerm(searchTerm);
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <Navbar inverse style={{ marginBottom: "0px" }}>
          <Nav pullRight>
            <LinkContainer to="/movies">
              <NavItem eventKey={1}>Movies</NavItem>
            </LinkContainer>
            <LinkContainer to="/">
              <NavItem eventKey={2}>Search</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem eventKey={3}>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>{this.props.searchTerm} Movies</h1>
          </Grid>
        </Jumbotron>
        <Route
          exact
          path="/"
          render={props => <MovieSearch {...props} movieSearchTerm={this.movieSearchTerm} />}
        />
        <Route
          exact
          path="/movies"
          render={props => <Movies {...props} searchTerm={this.props.searchTerm} />}
        />
        <Route path="/movies/:movieId" component={MovieDetails} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
