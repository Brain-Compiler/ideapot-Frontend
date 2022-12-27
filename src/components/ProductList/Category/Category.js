import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Category.module.scss";

const Category = () => {
  const params = useParams();
  const id = params.id * 1;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8080/api/idea/category")
        .then((res) => setCategories(res.data));
    })();
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div className={styles.box1}></div>
        <div className={styles.box2}>카테고리</div>
        <div className={styles.box3}></div>
      </div>
      <div className={styles.main}>
        {categories.map((category, index) => {
          return (
            <Link
              to={"/ProductList/" + Object.keys(category)}
              className={
                id === parseInt(Object.keys(category))
                  ? styles.category_selected
                  : styles.category
              }
              key={index}
            >
              {category[Object.keys(category)]}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
