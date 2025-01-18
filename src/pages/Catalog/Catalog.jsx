import { useState, useEffect } from "react";
import { fetchCampersFromApi } from "../../services/api";
import Filters from "../../components/Filters/Filters";
import CamperList from "../../components/CamperList/CamperList"; // Імпортуємо CamperList

const Catalog = () => {
  const [campers, setCampers] = useState([]); // Стан для зберігання всіх кемперів
  const [filteredCampers, setFilteredCampers] = useState([]); // Стан для фільтрованих кемперів
  const [filters, setFilters] = useState({ location: "", equipment: [] }); // Фільтри

  // Завантажуємо дані кемперів з API
  useEffect(() => {
    const fetchCampers = async () => {
      const data = await fetchCampersFromApi();
      setCampers(data);
      setFilteredCampers(data); // Ініціалізуємо відфільтровані кемпери
    };
    fetchCampers();
  }, []);

  // Оновлення фільтрів
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  // Фільтруємо кемпери
  useEffect(() => {
    const applyFilters = () => {
      let filtered = campers;

      // Фільтруємо за локацією
      if (filters.location) {
        filtered = filtered.filter(
          (camper) => camper.location === filters.location
        );
      }

      // Фільтруємо за обладнанням
      if (filters.equipment.length > 0) {
        filtered = filtered.filter((camper) =>
          filters.equipment.every((equipment) => camper[equipment])
        );
      }

      setFilteredCampers(filtered);
    };

    applyFilters();
  }, [filters, campers]);

  return (
    <div>
      {/* Компонент фільтрів */}
      <Filters campers={campers} onFilterChange={handleFilterChange} />

      {/* Компонент для відображення кемперів */}
      <CamperList campers={filteredCampers} />
    </div>
  );
};

export default Catalog;
