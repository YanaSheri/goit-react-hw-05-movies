import { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import * as fetches from '../../services/fetches';

const OneMovie = () => {
    // const history = useHistory();
    // const location = useLocation();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    // const handleGoBack = () => {
    //     history.push(location.state.from);
    // };
    console.log(movieId);
     useEffect(() => {
        movieId && fetches.getOneMovie(movieId).then(setMovie)
    }, [movieId]);
    console.log(movie);
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
    return movie ? (
        <>
            {/* <button type="button" onClick={handleGoBack}>
                GoBack
            </button> */}
            <Link to="/">Go Back</Link>
            <img src={imgUrl + movie.poster_path} alt="" />
            <h2>{movie.title}{movie.original_name}</h2>
            <p>User score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(genre => genre.name + " ")}</p>
        </>
    ) : null;
}
 
export default OneMovie;