import { useState, useEffect } from "react";
import { fetchCampersFromApi } from "../../services/api";
import Filters from "../../components/Filters/Filters";
import CamperList from "../../components/CamperList/CamperList";  
import styles from "./Catalog.module.css"; 

const Catalog = () => {
  const [campers, setCampers] = useState([]); 
  const [filteredCampers, setFilteredCampers] = useState([]); 
  const [filters, setFilters] = useState({ location: "", equipment: [] }); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCampers = async () => {
      setLoading(true); 
      const data = await fetchCampersFromApi();
      setCampers(data);
      setFilteredCampers(data); 
      setLoading(false); 
    };
    fetchCampers();
  }, []);


  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  
  useEffect(() => {
    const applyFilters = () => {
      let filtered = campers;

     
      if (filters.location) {
        filtered = filtered.filter(
          (camper) => camper.location === filters.location
        );
      }

      
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
    <div className={styles.container}>

      <div className={styles.filters}>
        <Filters campers={campers} onFilterChange={handleFilterChange} />
      </div>


      <div className={styles.camperList}>
        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <CamperList campers={filteredCampers} />
        )}
      </div>
    </div>
  );
};

export default Catalog;
