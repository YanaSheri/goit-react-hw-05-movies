import OneMovie from "components/OneMovie/OneMovie";
import { Route } from "react-router";
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import { Link, useParams, Switch } from "react-router-dom";

const MovieDetailsPage = () => {
    console.log("Ok");
    const { movieId } = useParams();
    return (
        <>
            <OneMovie />
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to={`/movies/${movieId}/cast`}>
                        Cast
                    </Link>
                </li>
                <li><Link to={`/movies/${movieId}/reviews`}>
                        Reviews
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path="/movies/:movieId/cast" component={Cast} />
                <Route path="/movies/:movieId/reviews" component={Reviews} />
            </Switch>
            
        </>
    );
}
 
export default MovieDetailsPage;