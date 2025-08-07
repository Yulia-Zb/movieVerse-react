import { Link } from "react-router";
import { TOP_MOVIES_PAGE_ROUTE } from "../utils/consts";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <header className="header">
      <div className="container__header">
        <p className="header__title">MovieVerse</p>
        <div className="header-actions">
          <Link to={TOP_MOVIES_PAGE_ROUTE}>
            <IoHomeOutline className="home-icon" />
          </Link>
          <div className="search">
            <form action="">
              <Link to={TOP_MOVIES_PAGE_ROUTE}>
                <IoSearch className="serch-icon" />
              </Link>
              <input className="search__input" type="text" placeholder="Что хочешь посмотреть?" />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
