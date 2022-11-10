import styles from "./MainPage.module.scss";
import Swiper from "../../components/Main/Swiper/Swiper";
import img_main_1 from "../../assets/img_main_1.png";
import { useState } from "react";

const MainPage = () => {
  const [users, setUsers] = useState("1,003,123");
  const [ideas, setIdeas] = useState("303,327");

  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.swiper}>
          <Swiper />
        </div>
        <div className={styles.tipBox}>
          <div className={styles.tip}>
            <p>
              <b>IdeaPot</b>은 {users}명의 유저와 <br />
              &nbsp; &nbsp; &nbsp; &nbsp; {ideas}개의 아이디어와 함께합니다.
            </p>
            <img alt="img_main_1" src={img_main_1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
