import { useParams } from "react-router";
import Loader from "../components/shared/Loader";
import { useMovieById } from "../hooks/useMovieById";

export default function SingleMoviePage() {
  const { id } = useParams();
  const { movieDetails, isLoading } = useMovieById(id);

  if (isLoading) {
    return (
      <div className="wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="movie-details">
        <div className="movie-details__content">
          <img
            className="movie-details__poster"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div className="movie-details__info">
            <h1 className="movie-details__title"> {movieDetails.title}</h1>
            <p className="movie-details__genres">
              <span>Жанры:</span>{" "}
              {movieDetails.genres && movieDetails.genres.map(genre => genre.name).join(", ")}
            </p>
            <p>
              <span>Продолжительность:</span> {movieDetails.runtime} мин.
            </p>
            <p>
              <span>Дата выхода:</span> {movieDetails.release_date}
            </p>
            <p>
              <span>Рейтинг: </span>
              {movieDetails.vote_average && movieDetails.vote_average.toFixed(1)}
            </p>
            <p className="movie-details__overview">
              <span>Описание:</span> {movieDetails.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
