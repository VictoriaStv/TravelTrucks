import styles from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  // Фільтруємо фільтри, де значення true
  const filters = Object.entries(camper)
    .filter(([value]) => value === true) // залишаємо лише ті, де значення true
    .map(([key]) => key); // забираємо лише ключі (фільтри)

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

      {/* Назва кемпера */}
      <h3 className={styles.name}>{camper.name}</h3>

      {/* Оцінка */}
      <p className={styles.price}>{camper.price} грн/день</p>

      {/* Локація */}
      <p className={styles.location}>{camper.location}</p>

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
  );
};

export default CamperCard;
