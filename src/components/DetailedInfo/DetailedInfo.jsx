import { useDispatch, useSelector } from "react-redux";
import styles from "./DetailedInfo.module.css";
import { selectTrailer } from "../../store/selectorsTrailer.js";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import TrailerFeatures from "../TrailerFeatures/TrailerFeatures";
import TrailerReviews from "../TrailerReviews/TrailerReviews.jsx";
import Modal from "../../components/Modal/Modal";
import { closeModal, openModal } from "../../store/modal.jsx";

const activeLink = ({ isActive }) => {
  return clsx(styles.detailsLink, isActive && styles.active);
};

const DetailedInfo = () => {
  const trailer = useSelector(selectTrailer);
  const dispatch = useDispatch();
  const { isModalOpen, photoUrl } = useSelector((state) => state.modal || {});

  const handleOpenModal = (url) => {
    dispatch(openModal(url));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  // Створюємо новий масив з 4 фото, де перше фото повторюється в кінці
  const galleryImages = trailer?.gallery?.length
    ? [
        ...trailer.gallery.slice(0, 3), // перші три фото
        trailer.gallery[0], // повторення першого фото в кінці
      ]
    : [];

  return (
    <>
      <h2 className={styles.nameTitle}>{trailer?.name}</h2>
      <div className={styles.ratingWrapper}>
        <svg className={styles.icon} width="16" height="16">
          <use href={`${sprite}#icon-rating`} />
        </svg>
        <p className={styles.reviews}>
          {trailer?.rating} ({trailer?.reviews ? trailer.reviews.length : 0}{" "}
          Reviews)
        </p>
        <svg className={styles.iconMap} width="20" height="20">
          <use href={`${sprite}#icon-map`} />
        </svg>
        {trailer?.location}
      </div>
      <p className={styles.nameTitle}>
        {isNaN(trailer?.price)
          ? "Price not available"
          : `€ ${Number(trailer?.price).toFixed(2)}`}
      </p>

      {galleryImages.length > 0 ? (
        <ul className={styles.gallery}>
          {galleryImages.map((item, index) => (
            <li key={index}>
              <img
                className={styles.photo}
                src={item.thumb}
                alt={`Gallery image ${index + 1}`}
                onClick={() => handleOpenModal(item.original)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No images available.</p>
      )}

      <p className={styles.itemDescription}>{trailer?.description}</p>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        photoUrl={photoUrl}
      />

      <ul className={styles.details}>
        <li className={styles.detailsItem}>
          <NavLink className={activeLink} to="features">
            Features
          </NavLink>
        </li>
        <li className={styles.detailsItem}>
          <NavLink className={activeLink} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="" element={<Navigate to="features" />} />
        <Route path="features" element={<TrailerFeatures />} />
        <Route path="reviews" element={<TrailerReviews />} />
      </Routes>
    </>
  );
};

export default DetailedInfo;
