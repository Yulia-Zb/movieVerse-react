import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../services/auth";
import GenreItem from "./GenreItem";
import Loader from "./Loader";

export default function GenreList() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchGenres() {
      try {
        setIsLoading(true);
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=ru", {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        });
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGenres();
  }, []);

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
