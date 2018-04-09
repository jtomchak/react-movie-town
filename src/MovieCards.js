import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import MoviePosterList from "./MoviePosterList";

class MovieCards extends Component {
  render() {
    return (
      <Grid>
        <MoviePosterList onClickDetails={this.props.onClickDetails} />
      </Grid>
    );
  }
}

export default MovieCards;
