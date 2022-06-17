import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const ctx = useContext(FavoritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={styles.active}>
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup" activeClassName={styles.active}>
              New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeClassName={styles.active}>
              Favorites
              {ctx.totalFavorites !== 0 && (
                <span className={styles.badge}>{ctx.totalFavorites}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
