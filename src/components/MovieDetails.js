import React, { Component } from "react";
import { Button } from "react-bootstrap";

import services from "../services";

class MovieDetails extends Component {
  state = {
    movie: {}
  };
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2434d246ec60c162a86db597467ef4ed`)
      .then(resp => resp.json())
      .then(payload =>
        this.setState({
          movie: payload
        })
      )
      .catch(err => console.log(err));
  }
  onFavoriteClick = () => {
    services.Movie.favorite(this.state.movie, this.props.token)
      .then(resp => resp.json())
      .then(payload => console.log(payload))
      .catch(err => console.log(err));
  };

  removeFavorite = () => {
    this.props.onRemoveFavorite(this.props.match.params.movieId);
  };

  render() {
    return (
      <div>
        <h2>{this.state.movie.title}</h2>
        <Button onClick={this.onFavoriteClick}>Favorite</Button>
        <Button onClick={this.removeFavorite}>Remove Favorite</Button>
      </div>
    );
  }
}

export default MovieDetails;
