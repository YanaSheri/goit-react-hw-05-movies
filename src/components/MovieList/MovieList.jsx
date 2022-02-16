import { useEffect, useState } from 'react';
import * as fetches from '../../services/fetches';
import { Link } from "react-router-dom";

const MovieList = () => {
    
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetches.getTrendMovies().then(setMovies)
    }, []);
    // console.log(movies);
    // console.log({ movies });
    // const { results } = movies;
    return (
        <>
            {movies && (
                <ul>
                    {movies.results.map(movie =>
                        <Link to={{pathname: "/movies/" + movie.id,
                              //   state: { from: location},
                        }} key={movie.id}><li>{movie.title}{ movie.original_name }</li></Link>
                    )}
                </ul>
            )}
        </>
    );
}
 
export default MovieList;