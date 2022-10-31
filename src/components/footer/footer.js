import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.box}>
      <div className={styles.link}>
        <div className={styles.menu}>
          <Link to="/">회사소개</Link> <p>|</p>
          <Link to="/">이용약관</Link> <p>|</p>
          <Link to="/">개인정보처리방침</Link> <p>|</p>
          <Link to="/">아이디어 보호방침</Link> <p>|</p>
          <Link to="/">지식재산권 보호센터</Link> <p>|</p>
          <Link to="/">배너/광고 문의</Link>
        </div>
        <div className={styles.partner}>
          <Link to="/">비즈니스 파트너 <FaAngleRight /></Link>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.first}>
          <h2>㈜브레인 컴파일러</h2> <br />
          <p>대표: 김윤현 <span>|</span> 경상북도 의성군 봉양면 봉호로 14 코딩관 3층 <span>|</span> 사업자 등록번호: 000 - 11 - 22222</p>
          <p>통신판매업신고: 2022 - 경북의성 - 0000 <span>|</span> E-mail: kyhofficial05@gmail.com</p>
        </div>
        <div className={styles.second}>
          <p>
            ㈜브레인 컴파일러에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어 있습니다. <br />
            개별 판매자가 판매하는 상품에 대해 ㈜브레인 컴파일러는 통신중계 판매업자로서 통신판매의 당사자가 아니며 상품의 주문 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </p> <br />
          <p>Copyrightⓒ 2022 BrainCompiler Inc. Allrights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;