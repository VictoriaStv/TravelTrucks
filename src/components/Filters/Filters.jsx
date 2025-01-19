// Filters.js
import { useEffect, useState } from "react";
import EquipmentFilters from "../EquipmentFilters/EquipmentFilters"; // Імпортуємо новий компонент
import styles from "./Filters.module.css";
import sprite from "../../assets/sprite.svg";

const Filters = ({ onFilterChange, campers }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  // Отримуємо унікальні локації з масиву campers
  const getUniqueLocations = (campers) => {
    const locations = campers.map((camper) => camper.location);
    return [...new Set(locations)];
  };

  useEffect(() => {
    if (campers && campers.length > 0) {
      setLocations(getUniqueLocations(campers));
    }
  }, [campers]);

  // Обробка змін локації
  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    onFilterChange({ location: location === "all" ? "" : location });
  };

  // Обробка змін у виборі обладнання
  const handleEquipmentChange = (event) => {
    const { value, checked } = event.target;
    const updatedEquipment = checked
      ? [...selectedEquipment, value]
      : selectedEquipment.filter((item) => item !== value);

    setSelectedEquipment(updatedEquipment);
    onFilterChange({ equipment: updatedEquipment });
  };

  // Розділення локації на місто та країну
  const splitLocation = (location) => {
    const [country, city] = location.split(", ");
    return { city, country };
  };

  return (
    <div className={styles.filtersContainer}>
      {/* Фільтр за локацією */}
      <div className={styles.locationLabel}>
        <svg className={styles.icon}>
          <use href={`${sprite}#icon-map`} />
        </svg>
        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          disabled={!locations.length}
        >
          <option value="" disabled>
            City
          </option>
          {locations.map((location, index) => {
            const { city, country } = splitLocation(location);
            return (
              <option key={index} value={location}>
                {city}, {country}
              </option>
            );
          })}
          <option value="all">All Cities</option>
        </select>
      </div>

      {/* Фільтри для обладнання */}
      <EquipmentFilters handleEquipmentChange={handleEquipmentChange} />
    </div>
  );
};

export default Filters;
