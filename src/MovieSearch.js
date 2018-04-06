/*
1. Input to query for movies
1a. console.log(encodeURIComponent('cowboy aliens &trains'));
2. button for onClick to search
3. Take the input and put in the movie API URL and do the HTTP fetch
4. Redirect to the movies component with the results form that HTTP fetch
5. Our Details page should still work
*/
import React, { Component } from "react";
import { Button } from "react-bootstrap";

class MovieSearch extends Component {
  render() {
    return (
      <div>
        <input placeholder="movie search" type="text" ref={input => (this.input = input)} />
        <br />
        <Button onClick={() => this.props.movieSearchTerm(this.input.value)}>Find Movie</Button>
      </div>
    );
  }
}

export default MovieSearch;
