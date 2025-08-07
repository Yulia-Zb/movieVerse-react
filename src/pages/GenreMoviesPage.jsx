import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import { ACCESS_TOKEN } from "../services/auth";

export default function GenreMovies() {
  const [genreMovies, setGenreMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchGenreMovies() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&language=ru-RU&include_adult=false&include_video=false&with_original_language=ru`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setGenreMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGenreMovies();
  }, [id]);

  const filteredGenreMovies = genreMovies.filter(
    movie => movie.poster_path && movie.title && movie.vote_average > 6
  );

  if (isLoading) {
    return (
      <div className="wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="wrapper">
        <h1 className="wrapper__title">Подборка фильмов</h1>
        <div className="movies-wrapper">
          <div className="grid">
            {filteredGenreMovies.map(movie => (
              <div className="grid__item" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-wrapper">
                  <h4 className="movie-title">{movie.title}</h4>
                  <p className="movie-rating">{movie.vote_average.toFixed(1)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
