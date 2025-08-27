import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";

export function useMovieById(id) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(`/movie/${id}?language=ru-RU`);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieById();
  }, [id]);

  return { movieDetails, isLoading };
}
