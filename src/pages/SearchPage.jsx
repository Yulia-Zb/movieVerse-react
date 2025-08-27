import { useSearchParams } from "react-router";
import PopularItem from "../components/movies/PopularItem";
import Loader from "../components/shared/Loader";
import { useSearch } from "../hooks/useSearch";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("query");

  const { searchMovies, isLoading } = useSearch(query);

  if (isLoading) {
    return (
      <div className="wrapper">
        <Loader />
      </div>
    );
  }

  const filteredSearchMovies = searchMovies.filter(
    searchMovie => searchMovie.poster_path && searchMovie.title && searchMovie.vote_average
  );

  return (
    <div className="wrapper">
      <h1 className="wrapper__title">Результаты поиска</h1>
      <div className="movies-wrapper">
        <div className="grid">
          {filteredSearchMovies.map(searchMovie => (
            <PopularItem key={searchMovie.id} movie={searchMovie} />
          ))}
        </div>
      </div>
    </div>
  );
}
