// CamperList.js
import { useState } from "react";
import styles from "./CamperList.module.css";
import CamperCard from "../CamperCard/CamperCard"; // Імпортуємо CamperCard
import Loader from "../Loader/Loader"; // Імпортуємо Loader

const CamperList = ({ campers }) => {
  const [visibleCount, setVisibleCount] = useState(4); // Початковий стан - 4 картки
  const [loading, setLoading] = useState(false); // Стан для завантаження

  // Функція для завантаження додаткових карток
  const loadMore = () => {
    setLoading(true); // Показуємо індикатор завантаження
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 4); // Збільшуємо кількість видимих карток
      setLoading(false); // Приховуємо індикатор завантаження
    }, 1000); // Імітуємо затримку для демонстрації завантаження
  };

  return (
    <div>
      <div className={styles.camperList}>
        {/* Рендеримо картки кемперів */}
        {campers.slice(0, visibleCount).map((camper) => (
          <CamperCard key={camper.name} camper={camper} />
        ))}
      </div>

      {/* Показуємо Loader, якщо завантажуються картки */}
      {loading && <Loader />}

      {/* Кнопка для завантаження додаткових карток */}
      {visibleCount < campers.length && !loading && (
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CamperList;
