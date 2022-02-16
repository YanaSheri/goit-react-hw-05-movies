import OneMovie from "components/OneMovie/OneMovie";
import { Route } from "react-router";
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

const MovieDetailsPage = () => {
    console.log("Ok");
    return (
        <>
            <OneMovie />
            <p>Additional information</p>
            <ul>
                <li>
                    <Route path="/movies/:movieId/cast">
                        <Cast>Cast</Cast>
                    </Route>
                </li>
                <li>
                    <Route path="/movies/:movieId/reviews">
                        <Reviews/>
                    </Route>
                </li>
            </ul>
            
            
        </>
    );
}
 
export default MovieDetailsPage;