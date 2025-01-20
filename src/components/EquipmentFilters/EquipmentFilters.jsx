import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import styles from "./EquipmentFilters.module.css";

const EquipmentFilters = ({
  handleEquipmentChange,
  handleVehicleTypeChange,
}) => {
  const [selectedEquipment, setSelectedEquipment] = useState({});
  const [selectedVehicleType, setSelectedVehicleType] = useState({});

  // Оновлена функція handleCheckboxChange з перевіркою на callback
  const handleCheckboxChange = (
    event,
    key,
    setState,
    currentState,
    callback
  ) => {
    const newState = { ...currentState, [key]: event.target.checked };
    setState(newState);

    // Перевірка, чи callback є функцією перед викликом
    if (typeof callback === "function") {
      callback(event);
    } else {
      console.warn("Callback is not a function or is undefined");
    }
  };

  // Список обладнання
  const equipmentList = {
    AC: "AC",
    kitchen: "Kitchen",
    TV: "TV",
    bathroom: "Bathroom",
  };

  const additionalClassItems = ["microwave", "gas", "water"]; // Ключі для додаткового класу

  // Список типів транспортних засобів (змінив ключі на ті, що відповідають API)
  const vehicleTypeList = {
    panelTruck: "Van",
    fullyIntegrated: "Fully Integrated",
    alcove: "Alcove",
  };

  return (
    <div className={styles.filtersContainer}>
      <div>
        {/* Фільтри обладнання */}
        <div className={styles.filterTitle}>Filters</div>
        <div className={styles.vehicleTitle}>Vehicle equipment</div>
        <ul className={styles.filterEquipment}>
          {Object.entries(equipmentList).map(([key, label]) => (
            <li
              key={key}
              className={`${styles.filterItem} ${
                selectedEquipment[key] ? styles.selected : ""
              }`}
            >
              <label className={styles.label}>
                <input
                  type="checkbox"
                  value={key}
                  onChange={(e) =>
                    handleCheckboxChange(
                      e,
                      key,
                      setSelectedEquipment,
                      selectedEquipment,
                      handleEquipmentChange
                    )
                  }
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

        {/* Фільтри типів транспортних засобів */}
        <div className={styles.vehicleTitle}>Vehicle type</div>
        <ul className={styles.filterEquipment}>
          {Object.entries(vehicleTypeList).map(([key, label]) => (
            <li
              key={key}
              className={`${styles.filterItem} ${
                selectedVehicleType[key] ? styles.selected : ""
              }`}
            >
              <label className={styles.label}>
                <input
                  type="checkbox"
                  value={key}
                  onChange={(e) =>
                    handleCheckboxChange(
                      e,
                      key,
                      setSelectedVehicleType,
                      selectedVehicleType,
                      handleVehicleTypeChange
                    )
                  }
                  className={styles.checkbox}
                />
                <svg className={styles.icon}>
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
