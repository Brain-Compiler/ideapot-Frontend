import styles from "./PostViewer.module.scss";
import img from "../../assets/background.jpg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const PostViewer = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8080/api/idea/" + id)
        .then((res) => setData(res.data));
    })();
  }, [id]);

  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.img}>
          <img alt="img" src={img} />
        </div>
        <div className={styles.info}>
          <div className={styles.box1}>
            <div className={styles.title}>
              <h1>{data.title}</h1>
            </div>
            <div className={styles.line1}></div>
            <div className={styles.content}>
              <p>{data.description}</p>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.priceBox}>
              <div className={styles.line2}></div>
              <span className={styles.price}>{data.price}</span>
            </div>
            <div className={styles.sideInfoBox}>
              <span>{data.createdAt}</span>
              <span>{data.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostViewer;
