import styles from "./Category.module.scss";

const options = [
  { name: "로고 · 마스코트", category: 100 },
  { name: "배너", category: 101 },
  { name: "발표 자료", category: 102 },
  { name: "웹 · 모바일 디자인", category: 103 },
  { name: "아이콘 · 일러스트", category: 104 },
  { name: "캐릭터 · 이모티콘", category: 105 },
  { name: "의류 디자인", category: 106 },
  { name: "인테리어 · 건축", category: 107 },
  { name: "XR · 게임", category: 108 },
  { name: "메타버스 · NFT", category: 109 },
  { name: "현수막 · 간판", category: 110 },
  { name: "명함 · 홍보물", category: 111 },
  { name: "포트폴리오", category: 112 },
  { name: "기타", category: 113 },
];

const Category = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div className={styles.box1}></div>
        <div className={styles.box2}>디자인</div>
        <div className={styles.box3}></div>
      </div>
      <div className={styles.main}>
        {options.map((option, index) => {
          return (
            <p className={styles.option} key={index}>
              {option.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
