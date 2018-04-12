const MOVIE_BASE_URL = `https://api.themoviedb.org/3`;
const API_URL = `https://codercamps-conduit.herokuapp.com/api/`;

const Movie = {
  getDetails: movieId =>
    fetch(`${MOVIE_BASE_URL}/movie/${movieId}?api_key=2434d246ec60c162a86db597467ef4ed`),
  search: term => {
    const uriEncoded = encodeURIComponent(term);
    return fetch(
      `${MOVIE_BASE_URL}/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=${uriEncoded}&include_adult=false&sort_by=created_at.asc&page=1`
    );
  },
  favorite: (movie, userToken) =>
    fetch(API_URL + "movies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken
      },
      body: JSON.stringify({
        movie: {
          movie_id: movie.id,
          poster_path: movie.poster_path,
          title: movie.title,
          overview: movie.overview
        }
      })
    })
};

const User = {
  login: (email, password) =>
    fetch(API_URL + "users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password
        }
      })
    }),
  register: (username, email, password) =>
    fetch(API_URL + "users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password
        }
      })
    })
};

export default {
  Movie,
  User
};
