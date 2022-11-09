import styles from "./MainPage.module.scss";
import Swiper from "../../components/Main/Swiper/Swiper";

const MainPage = () => {
  return (
    <div className={styles.box}>
      <div className={styles.swiper}>
        <Swiper />
      </div>
    </div>
  );
};

export default MainPage;
