import { useState } from "react";
import styles from './search_id.module.scss';
import document from '../../assets/document.png'
import plane from '../../assets/paper_plane_white.png';
import checkMark from '../../assets/check_mark_white.png';
import { Link } from "react-router-dom";

const SearchId = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [findedId, setFindedId] = useState("");

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1><img className={styles.documentImage} alt='document' src={document} />IdeaPot</h1>
        </div>
        { findedId === "" ? (
          <div className={styles.inputBox}>
            <div className={styles.nameInput}>
              <p>이름</p>
              <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className={styles.emailInput}>
              <p>이메일</p>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} /> <label htmlFor="sendEmail"><img className={styles.sendEmailImage} alt="plane" src={plane} /></label>
              <input type='button' id='sendEmail' className={styles.checkButton} />
            </div>
            <div className={styles.codeInput}>
              <p>인증코드</p>
              <input type="text" value={code} onChange={e => setCode(e.target.value)} /> <label htmlFor="codeCheck"><img className={styles.checkCodeImage} alt="checkMark" src={checkMark} /></label>
              <input type='button' id='codeCheck' className={styles.checkButton} />
            </div>
          </div>
        ) : (
          <div className={styles.box}>
            <p><b>{name}</b>님의 아이디는</p>
            <div className={styles.idBox}>{findedId}</div>
          </div>
        )}
        { findedId === "" ? (
          <div className={styles.bottom}>
            <input type="button" value="찾기" />
            <Link to='/login'><p>로그인</p></Link>
            <Link to='/register'><p>회원가입</p></Link>
            <Link to='/resetPw'><p>비밀번호 찾기</p></Link>
          </div>
        ) : (
          <div className={styles.bottom}>
            <input type="button" value="로그인 하러가기" onClick={() => window.location.replace("/login")} /> <br />
            <input type="button" value="비밀번호 찾기" onClick={() => window.location.replace("/resetPw")} />
          </div>
        )}
      </div>
      <div className={styles.Search_ID}>
        <p>Search ID</p>
      </div>
    </div>
  )
}

export default SearchId