import styles from "./ProductList.module.scss";
import Category from "../../components/ProductList/Category/Category";

const ProductList = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.category}>
          <Category />
        </div>
        <div className={styles.main}></div>
      </div>
    </div>
  );
};

export default ProductList;
