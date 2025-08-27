import PopularList from "../components/movies/PopularList";

export default function TopMoviesPage() {
  return (
    <div className="wrapper">
      <h1 className="wrapper__title">Популярные фильмы</h1>
      <PopularList />
    </div>
  );
}
