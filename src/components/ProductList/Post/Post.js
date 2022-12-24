import styles from "./Post.module.scss";
import { Link } from "react-router-dom";
import defaultImg from "../../../assets/default_image.png";

const Post = ({ files, id, title, price, date, name }) => {
  return (
    <Link to={"/ProductList/Post/" + id} className={styles.card}>
      <div className={styles.imgArea}>
        <img
          alt="img"
          src={
            files[0] === undefined
              ? defaultImg
              : "http://localhost:8080/image/idea/" + files[0].name
          }
        />
      </div>
      <div className={styles.main}>
        <p className={styles.title}>{title}</p>
        <div className={styles.box}>
          <p className={styles.price}>{price}</p>
          <div className={styles.footer}>
            <span>{date}</span>
            <span>{name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
