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

* Rather than using class to leverage bootstrap, we are going to use some helpful Components to do so. `import { Grid, Row, Col, Thumbnail, Button, Clearfix } from "react-bootstrap";`
* Instead of setting `col-md-4` we will pass props to the `<Col/>` Component like so `<Col sm={6} md={4}>`

```js
//MoviePosterList
<Col sm={6} md={4}>
  <Thumbnail src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="242x200">
    <h3>{movie.title}</h3>
    <p>{movie.overview}</p>
    <p>
      <Button bsStyle="primary">Details</Button>
    </p>
  </Thumbnail>
</Col>
```

8.  This looks good, but what's up with the holes? We need to apply a bit of Bootstrap clearfix to our row so that each row starts at the same level. We've got `<Clearfix visibleSmBlock />` or `<Clearfix visibleMdBlock visibleLgBlock />` that we want to apply after a poster, before it wraps to a new line. In this case, 2 posters for sm, and 3 posters for md and lg.
    **Conditionally rendering** is what we can use to decide when and what to add an element in.

```js
//MoviePosterList
//Here the Clearfix will only be added in the render if the first part evaluates to True. Because of the '&&'
{
  (idx + 1) % 2 === 0 && <Clearfix visibleSmBlock />;
}
```

9.  **ROUTING** Our details button! The business has asked, that rather than a modal, we take the user to a details page of the movie. `npm install --save react-router-dom`

10. Router component for the environment you’re targeting and render it at the top of your app. Once applied we should be able to see Router and a parent to our App Component.

```js
//index.js
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

![Imgur](https://i.imgur.com/UEOnrY5.png)

11. Now we can change the route, and conditionally render Components based on the route or URL path in the browser!!!!

```js
  <Route exact path="/movies" component={Movies} />
  <Route path="/movies/:movieId" component={MovieDetails} />
```

12. We've moved around some of the components in our application so that the `App.js` will have the routing and not the logic for each "page".

![Imgur](https://i.imgur.com/W3Q6V8R.png)i

13. The idea now is that our Movie Posters List will render on the 'Movies' route, and when we click on the details of that poster, it will `props.history.push()` to '/movies/WHATEVER THE MOVIEID IS'. To achieve this, we want to pass a function as props from `Movies` to `MoviesCards` and from `MovieCards` to `MoviePosterList`. This function is declared in the parent `Movies`, but being invoked by the onClick method of each details button of the child component!!!! That's super rad!

14. Now in our `MovieDetails` Component we have access to the movieId from `props.match.params.movieId` and we can use that variable to make a fetch request for the details of that particular movie by it's id.

15. With the details we can make our details page, super pretty!!

16. Bootstrap link error!
    `npm install react-router-bootstrap`

17. Search Component

    1.  Input to query for movies
        1a. console.log(encodeURIComponent('cowboy aliens &trains'));
    2.  button for onClick to search
    3.  Take the input and put in the movie API URL and do the HTTP fetch
    4.  Redirect to the movies component with the results form that HTTP fetch
    5.  Our Details page should still work

18. David's Bug. Search term not clearing
    a. From search page, going back holds onto the original search
    b. App component should clear that state property 'searchTerm' when the root is rendered, that would be the search component itself.

```js
 componentWillReceiveProps(nextProps) {
    //reset search term for a new clean search
    if (nextProps.location.pathname === "/") {
      this.setState({
        searchTerm: ""
      });
    }
  }
```

19. **REDUX**
    `npm install redux react-redux`
    1.  Set up our store
    2.  Set up our reducers
    3.  Verify that it's all wired up.

```js
//index.js
<Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
```

20. Remove movies state from `Movies.js`. Send the movies array to the store via an action that gets dispatch from the component to the store. Once there, we can find the `MoviePosterList` component and `MapStateToProps` so that it will continue to have movies, but no more prop drilling!!!!!

21. Next Let's move the 'searchTerm' from `App.js` into our store state. This will be the first step into

22. Let's create some services to remove HTTP request from our components

23. Now the super cool thing is we can dispatch a promise, and not even handle the resolve or reject in the component, but rather in some redux middleware.

24. PromiseMiddleware.

25. Updating reducer to handle 'ASYNC_START' and our new movies

26. We need a login form that the user can get to in the nav bar @ `/login`. This component will need a input for email, and password, and a submit button to be able to HTTP Post.

27. User name and password can be used @ `https://codercamps-conduit.herokuapp.com/api/users/login` as an HTTP POST

```js
{
  "user": {
    "email": "meow@pants.com",
    "password": "password18"
  }
}
```

```js
//services.js
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
    })
};
```

28. So we know that `services.User.login(this.state.email, this.state.password)` that is now a promise. And where in the past have we 'comsumed' our promises? Yep, in the redux **middleware**

    1.  Wire up dispatch to the login component, so we can send this sucker off.
    2.  Ensure that the middleware is handling the promise correctly
    3.  Add a case in our reducer.

    * We should be able to see the username, email, token, bio, and image on our store under user property. That's super RAD!!

29. The great refactor

        > What we're looking for

    ![Imgur](https://i.imgur.com/mLa29eo.png)

30. How do we redirect after login

31. Conditionally rendering NavBar

32. Sign up Component

* this will look a lot like the Login Component
* but will need a new services, bc the POST is too a differenct endpoint.

```js
///services.js
fetch(API_URL + "users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
```

* We want to handle the promise in our redux middleware, and create the case statements, **ONLY** after we know for sure that our service is working!!!!!

33. We need to create a new service to POST a movie object to `api/movies` and call that service when we click 'Favorites' on our details page. Goodness! We are still calling and resolving the details request in the details component here too. So Sad!!!

```js
//services.js
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
  });
```

34. In the Movie Details when the 'Favorites' button is clicked we want to invoke and comsume this service to post movie favorite and ensure that it works. **ONLY** after than can we dispatch this to the redux store.

35. Render Favorites to 'Home' page

* This will invole reusing the MovieCards Component, separating out the props we pass it. So it can either be an array of favorite movies, or an array of movies from search.

36. Able to remove favorites.
    * We'll need a delete service for that specific movie id, now remember **this is the object ID of the movie as we have it stored as a favorite.** not the movie id property from the movies service.
    ```js
      fetch(API_URL + "movies/" + movieId, {
      method: "delete",
    ```
    * Then let's call that in our Movie Details, like we're calling everything else. lol
    * Once the service works we will be able to click it, go back to the home page and will be gone!. RAD
