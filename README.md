# Movie Town with React

1.  `npx create-react-app react-movie-town` create our react app project and `cd react-movie-town` and be sure to change directory into our project.

2.  Add bootstrap to our project, `npm install react-bootstrap bootstrap@3`

3.  Update our `index.js` to add bootstrap as a dependency. Here is an example page of react using bootstrap [App.js](https://gist.githubusercontent.com/gaearon/85d8c067f6af1e56277c82d19fd4da7b/raw/6158dd991b67284e9fc8d70b9d973efe87659d72/App.js)

```js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
```

4.  We want to fetch our Movies when the component first mounts to the DOM. We will use **Life Cycle Methods** to accomplish this.

```js
//App.js
const MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=hiphop&include_adult=false&sort_by=created_at.asc&page=1"

 componentDidMount() {
    fetch(MOVIE_URL)
      .then(response => response.json())
      .then(payload =>
        console.log(payload)
      )
      .catch(err => console.log(err));
  }
```

We are using `fetch` to do our HTTP request, that returns a promise. So we use `.then()` and `.catch()` to handle the resolve and rejection of the promise.

5.  Now we have our movies payload, we can set the array of movie objects to state using **setState**, so our application remembers the movies for rendering.

```js
//App.js
this.setState({
  movies: payload.results
});
```

6.  Now state knows about our movies we can render the movie posters onto the page!!! `"https://image.tmdb.org/t/p/w500/" + movie.poster_path`

* We probably want to filter out movies that don't have a poster path. Don't want any broken images showing up!!

7.  Once we've got our posters rendering to the page, it's time we style them up, and get them looking nice. [Bootstrap Thumbnails](https://react-bootstrap.github.io/components/images/#thumbnail-divider)
