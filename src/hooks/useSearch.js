import { useState, useEffect } from "react";
import { axiosInstance } from "../services/axios";

export function useSearch(query) {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMoviesBySearchQuery() {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(
          `/search/movie?query=${query}&include_adult=false&language=ru-RU`
        );
        console.log(data);
        setSearchMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMoviesBySearchQuery();
  }, [query]);

  return { searchMovies, isLoading };
}
