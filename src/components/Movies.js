import React, { Component } from "react";
import { Grid, Navbar, Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";
import services from "../services";

import MovieCards from "./MovieCards";

const mapStateToProps = state => ({
  movies: state.common.movies
});

const mapDispatchToProps = dispatch => ({
  newMovies: movies => dispatch({ type: "NEW_MOVIES", payload: movies })
});

class Movies extends Component {
  componentDidMount() {
    if (this.props.searchTerm) {
      this.props.newMovies(services.Movie.search(this.props.searchTerm));
    }
  }
  onClickDetails = movieId => {
    this.props.history.push(`movies/${movieId}`);
  };
  render() {
    return (
      <div>
        {!this.props.searchTerm && <p>No Search Term MEANS No Movies</p>}
        <MovieCards movies={this.props.movies} onClickDetails={this.onClickDetails} />;
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
