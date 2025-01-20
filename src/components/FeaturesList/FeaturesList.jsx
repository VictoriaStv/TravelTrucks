import sprite from "../../assets/sprite.svg";
import styles from "./FeaturesList.module.css";

const FeaturesList = ({ trailer, addClass = "" }) => {
  // Мапа для фільтрів і їх відповідних іконок
  const iconMap = {
    AC: "icon-ac",
    bathroom: "icon-bathroom",
    kitchen: "icon-kitchen",
    TV: "icon-tv",
    radio: "icon-radio",
    refrigerator: "icon-refrigerator",
    microwave: "icon-microwave",
    gas: "icon-gas",
    water: "icon-water",
    transmission: "icon-automatic", // можна додати інші типи трансмісії за потреби
  };

  // Спеціальні класи для певних елементів
  const specialClasses = {
    gas: styles.gasIcon,
    microwave: styles.microwaveIcon,
    water: styles.waterIcon,
  };

  return (
    <ul className={`${styles.features}`}>
      {Object.keys(iconMap).map((key) => {
        // Якщо фільтр є в trailer, то додаємо елемент списку
        return (
          trailer[key] && (
            <li
              className={`${styles.item} ${styles[addClass]} ${
                specialClasses[key] ? specialClasses[key] : ""
              }`}
              key={key}
            >
              <svg style={{ width: "20px", height: "20px" }}>
                <use href={`${sprite}#${iconMap[key]}`} />
              </svg>
              <span className={styles.name}>{key}</span>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default FeaturesList;
