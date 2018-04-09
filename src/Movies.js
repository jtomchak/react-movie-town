import React, { Component } from "react";
import { Grid, Navbar, Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";
import services from "./services";

import MovieCards from "./MovieCards";

const mapDispatchToProps = dispatch => ({
  newMovies: movies => dispatch({ type: "NEW_MOVIES", payload: movies })
});

class Movies extends Component {
  componentDidMount() {
    this.props.newMovies(services.Movie.search(this.props.searchTerm));
  }
  onClickDetails = movieId => {
    this.props.history.push(`movies/${movieId}`);
  };
  render() {
    return <MovieCards onClickDetails={this.onClickDetails} />;
  }
}

export default connect(null, mapDispatchToProps)(Movies);
