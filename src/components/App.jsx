// import reactDom from "react-dom";
import Navigation from "./Navigation/Navigation";
// import Container from './Container/Container';
import { Route } from "react-router";
import HomePage from '../pages/HomePage';
import MovieDetailsPage from "pages/MovieDetailsPage";


export default function App() {
  return (
    <>
    {/* // <Container> */}
      <Navigation />

      <Route path="/" exact component={HomePage} />
      
      <Route path="/movies/:movieId">
        <MovieDetailsPage/>
      </Route>
      
      <Route path="/movies"/>

      

    {/* // </Container> */}
      </>
  );
}
