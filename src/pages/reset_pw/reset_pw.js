import React, { useState } from "react";
import document from "../../assets/document.png";
import plane from "../../assets/paper_plane_white.png"
import checkMark from "../../assets/check_mark_white.png";
import styles from "./reset_pw.module.scss";
import { Link } from "react-router-dom";

const ResetPw = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState("");
  const [isFind, setIsFind] = useState(false);

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1><img className={styles.documentImage} alt="document" src={document} />IdeaPot</h1>
        </div>
        { !isFind ? (
          <div className={styles.inputBox}>
            <div className={styles.emailInput}>
              <p>이메일</p>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} /> <label htmlFor="sendEmail"><img className={styles.sendEmailImage} alt="plane" src={plane} /></label>
              <input type='button' id='sendEmail' className={styles.checkButton} />
            </div>
            <div className={styles.codeInput}>
              <p>비밀번호</p>
              <input type="text" value={code} onChange={e => setCode(e.target.value)} /> <label htmlFor="codeCheck"><img className={styles.checkCodeImage} alt="checkMark" src={checkMark} /></label>
              <input type='button' id='codeCheck' className={styles.checkButton} />
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
            <input type="button" value="다음" />
            <Link to="/login"><p>로그인</p></Link>
            <Link to="/searchId"><p>아이디 찾기</p></Link>
          </div>
        ) : (
          <div className={styles.bottom}>
            <input type="button" value="변경" />
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