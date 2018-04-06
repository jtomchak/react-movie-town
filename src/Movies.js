import React, { Component } from "react";
import { Grid, Navbar, Jumbotron } from "react-bootstrap";
import MovieCards from "./MovieCards";

class Movies extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    const MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=${
      this.props.searchTermURI
    }&include_adult=false&sort_by=created_at.asc&page=1`;

    fetch(MOVIE_URL)
      .then(response => response.json())
      .then(payload =>
        this.setState({
          movies: payload.results.filter(m => m.poster_path)
        })
      )
      .catch(err => console.log(err));
  }
  onClickDetails = movieId => {
    this.props.history.push(`movies/${movieId}`);
  };
  render() {
    return <MovieCards movies={this.state.movies} onClickDetails={this.onClickDetails} />;
  }
}

export default Movies;
