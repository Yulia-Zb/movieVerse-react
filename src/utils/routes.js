import TopMoviesPage from "../pages/TopMoviesPage";
import GenresPage from "../pages/GenresPage";
import GenreMoviesPage from "../pages/GenreMoviesPage"
import SettingsPage from "../pages/SettingsPage";
import SingleMoviePage from "../pages/SingleMoviePage";
import SearchPage from "../pages/SearchPage";
import NotFoundPage from "../pages/NotFoundPage";
import {
  TOP_MOVIES_PAGE_ROUTE,
  GENRES_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  SINGLE_MOVIE_PAGE_ROUTE,
  GENRE_MOVIES_PAGE_ROUTE,
  SEARCH_PAGE_ROUTE,
} from "./consts";

export const routes = [
  {
    path: TOP_MOVIES_PAGE_ROUTE,
    element: TopMoviesPage,
  },
  {
    path: GENRES_PAGE_ROUTE,
    element: GenresPage,
  },
  {
    path: SETTINGS_PAGE_ROUTE,
    element: SettingsPage,
  },
  {
    path: SINGLE_MOVIE_PAGE_ROUTE,
    element: SingleMoviePage,
  },
  {
    path: GENRE_MOVIES_PAGE_ROUTE,
    element: GenreMoviesPage,
  },
  {
    path: SEARCH_PAGE_ROUTE,
    element: SearchPage
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];
