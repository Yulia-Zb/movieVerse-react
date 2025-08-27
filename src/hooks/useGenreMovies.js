import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";

export function useGenreMovies(id) {
  const [genreMovies, setGenreMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchGenreMovies() {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(
          `discover/movie?with_genres=${id}&language=ru-RU&include_adult=false&include_video=false&with_original_language=ru`
        );
        setGenreMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGenreMovies();
  }, [id]);

  return { genreMovies, isLoading };
}
