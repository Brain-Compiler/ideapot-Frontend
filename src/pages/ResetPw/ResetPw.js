import { useRef, useState } from "react";
import styles from "./ResetPw.module.scss";
import document from "../../assets/document.png";
import plane from "../../assets/paper_plane_white.png";
import checkMark from "../../assets/check_mark_white.png";
import { Link } from "react-router-dom";
import axios from "axios";

const ResetPw = () => {
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [isCheckCode, setIsCheckCode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState("");
  const [isFind, setIsFind] = useState(false);
  const idInput = useRef(null)
  const codeInput = useRef(null)

  const checkId = async () => {
    if(isCheckCode === false) {
      if(id === '') {
        alert('아이디를 입력해주세요');
      } else {
        await axios.get(`http://localhost:8080/api/find-password?username=${id}`)
        .then(() => alert('이메일이 전송되었습니다'))
      }
    }
  };

  const checkCode = async () => {
    if(isCheckCode === false) {
      if(code === '') {
        alert('인증코드를 입력해주세요');
      } else {
        await axios.post('http://localhost:8080/api/find-password/check-authcode', {
          username: id,
          code: code,
        })
        .then((res) => {
          if(res.data.error === '없음') {
            setIsCheckCode(true);
            idInput.current.readOnly = true;
            idInput.current.style = "background-color: #ABABAB";
            codeInput.current.readOnly = true;
            codeInput.current.style = "background-color: #ABABAB";
            alert('인증되었습니다');
            console.log(res.data);
          } else {
            setIsCheckCode(false);
            alert('인증코드가 틀렸습니다');
          }
        })
      }
    } else {
      alert('이미 인증되었습니다');
    }
  };

  const checkCertification = () => {
    if(isCheckCode === false) {
      alert('아이디 인증을 해주세요');
    } else {
      idInput.current.readOnly = false;
      idInput.current.style = "background-color: #F6F6F6";
      codeInput.current.readOnly = false;
      codeInput.current.style = "background-color: #F6F6F6";
      setIsFind(true)
    }
  };

  const changePassword = async () => {
    await axios.put('http://localhost:8080/api/find-password', {
      username: id,
      originalPassword: '',
      password: newPassword,
      passwordCheck: checkNewPassword,
    })
    .then(() => {
      alert('변경이 완료되었습니다')
      window.location.replace("/")
    })
  };

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1><img className={styles.documentImage} alt="document" src={document} />IdeaPot</h1>
        </div>
        { !isFind ? (
          <div className={styles.inputBox}>
            <div className={styles.idInput}>
              <p>아이디</p>
              <input type="text" ref={idInput} value={id} onChange={e => setId(e.target.value)} /> <label htmlFor="sendId"><img className={styles.sendIdImage} alt="plane" src={plane} /></label>
              <input type='button' id='sendId' className={styles.checkButton} onClick={checkId} />
            </div>
            <div className={styles.codeInput}>
              <p>인증코드</p>
              <input type="text" ref={codeInput} value={code} onChange={e => setCode(e.target.value)} /> <label htmlFor="codeCheck"><img className={styles.checkCodeImage} alt="checkMark" src={checkMark} /></label>
              <input type='button' id='codeCheck' className={styles.checkButton} onClick={checkCode} />
            </div>
          </div>
        ) : (
          <div className={styles.inputBox}>
            <div className={styles.newPasswordInput}>
              <p>새 비밀번호</p>
              <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            </div>
            <div className={styles.checkNewPasswordInput}>
              <p>새 비밀번호 확인</p>
              <input type="password" value={checkNewPassword} onChange={e => setCheckNewPassword(e.target.value)} />
            </div>
          </div>
        )}
        { !isFind ? (
          <div className={styles.bottom}>
            <input type="button" value="다음" onClick={checkCertification}/>
            <Link to="/login"><p>로그인</p></Link>
            <Link to="/searchId"><p>아이디 찾기</p></Link>
          </div>
        ) : (
          <div className={styles.bottom}>
            <input type="button" value="변경" onClick={changePassword}/>
          </div>
        )}
      </div>
      <div className={styles.password}>
        <p>Reset Your Password</p>
      </div>
    </div>
  )
}

export default ResetPw;