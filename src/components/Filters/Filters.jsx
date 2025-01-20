import { useEffect, useState } from "react";
import EquipmentFilters from "../EquipmentFilters/EquipmentFilters"; // Імпортуємо новий компонент
import styles from "./Filters.module.css";
import sprite from "../../assets/sprite.svg";

const Filters = ({ onFilterChange, campers }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [pendingFilters, setPendingFilters] = useState({
    location: "",
    equipment: [],
    vehicleType: [],
  });

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
    setPendingFilters((prevFilters) => ({
      ...prevFilters,
      location: location === "all" ? "" : location,
    }));
  };

  // Обробка змін у виборі обладнання та типу транспортного засобу
  const handleEquipmentChange = (event) => {
    const { value, checked } = event.target;
    const updatedEquipment = checked
      ? [...pendingFilters.equipment, value]
      : pendingFilters.equipment.filter((item) => item !== value);

    setPendingFilters((prevFilters) => ({
      ...prevFilters,
      equipment: updatedEquipment,
    }));
  };

  const handleVehicleTypeChange = (event) => {
    const { value, checked } = event.target;
    const updatedVehicleType = checked
      ? [...pendingFilters.vehicleType, value]
      : pendingFilters.vehicleType.filter((item) => item !== value);

    setPendingFilters((prevFilters) => ({
      ...prevFilters,
      vehicleType: updatedVehicleType,
    }));
  };

  // Обробка натискання кнопки "Пошук"
  const handleSearch = () => {
    onFilterChange(pendingFilters); // Передаємо фільтри в Catalog
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

      {/* Фільтри для обладнання та типу транспортного засобу */}
      <EquipmentFilters
        handleEquipmentChange={handleEquipmentChange}
        handleVehicleTypeChange={handleVehicleTypeChange}
      />

      {/* Кнопка Пошук */}
      <button
        className={styles.searchButton}
        onClick={handleSearch}
        disabled={
          !locations.length &&
          !pendingFilters.equipment.length &&
          !pendingFilters.vehicleType.length
        }
      >
        Search
      </button>
    </div>
  );
};

export default Filters;
