import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import * as fetches from '../../services/fetches';

const SearchMovie = () => {
    const [input, setInput] = useState("");
    const [movieList, setMovieList] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const search = qs.parse(location.search);
    const { query } = search;

    useEffect(() => {
        query && fetches.getMoviesByKeyWord(query).then(setMovieList)
    }, [query]);

    console.log(movieList);

    const handleChange = (e) => {
        const value = e.currentTarget.value;
        setInput(value);
        console.log(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        setInput(input);
        setMovieList(movieList);

        history.push({ pathname: "/movies", search: "?query=" + input });
    };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="input"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    onChange={handleChange}
                    // value={name}
                />
                <button type="submit">Search</button>
            </form>
            {movieList && (
                <ul>
                    {movieList?.results?.map(movieItem =>
                        <Link to={{
                            pathname: "/movies/" + movieItem.id,
                            state: { from: location },
                        }} key={movieItem.id}><li>{movieItem.original_title}</li></Link>)}
                </ul>
            )}
        </>
     );
}
 
export default SearchMovie;
