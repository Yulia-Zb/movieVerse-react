import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../services/auth";
import PopularItem from "./PopularItem";
import Loader from "./Loader";

export default function PopularList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPopular() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru-RU&page=1&sort_by=popularity.desc",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPopular();
  }, []);

  const filteredMovies = movies.filter(
    movie => movie.poster_path && movie.title && movie.overview && movie.vote_average > 6
  );

  return (
    <div className="movies-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid">
          {filteredMovies.map(movie => (
            <PopularItem key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
