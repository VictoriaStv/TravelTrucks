import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import sprite from "../../assets/sprite.svg"; // Імпортуємо спрайт

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Логотип */}
      <Link to="/" className={styles.logo}>
        <svg className={styles.logoIcon}>
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </Link>

      {/* Навігація */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          <svg className={styles.icon}>
            <use href={sprite + "#icon-logo"} />
          </svg>
          Home
        </Link>
        <Link to="/catalog" className={styles.link}>
          <svg className={styles.icon}>
            <use href={`${sprite}#catalog-icon`} />
          </svg>
          Catalog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
