import { useState } from "react";
import styles from "./CamperList.module.css";
import CamperCard from "../CamperCard/CamperCard";
import Loader from "../Loader/Loader";

const CamperList = ({ campers }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 4);
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      <div className={styles.camperList}>
        {campers.slice(0, visibleCount).map((camper, index) => (
          <div
            key={camper.name}
            className={`${styles.camperCardWrapper} ${styles.fadeIn}`}
            style={{ animationDelay: `${index * 0.01}s` }}
          >
            <CamperCard camper={camper} />
          </div>
        ))}
      </div>

      {loading && <Loader />}

      {visibleCount < campers.length && !loading && (
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CamperList;
