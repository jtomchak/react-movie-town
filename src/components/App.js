import React, { Component } from "react";
import { Grid, Navbar, Jumbotron, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Movies from "./Movies";
import MovieSearch from "./MovieSearch";
import MovieDetails from "./MovieDetails";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";

const mapStateToProps = state => ({
  searchTerm: state.common.searchTerm,
  user: state.common.user,
  isAuthenticated: state.common.isAuthenticated,
  redirect: state.common.redirect
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm: term => dispatch({ type: "CREATE_SEARCH_TERM", payload: term }),
  redirectTo: () => dispatch({ type: "REDIRECT", payload: null })
});

class App extends Component {
  //movies -> Movie Component
  //movies/:movieId -> MovieDetails Component

  componentWillReceiveProps(nextProps) {
    //reset search term for a new clean search
    if (nextProps.location.pathname === "/") {
      this.props.setSearchTerm("");
    }
    if (nextProps.redirect) {
      this.props.history.push(nextProps.redirect);
      this.props.redirectTo();
    }
  }

  movieSearchTerm = searchTerm => {
    this.props.setSearchTerm(searchTerm);
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <NavBar isAuth={this.props.isAuthenticated} user={this.props.user} />
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
        <Route path="/signup" component={Signup} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
