import { useDispatch, useSelector } from "react-redux";
import css from "./DetailedInfo.module.css";
import { selectTrailer } from "../../store/selectorsTrailer.js";
import icons from "../../assets/sprite.svg";
import clsx from "clsx";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import TrailerFeatures from "../TrailerFeatures/TrailerFeatures";
import TrailerReviews from "../TrailerReviews/TrailerReviews";
import Modal from "../../components/Modal/Modal";
import { closeModal, openModal } from "../../store/modal.jsx";

const activeLink = ({ isActive }) => {
  return clsx(css.detailsLink, isActive && css.active);
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

  return (
    <>
      <h2 className={css.nameTitle}>{trailer?.name}</h2>
      <div className={css.ratingWrapper}>
        <svg className={css.icon} width="16" height="16">
          <use href={`${icons}#rating`} />
        </svg>
        <p className={css.reviews}>
          {trailer?.rating} ({trailer?.reviews ? trailer.reviews.length : 0}{" "}
          Reviews)
        </p>
        <svg className={css.icon} width="20" height="20">
          <use href={`${icons}#map`} />
        </svg>
        {trailer?.location}
      </div>
      <p className={css.nameTitle}>
        {isNaN(trailer?.price)
          ? "Ціна недоступна"
          : `€ ${Number(trailer?.price).toFixed(2)}`}
      </p>

      {trailer?.gallery?.length > 0 ? (
        <ul className={css.gallery}>
          {trailer.gallery.map((item, index) => (
            <li key={index}>
              <img
                className={css.photo}
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

      <p className={css.itemDescription}>{trailer?.description}</p>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        photoUrl={photoUrl}
      />

      <ul className={css.details}>
        <li className={css.detailsItem}>
          <NavLink className={activeLink} to="features">
            Features
          </NavLink>
        </li>
        <li className={css.detailsItem}>
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
