import sprite from "../../assets/sprite.svg";
import styles from "./FilterIcons.module.css";

const FilterIcons = ({ filters }) => {
  // Мапа фільтрів до відповідних іконок
  const iconMap = {
    AC: "icon-ac",
    bathroom: "icon-bathroom",
    kitchen: "icon-kitchen",
    TV: "icon-tv",
    radio: "icon-radio",
    refrigerator: "icon-refrigerator",
    microwave: "icon-microwave",
    gas: "icon-gas",
    water: "icon-water", // додано water
  };

  // Мапа для фільтрів по типу трансмісії і пального
  const transmissionMap = {
    automatic: "icon-automatic",
    manual: "icon-manual",
  };

  const engineMap = {
    diesel: "icon-diesel",
    petrol: "icon-petrol",
  };

  return (
    <ul className={styles.filterIcons}>
      {filters.map((filter, index) => {
        let icon = iconMap[filter] || "";
        let label = filter;

        // Якщо це трансмісія, то відображаємо відповідну іконку та підпис
        if (filter === "transmission") {
          const transmissionType = filters.transmission; // отримуємо тип трансмісії
          if (transmissionType) {
            icon = transmissionMap[transmissionType] || "";
            label = `Transmission: ${transmissionType}`; // додаємо підпис
          }
        }

        // Якщо це двигун, то відображаємо відповідну іконку та підпис
        if (filter === "engine") {
          const engineType = filters.engine; // отримуємо тип двигуна
          if (engineType) {
            icon = engineMap[engineType] || "";
            label = `Engine: ${engineType}`; // додаємо підпис
          }
        }

        return (
          <li
            key={index}
            className={`${styles.iconItem} ${
              filter === "gas" ? styles.gasIcon : ""
            } ${filter === "microwave" ? styles.microwaveItem : ""} ${
              filter === "water" ? styles.waterItem : ""
            }`}
          >
            <svg
              className={`${styles.icon} ${
                filter === "gas" ? styles.gasIcon : ""
              } ${filter === "microwave" ? styles.microwaveIcon : ""} ${
                filter === "water" ? styles.waterIcon : ""
              }`}
            >
              <use href={`${sprite}#${icon}`} />
            </svg>
            <span className={styles.iconLabel}>{label}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterIcons;
