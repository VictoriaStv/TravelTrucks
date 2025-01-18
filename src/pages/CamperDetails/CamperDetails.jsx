import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperDetails } from "../../store/campersSlice";
import styles from "./CamperDetails.module.css";

const CamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { camper, loading, error } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [id, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.camperDetails}>
      <h1>{camper.name}</h1>
      <div className={styles.gallery}>{/* Галерея зображень кемпера */}</div>
      <p>{camper.description}</p>
      {/* Відгуки і форма бронювання */}
    </div>
  );
};

export default CamperDetails;
