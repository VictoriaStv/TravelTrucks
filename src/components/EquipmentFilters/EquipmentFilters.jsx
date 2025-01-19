import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import styles from "./EquipmentFilters.module.css";

const EquipmentFilters = ({ handleEquipmentChange }) => {
  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (event, key) => {
    const newSelectedItems = { ...selectedItems, [key]: event.target.checked };
    setSelectedItems(newSelectedItems);
    handleEquipmentChange(event);
  };

  // Список обладнання з умовою для додаткового класу
  const equipmentList = {
    AC: "AC",
    bathroom: "Bathroom",
    kitchen: "Kitchen",
    TV: "TV",
    radio: "Radio",
    refrigerator: "Refrigerator",
    microwave: "Microwave", // Іконка для мікрохвильовки
    gas: "Gas", // Іконка для газу
    water: "Water", // Іконка для води
  };

  const additionalClassItems = ["microwave", "gas", "water"]; // Ключі для додаткового класу

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterEquipment}>
        <div className={styles.filterTitle}>Equipment</div>
        <ul>
          {Object.entries(equipmentList).map(([key, label]) => (
            <li
              key={key}
              className={`${styles.filterItem} ${
                selectedItems[key] ? styles.selected : ""
              }`}
            >
              <label className={styles.label}>
                <input
                  type="checkbox"
                  value={key}
                  onChange={(e) => handleCheckboxChange(e, key)}
                  className={styles.checkbox}
                />
                <svg
                  className={`${styles.icon} ${
                    additionalClassItems.includes(key.toLowerCase())
                      ? styles.additionalClass
                      : ""
                  }`}
                >
                  <use href={`${sprite}#icon-${key.toLowerCase()}`} />
                </svg>
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EquipmentFilters;
