// import reactDom from "react-dom";
import { lazy, Suspense } from "react";
import Navigation from "./Navigation/Navigation";
// import Container from './Container/Container';
import { Route } from "react-router";
// import HomePage from '../pages/HomePage';
// import MovieDetailsPage from "pages/MovieDetailsPage";
import SearchMovie from "./SearchMovie/SearchMovie";
import { Switch, Redirect } from "react-router-dom";

const HomePage = lazy(() => import('../pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

export default function App() {
  return (
    <>
    {/* // <Container> */}
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          
          <Route path="/movies/:movieId">
            <MovieDetailsPage/>
          </Route>
          
          <Route path="/movies" component={SearchMovie} />
          
           <Redirect to="/" />
          </Switch>
        </Suspense>
    {/* // </Container> */}
      </>
  );
}
