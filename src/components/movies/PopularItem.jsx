import { Link } from "react-router";
import { SINGLE_MOVIE_PAGE_ROUTE } from "../../utils";

export default function PopularItem({ movie }) {
  const rating = movie.vote_average.toFixed(1);

  return (
    <>
      <Link to={SINGLE_MOVIE_PAGE_ROUTE.replace(":id", movie.id)} className="grid__item">
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <div className="movie-wrapper">
          <h4 className="movie-title">{movie.title}</h4>
          <p className="movie-rating">{rating}</p>
        </div>
      </Link>
    </>
  );
}
