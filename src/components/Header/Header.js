import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logo_icon.png";
import search from "../../assets/search_icon.png"
import write from "../../assets/write_icon.png"
import profile from "../../assets/userIcon.png"

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const onClickHanddler = () => {
    console.log("클릭됨");
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <Link to="/">
          <img alt="logo" src={logo} /> <span><b>IdeaPot</b></span>
        </Link>
      </div>
      <div className={styles.search}>
        <input className={styles.searchBar} placeholder="키워드를 통해 검색해보세요!" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <label htmlFor="search"><img src={search} alt="search" /></label>
        <input type="button" className={styles.searchBtn} id="search" onClick={onClickHanddler} />
      </div>
      <div className={styles.sub}>
        <div className={styles.write}>
          <Link to="/">
            <img src={write} alt="write" />등록
          </Link>
        </div>
        <div className={styles.profile}>
          <Link to="/">
            <img src={profile} alt="profile" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;