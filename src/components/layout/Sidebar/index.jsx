import { Link } from "react-router";
import { IoIosFilm } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { TOP_MOVIES_PAGE_ROUTE, GENRES_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from "../../../utils";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <Link to={TOP_MOVIES_PAGE_ROUTE} className={styles.link}>
            <div className={styles.icon}>
              <IoIosFilm />
            </div>
            <p>Популярное</p>
          </Link>

          <Link to={GENRES_PAGE_ROUTE} className={styles.link}>
            <div className={styles.icon}>
              <BiSolidCategory />
            </div>
            <p>Жанры</p>
          </Link>

          <Link to={SETTINGS_PAGE_ROUTE} className={styles.link}>
            <div className={styles.icon}>
              <IoIosSettings />
            </div>
            <p>Настройки</p>
          </Link>
        </div>
        <div className={styles.footer}>
          <p className={styles.footer__text}>
            Этот проект создан в учебных целях. Он использует API TMDB для отображения данных о
            фильмах. Проект не является коммерческим и не связан с TMDB.
          </p>
        </div>
      </div>
    </div>
  );
}
