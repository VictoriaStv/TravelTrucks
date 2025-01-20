import { useSelector } from "react-redux";
import ClientForm from "../ClientForm/ClientForm";
import css from "./TrailerReviews.module.css";
import { selectTrailer } from "../../store/selectorsTrailer";
import sprite from "../../assets/sprite.svg";
import { nanoid } from "nanoid";

const TrailerReviews = () => {
  const trailer = useSelector(selectTrailer);
  const totalStars = 5;
  return (
    <div className={css.review}>
      <ul className={css.list}>
        {trailer.reviews.length === 0 ? (
          <p>Sorry, there are no reviews!</p>
        ) : (
          trailer.reviews.map((item) => (
            <li key={nanoid()}>
              <div className={css.reviewerWrapper}>
                <div className={css.reviewerName}>
                  {item.reviewer_name.charAt(0)}
                </div>
                <div>
                  <h3>{item.reviewer_name}</h3>
                  {[...Array(totalStars)].map((_, starIndex) => (
                    <svg
                      width="16"
                      height="16"
                      fill={
                        starIndex < item.reviewer_rating ? "#ffc531" : "#f2f4f7"
                      }
                      key={nanoid()}
                    >
                      <use href={`${sprite}#icon-star`} />
                    </svg>
                  ))}
                </div>
              </div>
              <p className={css.comment}>{item.comment}</p>
            </li>
          ))
        )}
      </ul>
      <ClientForm />
    </div>
  );
};

export default TrailerReviews;
