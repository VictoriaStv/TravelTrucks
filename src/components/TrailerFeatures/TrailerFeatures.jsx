import { useSelector } from "react-redux";
import FeaturesList from "../FeaturesList/FeaturesList";
import css from "./TrailerFeatures.module.css";
import { selectTrailer } from "../../store/selectorsTrailer";
import ClientForm from "../ClientForm/ClientForm";

const TrailerFeatures = () => {
  const trailer = useSelector(selectTrailer);

  return (
    <div className={css.features}>
      <section className={css.featuresSection}>
        <FeaturesList trailer={trailer} addClass="update" />
        <h3 className={css.title}>Vehicle Details</h3>

        <hr />
        <ul className={css.details}>
          <li className={css.detailsItem}>
            Form<span className={css.type}>{trailer.form}</span>
          </li>
          <li className={css.detailsItem}>
            Length <span>{trailer.length}</span>
          </li>
          <li className={css.detailsItem}>
            Width <span>{trailer.width}</span>
          </li>
          <li className={css.detailsItem}>
            Height <span>{trailer.height}</span>
          </li>
          <li className={css.detailsItem}>
            Tank <span>{trailer.tank}</span>
          </li>
          <li className={css.detailsItem}>
            Consumption <span>{trailer.consumption}</span>
          </li>
        </ul>
      </section>
      <ClientForm />
    </div>
  );
};

export default TrailerFeatures;
