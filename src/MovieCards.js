import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import MoviePosterList from "./MoviePosterList";

class MovieCards extends Component {
  render() {
    return (
      <Grid>
        <MoviePosterList movies={this.props.movies} />
      </Grid>
    );
  }
}

export default MovieCards;
