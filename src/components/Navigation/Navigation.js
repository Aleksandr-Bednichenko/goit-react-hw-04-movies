import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        to="/"
        className={styles.navLink}
        activeClassName={styles.navActive}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.navLink}
        activeClassName={styles.navActive}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
