import GenreItem from "./GenreItem";
import Loader from "../shared/Loader";
import { useGenres } from "../../hooks/useGenres";

export default function GenreList() {
  const { genres, isLoading } = useGenres();

  return (
    <div className="genres-wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid genres-grid">
          {genres.map(genre => (
            <GenreItem key={genre.id} title={genre.name} id={genre.id} />
          ))}
        </div>
      )}
    </div>
  );
}
