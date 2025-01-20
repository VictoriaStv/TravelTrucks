import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import sprite from "../../assets/sprite.svg";

const Header = () => {
  return (
    <header className={styles.header}>
 
      <NavLink to="/" className={styles.logo}>
        <svg className={styles.logoIcon}>
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </NavLink>

  
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
