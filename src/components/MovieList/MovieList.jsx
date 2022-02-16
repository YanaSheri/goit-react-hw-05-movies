import { useEffect, useState } from 'react';
import * as fetches from '../../services/fetches';
import { Link, useLocation } from "react-router-dom";

const MovieList = () => {
    const [movies, setMovies] = useState(null);
    const location = useLocation();

    useEffect(() => {
        fetches.getTrendMovies().then(setMovies)
    }, []);

    return (
        <>
            {movies && (
                <ul>
                    {movies.results.map(movie =>
                        <Link to={{pathname: "/movies/" + movie.id,
                                state: { from: location },
                        }} key={movie.id}><li>{movie.title}{ movie.original_name }</li></Link>
                    )}
                </ul>
            )}
        </>
    );
}
 
export default MovieList;