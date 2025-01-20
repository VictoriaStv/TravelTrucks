import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTrailersDetails } from "../../store/operations";
import css from "./CamperDetails.module.css";
import DetailedInfo from "../../components/DetailedInfo/DetailedInfo";
import { Toaster } from "react-hot-toast";

const CamperDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTrailersDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className={css.detailedContainer}>
        <DetailedInfo />
      </section>
    </>
  );
};

export default CamperDetails;
