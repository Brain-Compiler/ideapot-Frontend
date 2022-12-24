import { Link, useParams } from "react-router-dom";
import styles from "./Category.module.scss";

const categories = [
  { name: "로고 · 마스코트", id: 100 },
  { name: "배너", id: 101 },
  { name: "발표 자료", id: 102 },
  { name: "웹 · 모바일 디자인", id: 103 },
  { name: "아이콘 · 일러스트", id: 104 },
  { name: "캐릭터 · 이모티콘", id: 105 },
  { name: "의류 디자인", id: 106 },
  { name: "인테리어 · 건축", id: 107 },
  { name: "XR · 게임", id: 108 },
  { name: "메타버스 · NFT", id: 109 },
  { name: "현수막 · 간판", id: 110 },
  { name: "명함 · 홍보물", id: 111 },
  { name: "포트폴리오", id: 112 },
  { name: "기타", id: 113 },
];

const Category = () => {
  const params = useParams();
  const id = params.id * 1;

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div className={styles.box1}></div>
        <div className={styles.box2}>디자인</div>
        <div className={styles.box3}></div>
      </div>
      <div className={styles.main}>
        {categories.map((category, index) => {
          return (
            <Link
              to={"/ProductList/" + category.id}
              className={
                id === category.id ? styles.category_selected : styles.category
              }
              key={index}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
