import styles from "./MainPage.module.scss";
import Swiper from "../../components/Main/Swiper/Swiper";
import img_main_1 from "../../assets/img_main_1.png";
import idea_bulb from "../../assets/idea_bulb.png";
import Competition from "../../assets/Competition.png";
import Enterprise from "../../assets/Enterprise.png";
import Service_center from "../../assets/Service_center.png";
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
        <div className={styles.serviceBox}>
          <div className={styles.sertitle}>
            <h1><a>IdeaPot</a>의<br/>
            &nbsp; &nbsp; 서비스를 만나보세요!
            </h1>
          </div>
          <div className={styles.serConFun}>
            <div className={styles.sertop}>
              <div className={styles.seridea}>
                <img alt="idea_bulb" src={idea_bulb}/>
                <div className={styles.serideatext}>
                  <h1>아이디어</h1><br/>
                  <h3>다양한 카테고리의<br/>아이디어들을 만나보세요!</h3>
                </div>
              </div>
              <div className={styles.sercom}>
                <img alt="Competition" src={Competition}/>
                <div className={styles.sercomtext}>
                  <h1>대회</h1><br/>
                  <h3>다양한 대회를 알아보세요!</h3>
                </div>
              </div>
            </div>
            <div className={styles.serbot}>
              <div className={styles.serent}>
                <img alt="Enterprise" src={Enterprise}/>
                <div className={styles.serenttext}>
                  <h1>엔터프라이즈</h1><br/>
                  <h3>다양한 카테고리의<br/>아이디어를 만나보세요!</h3>
                </div>
              </div>
              <div className={styles.serSercen}>
                <img alt="Service_center" src={Service_center}/>
                <div className={styles.serSercentext}>
                  <h1>고객센터</h1><br/>
                  <h3>고객샌터에 각종 문의와<br/>신고 & 제보를 해보세요!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
