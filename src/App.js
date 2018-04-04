import React, { Component } from "react";
import { Grid, Navbar, Jumbotron } from "react-bootstrap";
import MovieCards from "./MovieCards";
const MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=hiphop&include_adult=false&sort_by=created_at.asc&page=1";

class App extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    fetch(MOVIE_URL)
      .then(response => response.json())
      .then(payload =>
        this.setState({
          movies: payload.results.filter(m => m.poster_path)
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div style={{ backgroundColor: "lightgray" }}>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Movie Town App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Hip Hop Movies</h1>
          </Grid>
        </Jumbotron>
        <MovieCards movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
