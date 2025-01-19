import styles from "./CamperCard.module.css";
import FilterIcons from "../FilterIcons/FilterIcons"; // Імпортуємо компонент
import sprite from "../../assets/sprite.svg";

const CamperCard = ({ camper }) => {
  const filters = Object.entries(camper)
    .filter(([key, value]) => value === true)
    .map(([key]) => key);

  const reviewsCount = Array.isArray(camper.reviews)
    ? camper.reviews.length
    : 0;

  const formattedPrice = camper.price.toLocaleString("uk-UA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className={styles.card}>
      {camper.gallery && camper.gallery.length > 0 && (
        <img
          src={camper.gallery[0].thumb}
          alt="Camper image"
          className={styles.image}
        />
      )}

      <div className={styles.information}>
        <div className={styles.namePrice}>
          <h3 className={styles.name}>{camper.name}</h3>
          <p className={styles.price}>€{formattedPrice}</p>

          <svg className={styles.heartIcon}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </div>

        <div className={styles.ratingLocation}>
          <svg className={styles.ratingtIcon}>
            <use href={`${sprite}#icon-rating`} />
          </svg>
          <p className={styles.rating}>
            {camper.rating} ({reviewsCount}{" "}
            {reviewsCount === 1 ? "Review" : "Reviews"})
          </p>

          <svg className={styles.mapIcon}>
            <use href={`${sprite}#icon-map`} />
          </svg>
          <p className={styles.location}>{camper.location}</p>
        </div>

        <p className={styles.description}>{camper.description}</p>

        {/* Використовуємо компонент для іконок фільтрів */}
        {filters.length > 0 && <FilterIcons filters={filters} />}

        <button className={styles.button}>Show more</button>
      </div>
    </div>
  );
};

export default CamperCard;
