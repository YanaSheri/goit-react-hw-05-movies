import { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import * as fetches from '../../services/fetches';

const Cast = () => {
    // const { movieId } = useParams();
    // console.log(useParams + "from Cast!");
    const { movieId } = useParams();
    const [credits, setCredits] = useState(null);
    console.log(movieId);
    useEffect(() => {
        movieId && fetches.getMovieCredits(movieId).then(setCredits)
    }, [movieId]);
    const imgUrl = 'https://image.tmdb.org/t/p/w400';
    return credits ? (
        <>
            <ul>
                {credits.cast.map(credit => <li key={credit.id}>
                    <img src={imgUrl + credit.profile_path} width="200" alt="" />
                    <p>{credit.name}</p>
                    <p>Character: { credit.character }</p>
                </li>)}
            </ul>
            {/* <Link to="/">Go Back</Link> */}
        </>
    ) : null;
}
 
export default Cast;