import { useParams } from "react-router";
import { Link } from "react-router";
import Loader from "../components/shared/Loader";
import { useGenreMovies } from "../hooks/useGenreMovies";
import { useGenres } from "../hooks/useGenres";

export default function GenreMovies() {
  const { id } = useParams();
  const { genreMovies, isLoading } = useGenreMovies(id);
  const { genres, isLoading: isGenresLoading } = useGenres();

  const filteredGenreMovies = genreMovies.filter(
    movie => movie.poster_path && movie.title && movie.vote_average > 6
  );

  const genreName = genres.find(genre => genre.id.toString() === id)?.name;

  if (isLoading || isGenresLoading) {
    return (
      <div className="wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="wrapper">
        <h1 className="wrapper__title">Фильмы в жанре {genreName}</h1>
        <div className="movies-wrapper">
          <div className="grid">
            {filteredGenreMovies.map(movie => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div className="grid__item">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-wrapper">
                    <h4 className="movie-title">{movie.title}</h4>
                    <p className="movie-rating">{movie.vote_average.toFixed(1)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
