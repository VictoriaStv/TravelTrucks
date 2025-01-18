import styles from "./CamperCard.module.css";
import sprite from "../../assets/sprite.svg";

const CamperCard = ({ camper }) => {
  // Фільтруємо фільтри, де значення true
  const filters = Object.entries(camper)
    .filter(([value]) => value === true) // залишаємо лише ті, де значення true
    .map(([key]) => key); // забираємо лише ключі (фільтри)

  // Підраховуємо кількість відгуків
  const reviewsCount = Array.isArray(camper.reviews)
    ? camper.reviews.length
    : 0;

  // Форматуємо ціну
  const formattedPrice = camper.price.toLocaleString("uk-UA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className={styles.card}>
      {/* Перевіряємо, чи є галерея і рендеримо перше зображення */}
      {camper.gallery && camper.gallery.length > 0 && (
        <img
          src={camper.gallery[0].thumb} // Беремо перше зображення
          alt="Camper image"
          className={styles.image}
        />
      )}

      <div className={styles.information}>
        <div className={styles.namePrice}>
          {/* Назва кемпера */}
          <h3 className={styles.name}>{camper.name}</h3>
          {/* Ціна з символом євро */}
          <p className={styles.price}>€{formattedPrice}</p>

          <svg className={styles.heartIcon}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </div>

        <div className={styles.ratingLocation}>
          {/* Рейтинг */}
          <svg className={styles.ratingtIcon}>
            <use href={`${sprite}#icon-rating`} />
          </svg>
          <p className={styles.rating}>
            {camper.rating} ({reviewsCount}{" "}
            {reviewsCount === 1 ? "Review" : "Reviews"})
          </p>

          {/* Локація */}
          <svg className={styles.mapIcon}>
            <use href={`${sprite}#icon-map`} />
          </svg>
          <p className={styles.location}>{camper.location}</p>
        </div>

        {/* Опис */}
        <p className={styles.description}>{camper.description}</p>

        {/* Показуємо фільтри */}
        {filters.length > 0 && (
          <ul className={styles.filters}>
            {filters.map((filter, index) => (
              <li key={index} className={styles.filter}>
                {filter}
              </li>
            ))}
          </ul>
        )}

        {/* Кнопка для показу додаткової інформації */}
        <button className={styles.button}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
