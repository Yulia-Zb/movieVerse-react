import { Link } from "react-router";
import { GENRE_MOVIES_PAGE_ROUTE } from "../../utils";
import { PiFilmSlate } from "react-icons/pi";

export default function GenreItem({ title, id }) {
  return (
    <Link to={GENRE_MOVIES_PAGE_ROUTE.replace(":id", id)} className="grid__item">
      <div className="grid__item-content">
        <div className="genre-icon">
          <PiFilmSlate size="15px" />
        </div>
        <p className="genre-title">{title}</p>
      </div>
    </Link>
  );
}
