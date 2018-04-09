import React, { Component } from "react";
import { Grid, Navbar, Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";
import MovieCards from "./MovieCards";

const mapDispatchToProps = dispatch => ({
  newMovies: movies => dispatch({ type: "NEW_MOVIES", payload: movies })
});

class Movies extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    const MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=${encodeURIComponent(
      this.props.searchTerm
    )}&include_adult=false&sort_by=created_at.asc&page=1`;

    fetch(MOVIE_URL)
      .then(response => response.json())
      .then(payload => {
        this.props.newMovies(payload.results.filter(m => m.poster_path));
      })
      .catch(err => console.log(err));
  }
  onClickDetails = movieId => {
    this.props.history.push(`movies/${movieId}`);
  };
  render() {
    return <MovieCards onClickDetails={this.onClickDetails} />;
  }
}

export default connect(null, mapDispatchToProps)(Movies);
