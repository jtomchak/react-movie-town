import React, { Component } from "react";
import { Grid, Navbar, Jumbotron, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Route, withRouter } from "react-router-dom";
import Movies from "./Movies";
import MovieSearch from "./MovieSearch";
import MovieDetails from "./MovieDetails";

class App extends Component {
  //movies -> Movie Component
  //movies/:movieId -> MovieDetails Component
  state = {
    searchTerm: ""
  };

  componentWillReceiveProps(nextProps) {
    //reset search term for a new clean search
    if (nextProps.location.pathname === "/") {
      this.setState({
        searchTerm: ""
      });
    }
  }

  movieSearchTerm = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    });
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
          </Nav>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>{this.state.searchTerm} Movies</h1>
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
          render={props => <Movies {...props} searchTerm={this.state.searchTerm} />}
        />
        <Route path="/movies/:movieId" component={MovieDetails} />
      </div>
    );
  }
}

export default withRouter(App);
