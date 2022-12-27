import styles from "./Nav.module.scss";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <Link to="/ProductList" className={styles.categoryBox}>
          <FaBars /> <p>카테고리</p>
        </Link>
        <div className={styles.etc}>
          <Link>엔터프라이즈</Link>
          <Link>대회</Link>
          <Link>고객센터</Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Nav;
