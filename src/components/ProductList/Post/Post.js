import styles from "./Post.module.scss";
import img from "../../../assets/background.jpg";
import { Link } from "react-router-dom";

const Post = ({ id, title, price, date, name }) => {
  return (
    <Link to={"/ProductList/" + id} className={styles.card}>
      <div className={styles.imgArea}>
        <img alt="img" src={img} />
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
