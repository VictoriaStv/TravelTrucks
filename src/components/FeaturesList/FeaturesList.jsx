import sprite from "../../assets/sprite.svg";
import styles from "./FeaturesList.module.css";

const FeaturesList = ({ trailer, addClass = "" }) => {

  const iconMap = {
    AC: "icon-ac",
    bathroom: "icon-bathroom",
    kitchen: "icon-kitchen",
    TV: "icon-tv",
    radio: "icon-radio",
    refrigerator: "icon-refrigerator",
    microwave: "icon-microwave",
    gas: "icon-gas",
    water: "icon-water",
    transmission: "icon-automatic", 
  };

 
  const specialClasses = {
    gas: styles.gasIcon,
    microwave: styles.microwaveIcon,
    water: styles.waterIcon,
  };

  return (
    <ul className={`${styles.features}`}>
      {Object.keys(iconMap).map((key) => {
      
        return (
          trailer[key] && (
            <li
              className={`${styles.item} ${styles[addClass]} ${
                specialClasses[key] ? specialClasses[key] : ""
              }`}
              key={key}
            >
              <svg style={{ width: "20px", height: "20px" }}>
                <use href={`${sprite}#${iconMap[key]}`} />
              </svg>
              <span className={styles.name}>{key}</span>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default FeaturesList;
