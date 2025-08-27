import PopularItem from "./PopularItem";
import Loader from "../shared/Loader";
import { useMovies } from "../../hooks/useMovies";

export default function PopularList() {
  const { movies, isLoading } = useMovies();

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
