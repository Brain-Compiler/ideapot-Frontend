import React, { useState } from "react"
import document from '../../assets/document.png'
import checkMark from '../../assets/check_mark_white.png'
import styles from './register.module.scss'
import { Link } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1><img className={styles.documentImage} alt='document' src={document} />IdeaPot</h1>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.nameInput}>
            <p>이름</p>
            <input type='text' onChange={e => setName(e.target.value)} />
          </div>
          <div className={styles.idInput}>
            <p>아이디</p>
            <input type='text' onChange={e => setId(e.target.value)} /> <label htmlFor="check"><img className={styles.checkMarkImage} alt='checkMark' src={checkMark} /></label>
            <input type='button' id='check' className={styles.checkButton} />
          </div>
          <div className={styles.passwordInput}>
            <p>비밀번호</p>
            <input type='text' onChange={e => setPassword(e.target.value)} />
          </div>
          <div className={styles.checkPasswordInput}>
            <p>비밀번호 확인</p>
            <input type='text' onChange={e => setCheckPassword(e.target.value)} />
          </div>
        </div>
        <div className={styles.bottom}>
          <input type='button' value='다음' />
          <Link to="/login"><p>로그인</p></Link>
        </div>
      </div>
      <div className={styles.sign_up}>
        <p>Sign Up</p>
      </div>
    </div>
  )
}

export default Register