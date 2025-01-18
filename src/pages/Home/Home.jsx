import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <Link to="/catalog" className={styles.button}>
        View Now
      </Link>
    </div>
  );
};

export default Home;
