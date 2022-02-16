import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as fetches from '../../services/fetches';

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        movieId && fetches.getMovieReviews(movieId).then(setReviews)
    }, [movieId]);
        
    return (
        <>
            {reviews && (
                <ul>
                    {reviews.results.map(review => <li key={review.id}>
                        <h4>Author: {review.author}</h4>
                        <p>{review.content}</p>
                    </li>)}
                </ul>)}
            {reviews?.results?.length === 0 && (<p>We don't have any reviews for this movie.</p>)}
        </>
    ) 
}
 
export default Reviews;