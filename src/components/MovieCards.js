import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import MoviePosterList from "./MoviePosterList";

//MovieCards require 2 props
// Array of movies and a onDetails clickevent!

class MovieCards extends Component {
  render() {
    return (
      <Grid>
        <MoviePosterList movies={this.props.movies} onClickDetails={this.props.onClickDetails} />
      </Grid>
    );
  }
}

export default MovieCards;
