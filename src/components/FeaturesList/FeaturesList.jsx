import icons from "../../assets/sprite.svg";
import css from "./FeaturesList.module.css";

const FeaturesList = ({ trailer, addClass = "" }) => {
  const featureIcons = [
    { name: "AC", iconPath: "ac" },
    { name: "bathroom", iconPath: "water" },
    { name: "kitchen", iconPath: "cup-hot" },
    { name: "TV", iconPath: "tv" },
    { name: "radio", iconPath: "radio" },
    { name: "refrigerator", iconPath: "fridge" },
    { name: "microwave", iconPath: "wave" },
    { name: "gas", iconPath: "fuel-pump" },
    { name: "water", iconPath: "water" },
    { name: "transmission", iconPath: "automatic" },
  ];

  return (
    <ul className={`${css.features} `}>
      {featureIcons.map(({ name, iconPath }) => {
        return (
          trailer[name] && (
            <li className={`${css.item} ${css[addClass]}`} key={name}>
              <svg style={{ width: "20px", height: "20px" }}>
                <use href={`${icons}#${iconPath}`} />
              </svg>
              <span className={css.name}>{name}</span>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default FeaturesList;
