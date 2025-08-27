import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";

export function useGenres() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchGenres() {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(`/genre/movie/list?language=ru`);
        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGenres();
  }, []);

  return { genres, isLoading };
}
