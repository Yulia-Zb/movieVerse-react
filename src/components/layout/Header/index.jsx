import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { TOP_MOVIES_PAGE_ROUTE } from "../../../utils";
import { SEARCH_PAGE_ROUTE } from "../../../utils";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import styles from "./Header.module.css";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (searchInput) {
      navigate(`${SEARCH_PAGE_ROUTE}?query=${searchInput}`);
      setSearchInput("");
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.title}>MovieVerse</p>
        <div className={styles.actions}>
          <Link to={TOP_MOVIES_PAGE_ROUTE}>
            <IoHomeOutline className={styles.home__icon} />
          </Link>
          <div className={styles.search}>
            <form onSubmit={handleSubmit}>
              <Link to={TOP_MOVIES_PAGE_ROUTE}>
                <IoSearch className={styles.icon} />
              </Link>
              <input
                className={styles.input}
                type="text"
                placeholder="Что хочешь посмотреть?"
                value={searchInput}
                onChange={event => setSearchInput(event.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
