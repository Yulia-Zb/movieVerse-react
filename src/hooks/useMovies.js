import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPopular() {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(
          `/discover/movie?include_adult=false&include_video=false&language=ru-RU&page=1&sort_by=popularity.desc`
        );
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPopular();
  }, []);

  return { movies, isLoading };
}
