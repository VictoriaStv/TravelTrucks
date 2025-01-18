import { useEffect, useState } from "react";

const Filters = ({ onFilterChange, campers }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [locations, setLocations] = useState([]);

  // Функція для отримання унікальних локацій
  const getUniqueLocations = (campers) => {
    const locations = campers.map((camper) => camper.location);
    return [...new Set(locations)];
  };

  useEffect(() => {
    // Отримуємо унікальні локації при завантаженні даних кемперів
    if (campers && campers.length > 0) {
      setLocations(getUniqueLocations(campers));
    }
  }, [campers]);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    onFilterChange({ location: event.target.value });
  };

  const handleEquipmentChange = (event) => {
    const { value, checked } = event.target;
    setSelectedEquipment((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
    onFilterChange({ equipment: selectedEquipment });
  };

  return (
    <div>
      {/* Фільтр за локацією */}
      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="">Select Location</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>

      {/* Фільтр за обладнанням */}
      <div>
        <label>
          <input type="checkbox" value="AC" onChange={handleEquipmentChange} />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            value="Automatic"
            onChange={handleEquipmentChange}
          />
          Automatic
        </label>
        <label>
          <input
            type="checkbox"
            value="Kitchen"
            onChange={handleEquipmentChange}
          />
          Kitchen
        </label>
        <label>
          <input type="checkbox" value="TV" onChange={handleEquipmentChange} />
          TV
        </label>
        <label>
          <input
            type="checkbox"
            value="Bathroom"
            onChange={handleEquipmentChange}
          />
          Bathroom
        </label>
      </div>
    </div>
  );
};

export default Filters;
