import React, { Component } from "react";

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
  render() {
    return (
      <div>
        <h2>{this.state.movie.title}</h2>
      </div>
    );
  }
}

export default MovieDetails;
