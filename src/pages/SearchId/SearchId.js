import { useRef, useState } from "react";
import styles from "./SearchId.module.scss";
import document from "../../assets/document.png"
import plane from "../../assets/paper_plane_white.png";
import checkMark from "../../assets/check_mark_white.png";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchId = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCheckCode, setIsCheckCode] = useState(false);
  const [findedId, setFindedId] = useState("");
  const [page, setPage] = useState(1)
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const codeInput = useRef(null);

  const checkEmail = async () => {
    if (isCheckCode === false) {
      if (name === "") {
        alert("이름을 입력해주세요");
      } else if (email === "") {
        alert("이메일을 입력해주세요");
      } else {
        await axios.post("http://localhost:8080/api/email-authentication/find-id", {
          name: name,
          email: email,
        })
        .then(() => alert("이메일이 전송되었습니다"))
      }
    }
  };

  const checkCode = async () => {
    if (isCheckCode === false) {
      if (code === "") {
        alert("인증코드를 입력해주세요");
      } else {
        await axios.post("http://localhost:8080/api/find-id", {
          name: name,
          email: email,
          code: code,
        })
        .then((res) => {
          if (res.data.error === "인증코드 불일치 또는 만료") {
            setIsCheckCode(false);
            alert('인증코드가 틀렸습니다');
          } else {
            setIsCheckCode(true);
            setFindedId(res.data.id)
            nameInput.current.readOnly = true;
            nameInput.current.style = "background-color: #ABABAB";
            emailInput.current.readOnly = true;
            emailInput.current.style = "background-color: #ABABAB";
            codeInput.current.readOnly = true;
            codeInput.current.style = "background-color: #ABABAB";
            alert("인증되었습니다");
          }
        }) 
      }
    }
  };

  const checkCertification = () => {
    if (name === "") {
      alert("이름을 입력해주세요") 
    } else if (email === "") {
      alert("이메일을 입력해주세요")
    } else if (code === "") {
      alert("인증코드를 입력해주세요")
    } else if (isCheckCode === false) {
      alert("이메일 인증을 해주세요")
    } else {
      setPage(2)
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1><img className={styles.documentImage} alt="document" src={document} />IdeaPot</h1>
        </div>
        { page === 1 ? (
          <div className={styles.inputBox}>
            <div className={styles.nameInput}>
              <p>이름</p>
              <input type="text" ref={nameInput} value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className={styles.emailInput}>
              <p>이메일</p>
              <input type="text" ref={emailInput} value={email} onChange={e => setEmail(e.target.value)} /> <label htmlFor="sendEmail"><img className={styles.sendEmailImage} alt="plane" src={plane} /></label>
              <input type="button" id="sendEmail" className={styles.checkButton} onClick={checkEmail} />
            </div>
            <div className={styles.codeInput}>
              <p>인증코드</p>
              <input type="text" ref={codeInput} value={code} onChange={e => setCode(e.target.value)} /> <label htmlFor="codeCheck"><img className={styles.checkCodeImage} alt="checkMark" src={checkMark} /></label>
              <input type="button" id="codeCheck" className={styles.checkButton} onClick={checkCode} />
            </div>
          </div>
        ) : (
          <div className={styles.box}>
            <p><b>{name}</b>님의 아이디는</p>
            <div className={styles.idBox}>{findedId}</div>
          </div>
        )}
        { page === 1 ? (
          <div className={styles.bottom}>
            <input type="button" value="찾기" onClick={checkCertification} />
            <Link to="/login"><p>로그인</p></Link>
            <Link to="/register"><p>회원가입</p></Link>
            <Link to="/resetPw"><p>비밀번호 찾기</p></Link>
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