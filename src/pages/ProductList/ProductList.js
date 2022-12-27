import { useEffect, useState } from "react";
import styles from "./ProductList.module.scss";
import Category from "../../components/ProductList/Category/Category";
import Post from "../../components/ProductList/Post/Post";
import write from "../../assets/write_icon.png";
import { Link, useParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (id === undefined) {
      (async () => {
        await axios.get("http://localhost:8080/api/idea").then((res) => {
          setData(res.data);
        });
      })();
    } else {
      (async () => {
        await axios
          .get("http://localhost:8080/api/idea/category/" + id)
          .then((res) => {
            setData(res.data);
          });
      })();
    }
  }, [id]);

  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.category}>
          <Category />
        </div>
        <div className={styles.main}>
          <div className={styles.head}>
            <div className={styles.area}>
              <div className={styles.subCategory}>
                카테고리 <FaAngleDown />
              </div>
              <div className={styles.price}>
                가격 <FaAngleDown />
              </div>
            </div>
            <Link to="/post" className={styles.writeBtn}>
              <img src={write} alt="writeIcon" />
              <span>등록</span>
            </Link>
          </div>
          <div className={styles.posts}>
            {data !== "" ? (
              data.map((list, index) => {
                return (
                  <Post
                    files={list.files}
                    id={list.id}
                    title={list.title}
                    price={list.price}
                    date={list.createdAt}
                    name={list.user.name}
                    key={index}
                  />
                );
              })
            ) : (
              <p>목록이 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
