import sprite from "../../assets/sprite.svg";
import styles from "./FilterIcons.module.css";

const FilterIcons = ({ filters }) => {
 
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
  };


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


        if (filter === "transmission") {
          const transmissionType = filters.transmission; 
          if (transmissionType) {
            icon = transmissionMap[transmissionType] || "";
            label = `Transmission: ${transmissionType}`; 
          }
        }

      
        if (filter === "engine") {
          const engineType = filters.engine; 
          if (engineType) {
            icon = engineMap[engineType] || "";
            label = `Engine: ${engineType}`; 
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
