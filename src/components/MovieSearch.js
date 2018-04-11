/*
1. Input to query for movies
1a. console.log(encodeURIComponent('cowboy aliens &trains'));
2. button for onClick to search
3. Take the input and put in the movie API URL and do the HTTP fetch
4. Redirect to the movies component with the results form that HTTP fetch
5. Our Details page should still work
*/
import React, { Component } from "react";
import { Col, Grid, Button, Row, Form } from "react-bootstrap";

import "./movieSearch.css";

class MovieSearch extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} mdPush={3} className="search-box">
            <Form className="search-form">
              <input
                className="form-control"
                placeholder="movie search"
                type="text"
                ref={input => (this.input = input)}
              />
              <Button
                className="btn btn-link search-btn"
                onClick={() => this.props.movieSearchTerm(this.input.value)}
              >
                <i className="glyphicon glyphicon-search" />
              </Button>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default MovieSearch;
