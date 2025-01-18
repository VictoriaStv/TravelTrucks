import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>
        Орендуй кемпер та відправляйся в подорож!
      </h1>
      <button className={styles.button}>Переглянути каталог</button>
    </div>
  );
};

export default Banner;
